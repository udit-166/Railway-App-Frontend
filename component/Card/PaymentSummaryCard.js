import { useTheme } from "@react-navigation/native"
import { BackHandler, Pressable, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { getFontSize, getWidth } from "../../utils/pixelSizeCalc";

const PaymentSummaryCard = ({details}) => {
    const {colors, fonts} = useTheme();
    const iconName = details.status === "Successful"  ? "checkmark-circle" : "alert-circle-sharp";
    const color = details.status === "Successful" ? "#39e75f" : "#ee2400";
    return (
    <View
           
            style={{
                borderWidth: getWidth(0.5),
                borderColor: colors.label,
                borderRadius: getWidth(20),
                padding: getWidth(15),
                marginVertical: getWidth(10),
                marginHorizontal: getWidth(10)
            }}
        >
            <Pressable>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                
            <Text style={{color:colors.offWhite, fontSize:getFontSize(14), fontFamily:fonts.regular}}>{details.source_station_code} - {details.destination_station_code}</Text>
            <Text style={{color:colors.offWhite, fontSize:getFontSize(14), fontFamily:fonts.medium}}>{details.payment_amount}</Text>
            </View>
            <View style={{flexDirection:"row", gap:getWidth(15), justifyContent:"space-between",marginTop:14, alignItems:"center",paddingVertical:getWidth(3),paddingHorizontal:getWidth(10),borderRadius:getWidth(15), backgroundColor:details.status === "Successful" ? "#cefad0" : "#ffefea" }}>
                 <Ionicons name={iconName} size={getFontSize(24)} color={color} />
               <Text style={{color:details.status === "Successful" ? "#00ff00" : "#ee2400"}}>Booking {details.status}</Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:getWidth(5)}}>
                
            <Text style={{color:colors.label, fontSize:getFontSize(13), fontFamily:fonts.regular}}>Transaction Id</Text>
            <Text style={{color:colors.offWhite, fontSize:getFontSize(13), fontFamily:fonts.medium}}>{details.id}</Text>
            </View>
            </Pressable>
        </View>

)}

export default PaymentSummaryCard;