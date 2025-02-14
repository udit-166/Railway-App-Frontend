import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SearchInputForStation } from "../../component/TextFields/TextIput";
import Ionicons from "react-native-vector-icons/Ionicons";
import SearchStationCard from "../../component/Card/SearchStationCard";
import { getFontSize, getHeight, getWidth } from "../../utils/pixelSizeCalc";

const ChooseStation=()=>{
    const {colors, fonts} = useTheme();
    const [showRecentHistory, setShowRecentHistory] = useState(true); 
    return (
        <ScrollView style={{padding:getWidth(10)}}>
            <Text style={{color:colors.offWhite,fontSize:getFontSize(20), fontFamily:fonts.semiBold, marginBottom:getHeight(20)}}>Where do you want to start </Text>
            <SearchInputForStation placeholder="search the station"/>
            <Pressable style={{flexDirection:"row"}}>
            <Ionicons name="location-outline" size={getFontSize(15)} color="yellow" />
            <Text style={{color:colors.warning, fontSize:getFontSize(12), marginLeft:getWidth(3)}}>My current location</Text>
            </Pressable>
            {showRecentHistory && (<View>
                <Text style={{color:colors.offWhite, fontSize:getFontSize(16), fontFamily:fonts.medium, marginTop:getHeight(25)}}>Recent History</Text>
                {[1,1,1].map((item)=><SearchStationCard iconName="history"/>)}
                <Text style={{color:colors.offWhite, fontSize:getFontSize(16), fontFamily:fonts.medium, marginTop:getHeight(25)}}>Preffered Stations</Text>
                {[1,1,1,1,1,1,1].map((item)=><SearchStationCard iconName="star-outline"/>)}
            </View>)}


        </ScrollView>
    )
}

export default ChooseStation;