import { useTheme } from "@react-navigation/native"
import { Image, Pressable, Text, View } from "react-native"

const ThridPartyCard=(props)=>{
    const {colors, fonts} = useTheme(); 
    return (
        <Pressable style={({pressed})=>[
            {opacity:pressed?0.5:1},
            {height:50},
            {backgroundColor:colors.secondary},
            {borderWidth:0.2},
            {borderColor:colors.label},
            {width:"48%"},
            {justifyContent:"center"},
            {alignItems:"center"},
            {borderRadius:5},
            {flexDirection:"row"}
        ]} onPress={()=>{}} >
            <Image source={props.image} style={{width:30,height:30}}/>
            <Text style={{color:"white", fontSize:14, fontWeight:fonts.regular}}>  {props.heading}</Text>
        </Pressable>
    )
}

export default ThridPartyCard;