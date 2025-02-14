import { useTheme } from "@react-navigation/native"
import { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { getHeight, getWidth } from "../../../utils/pixelSizeCalc";

export const EmailTextField=(props)=>{
    const {colors, fonts} = useTheme();
    return (
        <View>
        <TextInput  style={{
          height:getWidth(50),
          paddingLeft: getWidth(20),
          backgroundColor:colors.secondary,
          borderWidth:getWidth(0.2),
          borderColor:colors.label,
          color:"white",
          paddingRight: getWidth(50), 
          borderRadius:getWidth(10)// Add padding to the right to create space for the arrow
        }}
         placeholder={props.placeholder}
         placeholderTextColor={colors.label}
         value={props.value}/>
        <View style={{ position: "absolute", right: getWidth(12), top: getHeight(15) }}>
        <Image source={props.image} style={{ width: getWidth(23), height: getHeight(20) }} />
      </View>
        </View>
    )
}
export const PhoneNumberField=(props)=>{
  const {colors, fonts} = useTheme();
  return (
      <View>
      <TextInput  style={{
        height:getHeight(50),
        paddingLeft: getWidth(50),
        backgroundColor:colors.secondary,
        borderWidth:getWidth(0.2),
        borderColor:colors.label,
        color:"white",
        paddingRight: getWidth(50), 
        borderRadius:getWidth(10)// Add padding to the right to create space for the arrow
      }}
       placeholder={props.placeholder}
       placeholderTextColor={colors.label}
       value={props.value}/>
      <View style={{ position: "absolute", right: getWidth(12), top: getHeight(15) }}>
      <Image source={props.image} style={{ width: getWidth(23), height: getHeight(20) }} />
      </View>
      <View style={{ position: "absolute", left: getWidth(12), top: getHeight(15) }}>
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
          height:getHeight(50),
        paddingLeft: getWidth(50),
        backgroundColor:colors.secondary,
        borderWidth:getWidth(0.2),
        borderColor:colors.label,
        color:"white",
        paddingRight: getWidth(50), 
        borderRadius:getWidth(10)// Add padding to the right to create space for the arrow
        }}
        placeholder={props.placeholder}
        placeholderTextColor={colors.label}
        secureTextEntry={!isPasswordVisible} // Show dots when not visible
        value={props.value}
      />
      <View style={{ position: "absolute", right: getWidth(12), top: getHeight(15)}}>
        <Pressable onPress={togglePasswordVisibility}>
          <Image
            source={
              isPasswordVisible
                ? require("../../../Images/open-eyes.png")
                : require("../../../Images/close-eyes.png")
            }
            style={{ width: getWidth(23), height: getHeight(20) }}
          />
        </Pressable>
      </View>
    </View>
  );
};
export const NameTextField=(props)=>{
  const {colors, fonts} = useTheme();
  return (
      <View>
      <TextInput  style={{
         height:getHeight(50),
         paddingLeft: getWidth(50),
         backgroundColor:colors.secondary,
         borderWidth:getWidth(0.2),
         borderColor:colors.label,
         color:"white",
        paddingRight: props.image ? getWidth(50): getWidth(20), 
        borderRadius:getWidth(5),// Add padding to the right to create space for the arrow
        marginVertical:getHeight(8)
      }}
       placeholder={props.placeholder}
       placeholderTextColor={colors.label}
       value={props.value}/>
      <View style={{ position: "absolute",  right: getWidth(12), top: getHeight(15)}}>
      {props.image && <Image source={props.image} style={{ width: getWidth(23), height: getHeight(20)  }} />}
    </View>
      </View>
  )
}