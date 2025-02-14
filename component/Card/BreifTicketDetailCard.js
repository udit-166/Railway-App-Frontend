import { useTheme } from "@react-navigation/native";
import { Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { getFontSize, getWidth } from "../../utils/pixelSizeCalc";

const BreifTicketDetailCard=()=>{
    const {colors, fonts} = useTheme();
    return (
        <View style={{flexDirection:"row", backgroundColor:colors.secondary}}>
            <View style={{borderWidth:getWidth(0.5), borderColor:colors.label, borderTopRightRadius:-getWidth(10), borderTopLeftRadius:getWidth(10), borderBottomLeftRadius:getWidth(10), borderBottomRightRadius:-getWidth(10), padding:getWidth(10), justifyContent:"center", borderStyle:"dashed"}}>
                <View  style={{borderRadius:getWidth(10), backgroundColor:colors.primary, justifyContent:"center", paddingVertical:30, paddingHorizontal:3}}>
                <Ionicons name="train-outline" size={getFontSize(20)} color={colors.offWhite} />
                </View>
            </View>
            <View style={{borderWidth:getWidth(0.5), borderColor:colors.label, borderTopRightRadius:getWidth(10), borderTopLeftRadius:-getWidth(10), borderBottomLeftRadius:-getWidth(10), borderBottomRightRadius:getWidth(10), padding:getWidth(10),  borderStyle:"dashed"}}>
                <View  style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                    <View style={{flexDirection:"row", justifyContent:"center", gap:5}}>
                <Ionicons name="calendar-outline" size={getFontSize(12)} color={colors.offWhite} />
                <Text style={{color:colors.offWhite, fontSize:getFontSize(10)}}>Dec 26, 2022</Text>
                </View>
                <View style={{flexDirection:"row", justifyContent:"center", gap:getWidth(5)}}>
                <Ionicons name="people-outline" size={getFontSize(14)} color={colors.offWhite} />
                <Text style={{color:colors.offWhite, fontSize:10}}>2 Passengers</Text>
                </View>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-between",marginTop:getWidth(14), alignItems:"center" }}>
                <Text style={{color:colors.offWhite, fontFamily:fonts.medium, fontSize:getFontSize(14)}}>08:30 AM</Text>
                <View style={{flexDirection:"row", alignItems:"center", marginHorizontal:getWidth(8)}}>
                <Text style={{color:colors.label, fontFamily:fonts.medium}}>----</Text><Text style={{color:colors.label, fontFamily:fonts.medium, fontSize:getFontSize(12)}}>11h 30m</Text><Text  style={{color:colors.label, fontFamily:fonts.medium}}>----</Text>
                </View>
                <Text style={{color:colors.offWhite, fontFamily:fonts.medium, fontSize:getFontSize(14)}}>09:00 PM</Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <Text style={{color:colors.label, fontSize:getFontSize(10), fontFamily:fonts.medium}}>Lucknow Station</Text>
                <Text style={{color:colors.label, fontSize:getFontSize(10), fontFamily:fonts.medium}}>Gorakhpur Station</Text>
            </View>
            <View style={{ flexDirection:"row", justifyContent:"space-between", borderTopWidth:getWidth(0.5), alignItems:"center", borderTopColor:colors.label, paddingTop:getWidth(5), marginTop:getWidth(5)}}>
                <Text style={{color:colors.warning, fontSize:getFontSize(12)}}>View Detail</Text>
                <Ionicons name="arrow-forward" size={getFontSize(12)} color={colors.warning} />
            </View>
            </View>
            
        </View>
    )
}

export default BreifTicketDetailCard;