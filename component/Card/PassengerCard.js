import { useTheme } from "@react-navigation/native";
import { Text, View } from "react-native";
import { getFontSize, getHeight, getWidth } from "../../utils/pixelSizeCalc";

const PassengerCard = ()=>{
    const {colors, fonts} = useTheme();
    return (
        <View style={{paddingVertical:getWidth(10), paddingHorizontal:getWidth(15), borderWidth:getWidth(0.5), borderColor:colors.label, borderRadius:getWidth(15), marginVertical:getHeight(5), backgroundColor:colors.background}}>
            <View style={{flexDirection:"row", alignItems:"center", marginVertical:getHeight(5)}}>
                <Text style={{color: colors.offWhite, fontSize:getFontSize(16), fontFamily:fonts.semiBold}}>Ester Howard</Text>
                <Text style={{color:colors.label, fontSize:getFontSize(14), fontFamily:fonts.regular, marginLeft:5}}>{`(Adult)`}</Text>
            </View>
            <View style={{flexDirection:"row", gap:getWidth(52)}}>
                <Text style={{color:colors.label, fontSize:getFontSize(12), fontFamily:fonts.semiBold}}>PNR Number</Text>
                <Text style={{color:colors.label, fontSize:getFontSize(12), fontFamily:fonts.semiBold}}>Seat</Text>
            </View>
            <View style={{flexDirection:"row", gap:getWidth(40)}}>
                <Text style={{color:colors.offWhite, fontSize:getFontSize(16), fontFamily:fonts.semiBold}}>887943623</Text>
                <Text style={{color:colors.offWhite, fontSize:getFontSize(16), fontFamily:fonts.semiBold}}>19</Text>
            </View>
        </View>
    )
}

export default PassengerCard;