import { Animated, Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { TextInputForStation } from "../../component/TextFields/TextIput";
import { useState } from "react";

const Welcome=()=>{
    const [rotation, setRotation] = useState(new Animated.Value(0));

    const toggleRotation = () => {
        const newValue = rotation.__getValue() === 0 ? 1 : 0;
        Animated.timing(rotation, {
          toValue: newValue,
          duration: 300,
          useNativeDriver: true,
        }).start();
      };
    
      // Interpolate rotation value to degrees
      const rotateInterpolate = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "180deg"],
      });

    return(
    
    <View style={{marginHorizontal:15, marginVertical:20, flex:1}}>
      <View>
        <Text>Hi, there</Text>
        <Text>Udit Shahi</Text>
      </View>
        <View style={{ borderWidth: 1, borderColor: "gray", borderRadius: 10 }}>
        <TextInputForStation
          placeholder="Enter the source station name"
          image={require("../../Images/Train.png")}
        />

<TextInputForStation
          placeholder="Enter Destination Station name"
          image={require("../../Images/Train.png")}
        />
<View style={{flexDirection:"row"}}>
<TextInputForStation
          image={require("../../Images/Calendar-Icon.jpg")}
          value="15/06/2024"
        />
        <View style={{marginVertical:4 , borderWidth:0.5, borderColor:"gray", borderRadius:8}}>
            <View style={{backgroundColor:"green",paddingHorizontal:5}}>
                <Text style={{textAlign:"center", color:"#fff"}}>
                    Today
                </Text>
            </View>
            <View style={{paddingHorizontal:5}}>
                <Text>12/05/2024</Text>
            </View>
        </View>
</View>
<TouchableOpacity
          onPress={toggleRotation} // Toggle rotation on click
          style={{
            position: "absolute",
            right: 30,
            top: 28,
            zIndex: 9999,
            padding: 12,
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 60,
            backgroundColor: "#fff",
          }}
        >
          <Animated.Image
            source={require("../../Images/up-and-down-arrows.png")}
            style={{
              width: 20,
              height: 20,
              transform: [{ rotate: rotateInterpolate }],
            }}
          />
        </TouchableOpacity>
        </View>
    </View>)
}

export default Welcome;