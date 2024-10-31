import { useTheme } from "@react-navigation/native";
import { Image, Pressable, Text, View } from "react-native";
import { EmailTextField, PasswordTextField } from "../../component/TextFields/LoginTextFields/LoginText";
import GetStartedButton from "../../component/Buttons/GetStartedButton";
import ThridPartyCard from "../../component/Card/ThridPartyCard";

const Registration=({route, navigation})=>{
    const {colors, fonts} = useTheme();
    return (
        <View style={{flex:1,backgroundColor:colors.background, paddingHorizontal:12, justifyContent:"flex-start",marginTop:50}}>
            <View style={{flexDirection:"row"}}>
            <Text style={{fontSize:24, color:"white", fontFamily:fonts.medium}}>Create New Account</Text>
            <Image source={require("../../Images/fire-icon.png")} style={{width:35, height:35}}/>
            </View>
            <Text style={{fontSize:14, color:colors.label, marginTop:8}}>Please fill the form to continue</Text>
            <View style={{marginTop:30}}>
                <EmailTextField image={require("../../Images/cross-icon.png")} placeholder="Email"/>
            </View>
            <View style={{marginTop:10}}>
                <PasswordTextField image={require("../../Images/open-eyes.png")} placeholder=" Password"/>
            </View>
            <View style={{marginTop:10}}>
                <PasswordTextField image={require("../../Images/open-eyes.png")} placeholder="Confirm Password"/>
            </View>
            <View style={{marginTop:40, alignItems:"center", justifyContent:"center"}}>
                <GetStartedButton title="Next"/>
        </View>
        <View>
            <Text style={{fontSize:14, color:colors.label, marginTop:30, textAlign:"center"}}>----------Sign in with Google or Facebook----------</Text>
            <View style={{flexDirection:"row",columnGap:"5%", marginTop:30}}>
                <ThridPartyCard image={require("../../Images/Google.png")} heading="Google"/>
                <ThridPartyCard image={require("../../Images/facebook.png")} heading="Facebook"/>
            </View>
        </View>
        <View style={{flexDirection:"row", justifyContent:"center", marginTop:20}}>
            <Text style={{fontSize:14, color:colors.label, marginTop:8}}>Don't have an account?</Text>
            <Pressable onPress={()=> navigation.navigate("LoginScreen")}><Text style={{fontSize:14, marginTop:8,color:colors.primary}}> Sign In</Text></Pressable>
        </View>
       
            </View>)
}


export default Registration;