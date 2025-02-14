import { useTheme } from "@react-navigation/native"
import { Image, Pressable, Text, View } from "react-native"
import { getFontSize, getHeight, getWidth } from "../../utils/pixelSizeCalc";

const ThridPartyCard=(props)=>{
    const {colors, fonts} = useTheme(); 
    return (
        <Pressable style={({pressed})=>[
            {opacity:pressed?0.5:1},
            {height:getWidth(50)},
            {backgroundColor:colors.secondary},
            {borderWidth:(getWidth(0.2))},
            {borderColor:colors.label},
            {width:"48%"},
            {justifyContent:"center"},
            {alignItems:"center"},
            {borderRadius:getWidth(5)},
            {flexDirection:"row"}
        ]} onPress={()=>{}} >
            <Image source={props.image} style={{width:getWidth(30),height:getHeight(30)}}/>
            <Text style={{color:"white", fontSize:getFontSize(14), fontWeight:fonts.regular}}>  {props.heading}</Text>
        </Pressable>
    )
}

export default ThridPartyCard;