import { useTheme } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { EmailTextField, PasswordTextField, PhoneNumberField } from "../../component/TextFields/LoginTextFields/LoginText";
import GetStartedButton from "../../component/Buttons/GetStartedButton";
import ThridPartyCard from "../../component/Card/ThridPartyCard";
import { useState } from "react";

const LoginScreen = ({route, navigation})=>{
    const {colors, fonts} = useTheme();
    const [isActive, setIsActive] = useState("email");
    const [isEmailShow, setIsEmailShow] = useState(true);

    const loginHandler=()=>{
        navigation.navigate("Verify", {email:"udhishahi1606@gmail.com", phonenumber:null})
    }
    return (
        <View style={{flex:1,backgroundColor:colors.background, paddingHorizontal:12, justifyContent:"flex-start",marginTop:50}}>
            <View style={{flexDirection:"row"}}>
            <Text style={{fontSize:24, color:"white", fontFamily:fonts.medium}}>Welcome Back</Text>
            <Image source={require("../../Images/Hi-Icon.png")} style={{width:35, height:35}}/>
            </View>
            <Text style={{fontSize:14, color:colors.label, marginTop:8}}>We happy to see you again. To use your account, you should log in first</Text>
            <View style={{backgroundColor:colors.secondary, flexDirection:"row",paddingVertical:5, paddingHorizontal:5, marginTop:40, height:45,borderRadius:10}}>
                <Pressable onPress={()=>{ setIsActive("email");
                    setIsEmailShow(true);}
                }style={styles.tabChoosen(isActive === "email")}>
                    <Text style={{color:"white"}}>Email</Text>
                </Pressable>
                <Pressable onPress={()=> {setIsActive("phoneNumber"); setIsEmailShow(false)}}style={styles.tabChoosen(isActive === "phoneNumber")}>
                    <Text style={{color:"white"}}>Phone Number</Text>
                </Pressable>
            </View>
           { isEmailShow ? (<><View style={{marginTop:15}}>
                <EmailTextField image={require("../../Images/cross-icon.png")} placeholder="Please Enter your email"/>
            </View>
            <View style={{marginTop:10}}>
                <PasswordTextField image={require("../../Images/open-eyes.png")} placeholder="Please Enter your Password"/>
            </View>
            <Text style={{textAlign:"right", color:"yellow", fontFamily:fonts.regular, fontSize:14, marginTop:5}}>Forgot Password?</Text></>):( 
                <View style={{marginTop:15}}>
                <PhoneNumberField image={require("../../Images/cross-icon.png")} placeholder="Please Enter your Phone Number"/>
            </View>)}
            <View style={{marginTop:40, alignItems:"center", justifyContent:"center"}}>
                <GetStartedButton title="Login" onPress={loginHandler}/>
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
            <Pressable onPress={()=> navigation.navigate("SignUpScreen")}><Text style={{fontSize:14, marginTop:8,color:colors.primary}}> Sign Up</Text></Pressable>
        </View>
        
       
        </View>
    )
}
const styles = StyleSheet.create({
    tabChoosen:(isActive)=>({
        backgroundColor: isActive ? "#4c4c4c" : "#0e1419", 
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        width:"50%"
    })
})
export default LoginScreen;