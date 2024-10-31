import { getStateFromPath, useTheme } from "@react-navigation/native"
import { Pressable, Text, View } from "react-native"

const GetStartedButton=(props)=>{
    const {colors, fonts} = useTheme();

    return (
        <Pressable style={({pressed})=>[
            {opacity:pressed?0.5:1},
            {height:50},
            {backgroundColor:colors.primary},
            {width:330},
            {justifyContent:"center"},
            {alignItems:"center"},
            {borderRadius:10}
        ]} onPress={props.onPress} 
        disabled={props.disable}>
            <Text style={{color:"white", fontFamily:fonts.ragular, fontSize:16}}>{props.title}</Text>
        </Pressable>
    )
}

export default GetStartedButton;