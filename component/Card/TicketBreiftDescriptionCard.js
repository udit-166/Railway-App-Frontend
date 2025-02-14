import { useTheme } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { getFontSize, getHeight, getWidth } from "../../utils/pixelSizeCalc";

const TicketBreiftDescriptionCard=({ticket, onPress})=>{
    const {colors, fonts} = useTheme();
    return (
        <Pressable style={{flexDirection:"row", backgroundColor:colors.secondary, marginVertical:getHeight(5)}} onPress={onPress}>
            <View style={{borderWidth:getWidth(0.5), borderColor:colors.label, borderTopRightRadius:getWidth(-10), borderTopLeftRadius:getWidth(10), borderBottomLeftRadius:getWidth(10), borderBottomRightRadius:getWidth(-10), padding:getWidth(10), justifyContent:"center", borderStyle:"dashed"}}>
                <View  style={{borderRadius:getWidth(10), backgroundColor:colors.primary, justifyContent:"center", paddingVertical:getWidth(20), paddingHorizontal:getWidth(3)}}>
                <Ionicons name="train-outline" size={getFontSize(20)} color={colors.offWhite} />
                </View>
            </View>
            <View style={{borderWidth:getWidth(0.5), borderColor:colors.label, borderTopRightRadius:getWidth(10), borderTopLeftRadius:getWidth(-10), borderBottomLeftRadius:getWidth(-10), borderBottomRightRadius:(getWidth), paddingVertical:(getWidth),paddingHorizontal:getWidth(25),  borderStyle:"dashed"}}>
                <View  style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                    <View style={{flexDirection:"row", justifyContent:"center", gap:getWidth(5)}}>
                <Ionicons name="calendar-outline" size={getFontSize(12)} color={colors.offWhite} />
                <Text style={{color:colors.offWhite, fontSize:getFontSize(10)}}>{ticket.date}</Text>
                </View>
                <View style={{flexDirection:"row", justifyContent:"center", gap:getWidth(5)}}>
                <Ionicons name="people-outline" size={getFontSize(12)} color={colors.offWhite} />
                <Text style={{color:colors.offWhite, fontSize:getFontSize(10)}}>{ticket.passenger} Passengers</Text>
                </View>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-between",marginTop:getWidth(14), alignItems:"center" }}>
                <Text style={{color:colors.offWhite, fontFamily:fonts.medium, fontSize:getFontSize(14)}}>{ticket.source_time}</Text>
                <View style={{flexDirection:"row", alignItems:"center", marginHorizontal:getWidth(8)}}>
                <Text style={{color:colors.label, fontFamily:fonts.medium}}>----</Text><Text style={{color:colors.label, fontFamily:fonts.medium, fontSize:getFontSize(12)}}>{ticket.duration}</Text><Text  style={{color:colors.label, fontFamily:fonts.medium}}>----</Text>
                </View>
                <Text style={{color:colors.offWhite, fontFamily:fonts.medium, fontSize:getFontSize(14)}}>{ticket.departure_time}</Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <Text style={{color:colors.label, fontSize:getFontSize(10), fontFamily:fonts.medium}}>{ticket.source_station} Station</Text>
                <Text style={{color:colors.label, fontSize:getFontSize(10), fontFamily:fonts.medium}}>{ticket.destination_station} Station</Text>
            </View>
            </View>
            
        </Pressable>
    )
}

export default TicketBreiftDescriptionCard;