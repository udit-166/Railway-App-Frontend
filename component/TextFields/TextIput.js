import { useTheme } from "@react-navigation/native"
import { Image, Pressable, Text, TextInput, View } from "react-native"
import { getHeight, getWidth } from "../../utils/pixelSizeCalc";

export const TextInputForStation=(props)=>{
  const {colors, fonts} = useTheme();
    return (
      <Pressable onPress={props.onPress}>
      <TextInput
        style={{
          height: getWidth(50),
          paddingLeft: props.image ? getWidth(50) : getWidth(10),
          marginBottom:getWidth(10),
          backgroundColor: colors.secondary,
          borderWidth:getWidth(0.3),
          borderColor:colors.label,
          color: "white",
          paddingRight: getWidth(50), // Add padding to the right to create space for the image
          borderRadius: getWidth(10),
        }}
        placeholder={props.placeholder}
        placeholderTextColor={colors.label}
        value={props.value}
        editable={false}
      />
       <View style={{ position: "absolute", left: getWidth(12), top: getHeight(15) }}>
       <Image source={props.image} style={{width:getHeight(20), height:getWidth(20)}}/>
    </View>
    </Pressable>
    )
}
export const SearchInputForStation=(props)=>{
  const {colors, fonts} = useTheme();
    return (
      <Pressable onPress={props.onPress}>
      <TextInput
        style={{
          height: getHeight(50),
          paddingLeft: getWidth(20),
          marginBottom:getWidth(10),
          backgroundColor: colors.secondary,
          borderWidth:getWidth(0.3),
          borderColor:colors.label,
          color: "white",
          paddingRight: getWidth(50), // Add padding to the right to create space for the image
          borderRadius: getWidth(10),
        }}
        placeholder={props.placeholder}
        placeholderTextColor={colors.label}
        value={props.value}
        editable={props.editable}
      />
       
    </Pressable>
    )
}