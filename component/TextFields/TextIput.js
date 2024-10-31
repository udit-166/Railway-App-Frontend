import { Image, TextInput, View } from "react-native"

export const TextInputForStation=(props)=>{
    return (
        <View>
        <TextInput  style={{
          borderBottomWidth: 1,
          borderBottomColor: "gray",
          paddingLeft: 50,
          paddingRight: 50, // Add padding to the right to create space for the arrow
        }}
         placeholder={props.placeholder}
         value={props.value}/>
        <View style={{ position: "absolute", left: 12, top: 12 }}>
        <Image source={props.image} style={{ width: 35, height: 20 }} />
      </View>
        </View>
    )
}