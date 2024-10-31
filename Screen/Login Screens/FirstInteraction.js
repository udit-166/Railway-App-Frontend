import { useTheme } from "@react-navigation/native";
import { Image, Text, View } from "react-native"
import GetStartedButton from "../../component/Buttons/GetStartedButton";


const FirstInteractionScreen=({route, navigation})=>{

    const navigationHandler=()=>{
        navigation.navigate("LoginScreen");
    }
    const {colors, fonts} = useTheme()
    return (<View style={{flex:1,backgroundColor:colors.background, paddingHorizontal:12, justifyContent:"center", alignItems:"center"}}>
        <Image source={require("../../Images/Welcome-Image.png")} style={{width:350, height:500}}/>
        <View style={{justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontSize:30, color:"white", fontFamily:fonts.medium}}>Find Your Journey</Text>
        <Text style={{fontSize:16, color:colors.label, textAlign:'center', marginTop:8}}>Now You don't have to worry about going anywhere, find lots of train tickets to the various destinations you want in just one app!</Text>
        </View>
        <View style={{width:350,marginTop:80, justifyContent:"center", alignItems:"center"}}>
            <GetStartedButton onPress={navigationHandler} title="Get Started"/>
        </View>
        
    </View>)
}

export default FirstInteractionScreen;