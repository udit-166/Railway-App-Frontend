import { useTheme } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { getFontSize, getHeight, getWidth } from "../../utils/pixelSizeCalc";

const Verify =({route, navigation})=>{
    const {colors, fonts} = useTheme();
    const {email, phonenumber} = route.params;
    const [timer, setTimer] = useState(60); // Initial timer value (1 minute)

  // Countdown logic
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer]);
  const handleResend = () => {
    if (timer === 0) {
      setTimer(60); // Reset the timer to 60 seconds
      console.log("Resending OTP...");
      // Add your OTP resend logic here
    }
  };
  const navigationHandler=(text)=>{
    navigation.navigate("Home")
  }
    return (
        <View>
            <Text style={{color:"white", textAlign:"center", fontSize:getFontSize(23), fontsFamily:fonts.semiBold, paddingTop:getHeight(40)}}>Verification</Text>
            <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: getFontSize(26),
          fontFamily: fonts.regular,
          marginTop: getHeight(20),
        }}
      >
        {timer > 0 ? `00:${timer < 10 ? `0${timer}` : timer}` : "00:00"}
      </Text>
      
        <Text style={{color:colors.label,marginTop:getHeight(20), textAlign:"center", paddingHorizontal:getWidth(50)}}>{`We sent the verification code to your mention ${email.length>0 ? "email id" : "phone number"}`}</Text>
        <TouchableOpacity onPress={handleResend} disabled={timer > 0}>
        <Text
          style={{
            color: timer === 0 ? colors.warning : colors.label, // Enable when timer reaches 0, otherwise show as disabled
            marginTop: getHeight(15),
            textAlign: "center",
            fontSize: getFontSize(14),
          }}
        >
          Send Again
        </Text>
      </TouchableOpacity>
      
            <OtpInput
  numberOfDigits={4}
  focusColor={colors.primary}
  focusStickBlinkingDuration={500}
  onTextChange={(text) => console.log(text)}
  onFilled={navigationHandler}
  textInputProps={{
    accessibilityLabel: "One-Time Password",
  }}
   theme={{
     containerStyle: styles.container,
    pinCodeContainerStyle: styles.pinCodeContainer,
     pinCodeTextStyle: styles.pinCodeText,
     focusStickStyle: styles.focusStick,
//     focusedPinCodeContainerStyle: styles.activePinCodeContainer,
   }}
/>
        <View style={{justifyContent:"center", alignItems:"center", fontSize:getFontSize(16), flexDirection:"row", gap:getWidth(5), marginTop:getHeight(10)}}>
            <Text style={{color:"white"}}>{email.length>0?email:phonenumber}</Text>
            <TouchableOpacity>
            <Image source={require("../../Images/EditIcon.png")} style={{width:getWidth(15), height:getHeight(15)}}/>
            </TouchableOpacity>
        </View>
    </View>
)}

const styles=StyleSheet.create({
    container:{
        marginVertical:getHeight(20),
        paddingHorizontal:getWidth(55),
    },
    pinCodeContainer:{
        backgroundColor:"#4c4c4c",
        borderColor:"#0e1419",  
         
    },
    pinCodeText:{
        color:"white"
    },
    focusStick:{
        color:"white"

    }
})
export default Verify;