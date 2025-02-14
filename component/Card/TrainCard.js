import { useNavigation, useTheme } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import { getFontSize, getHeight, getWidth } from "../../utils/pixelSizeCalc";

const TrainCard=(props)=>{
    const {colors, fonts} = useTheme();
     const SeatSelectionHandler=()=>{
        props.onPress();
    }
    return (
        <LinearGradient
            colors={["#282828", colors.background, colors.secondary]} // Add gradient colors here
            style={{
                borderWidth: getWidth(0.5),
                borderColor: colors.label,
                borderRadius: getWidth(20),
                padding: getWidth(15),
                marginVertical: getHeight(10),
                marginHorizontal: getWidth(10)
            }}
        >
            <Pressable onPress={SeatSelectionHandler}>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <View style={{flexDirection:"row"}}>
            <Ionicons name="train-outline" size={getFontSize(24)} color={colors.offWhite} />
            <Text style={{color:colors.offWhite, fontSize:getFontSize(14), fontFamily:fonts.regular}}>Gorakhpur Intercity Express</Text>
            </View>
            <Text style={{color:colors.offWhite, fontSize:getFontSize(14), fontFamily:fonts.medium}}>12532</Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-between",marginTop:getWidth(14), alignItems:"center" }}>
                <Text style={{color:colors.offWhite, fontFamily:fonts.medium, fontSize:getFontSize(16)}}>08:30 AM</Text>
                <View style={{flexDirection:"row"}}>
                <Text style={{color:colors.label, fontFamily:fonts.medium}}>-------</Text><Ionicons name="train-outline" size={getFontSize(24)} color={colors.label} /><Text  style={{color:colors.label, fontFamily:fonts.medium}}>-------</Text>
                </View>
                <Text style={{color:colors.offWhite, fontFamily:fonts.medium, fontSize:getFontSize(16)}}>09:00 PM</Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <Text style={{color:colors.label, fontSize:getFontSize(12), fontFamily:fonts.medium}}>Lucknow Station</Text>
                <Text style={{color:colors.label, fontSize:getFontSize(12), fontFamily:fonts.medium}}>Gorakhpur Station</Text>
            </View>
            </Pressable>
        </LinearGradient>
    )
}

export default TrainCard;