import { Animated, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { TextInputForStation } from "../../component/TextFields/TextIput";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";
import BottomSheet from "../../component/BottomSheet";
import GetStartedButton from "../../component/Buttons/GetStartedButton";
import { getFontSize, getHeight, getWidth } from "../../utils/pixelSizeCalc";

const Welcome=({route, navigation})=>{
    const [rotation, setRotation] = useState(new Animated.Value(0));
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [showOneWay, setShowOneWay] = useState(true);
    const [isActive, setIsActive] = useState("One Way");
    const [activeComponent, setActiveComponent] = useState(null);
    const {colors, fonts} = useTheme();
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

      const toggleModal = (component) => {
        setActiveComponent(component); // Set the active component for BottomSheet
        setIsModalVisible(!isModalVisible);
    };
    const navigationHandler=()=>{
      navigation.navigate("TrainList");
    }

    return(
    
    <View style={{marginHorizontal:getWidth(15), marginVertical:getHeight(20), flex:1}}>
      <View>
        <Text style={{color:colors.label, fontFamily:fonts.medium}}>Hi there,
        </Text>
        <Text style={{color:colors.offWhite, fontFamily:fonts.semiBold, fontSize:16}}>Udit Shahi</Text>
      </View>
      <View style={{backgroundColor:colors.secondary, flexDirection:"row",paddingVertical:getHeight(5), paddingHorizontal:getWidth(5), marginTop:getHeight(20), height:getHeight(45),borderRadius:getWidth(10)}}>
                <Pressable onPress={()=>{ setIsActive("One Way");
                    setShowOneWay(true);}
                }style={styles.tabChoosen(isActive === "One Way")}>
                    <Text style={{color:"white"}}>One Way</Text>
                </Pressable>
                <Pressable onPress={()=> {setIsActive("Round Trip"); setShowOneWay(false)}}style={styles.tabChoosen(isActive === "Round Trip")}>
                    <Text style={{color:"white"}}>Round Trip</Text>
                </Pressable>
        </View>
        <Text style={{color:colors.offWhite, fontSize:getFontSize(20), fontFamily:fonts.semiBold, marginTop:getHeight(20), marginBottom:getHeight(15)}}>Let's make a journey</Text>

        <TextInputForStation
                placeholder="Where do you want to start from"
                image={require("../../Images/location-icon.png")}
                onPress={() => toggleModal("ChooseStation")}
            />
            <TextInputForStation
                placeholder="Choose your destination"
                image={require("../../Images/Destination-icon.png")}
                onPress={() => toggleModal("ChooseStation")}
            />
            <TextInputForStation
                placeholder="Date of departure"
                image={require("../../Images/calendar.png")}
                onPress={() => toggleModal("ChooseDate")}
            />
            <TextInputForStation
                placeholder="Passengers"
                image={require("../../Images/passengers.png")}
                onPress={() => toggleModal("NumberOfPassengers")}
            />
            <GetStartedButton title="Search" width={getWidth(315)} onPress={navigationHandler}/>
            <BottomSheet
                isModalVisible={isModalVisible}
                toggleModal={() => setIsModalVisible(false)}
                activeComponent={activeComponent} // Pass the active component to BottomSheet
            />
<TouchableOpacity
          onPress={toggleRotation} // Toggle rotation on click
          style={{
            position: "absolute",
            borderRadius:getWidth(20),
            right: getWidth(22),
            top:getHeight(200),
            zIndex: 9999,
            backgroundColor: "white",
          }}
        >
          <Animated.Image
            source={require("../../Images/swap.png")}
            style={{
              width: getWidth(42),
              height: getHeight(42),
              padding:getWidth(0),
              margin:getWidth(0),
              
              transform: [{ rotate: rotateInterpolate }],
            }}
          />
        </TouchableOpacity>
        </View>
  )
}
const styles = StyleSheet.create({
  tabChoosen:(isActive)=>({
      backgroundColor: isActive ? "#4c4c4c" : "#0e1419", 
      borderRadius:getWidth(10),
      justifyContent:"center",
      alignItems:"center",
      width:"50%"
  })
})
export default Welcome;