import { useTheme } from "@react-navigation/native"
import { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

export const EmailTextField=(props)=>{
    const {colors, fonts} = useTheme();
    return (
        <View>
        <TextInput  style={{
          height:50,
          paddingLeft: 20,
          backgroundColor:colors.secondary,
          borderWidth:0.2,
          borderColor:colors.label,
          color:"white",
          paddingRight: 50, 
          borderRadius:10// Add padding to the right to create space for the arrow
        }}
         placeholder={props.placeholder}
         placeholderTextColor={colors.label}
         value={props.value}/>
        <View style={{ position: "absolute", right: 12, top: 15 }}>
        <Image source={props.image} style={{ width: 23, height: 20 }} />
      </View>
        </View>
    )
}
export const PhoneNumberField=(props)=>{
  const {colors, fonts} = useTheme();
  return (
      <View>
      <TextInput  style={{
        height:50,
        paddingLeft: 50,
        backgroundColor:colors.secondary,
        borderWidth:0.2,
        borderColor:colors.label,
        color:"white",
        paddingRight: 50, 
        borderRadius:10// Add padding to the right to create space for the arrow
      }}
       placeholder={props.placeholder}
       placeholderTextColor={colors.label}
       value={props.value}/>
      <View style={{ position: "absolute", right: 12, top: 15 }}>
      <Image source={props.image} style={{ width: 23, height: 20 }} />
      </View>
      <View style={{ position: "absolute", left: 12, top: 15 }}>
      <Text style={{color:colors.label}}>+91 | </Text>
    </View>
      </View>
  )
}
export const PasswordTextField = (props) => {
  const { colors } = useTheme();
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View>
      <TextInput
        style={{
          height: 50,
          paddingLeft: 20,
          backgroundColor: colors.secondary,
          borderWidth:0.3,
          borderColor:colors.label,
          color: "white",
          paddingRight: 50, // Add padding to the right to create space for the image
          borderRadius: 10,
        }}
        placeholder={props.placeholder}
        placeholderTextColor={colors.label}
        secureTextEntry={!isPasswordVisible} // Show dots when not visible
        value={props.value}
      />
      <View style={{ position: "absolute", right: 12, top: 15 }}>
        <Pressable onPress={togglePasswordVisibility}>
          <Image
            source={
              isPasswordVisible
                ? require("../../../Images/open-eyes.png")
                : require("../../../Images/close-eyes.png")
            }
            style={{ width: 23, height: 20 }}
          />
        </Pressable>
      </View>
    </View>
  );
};