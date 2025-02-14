import { getStateFromPath, useTheme } from "@react-navigation/native"
import { Pressable, Text, View } from "react-native"
import { getFontSize, getHeight, getWidth } from "../../utils/pixelSizeCalc";

const BackToHomePageButton=(props)=>{
    const {colors, fonts} = useTheme();

    return (
        <Pressable style={({pressed})=>[
            {opacity:props.disable ? 0.5 : pressed?0.5:1},
            {height:getHeight(50)},
            {backgroundColor:colors.secondary},
            {borderWidth:getWidth(2)},
            {borderColor:colors.primary},
            {width:props.width},
            {justifyContent:"center"},
            {alignItems:"center"},
            {borderRadius:getWidth(10)}
        ]} onPress={props.onPress} 
        >
            <Text style={{color:"white", fontFamily:fonts.ragular, fontSize:getFontSize(16)}}>{props.title}</Text>
        </Pressable>
    )
}

export default BackToHomePageButton;

