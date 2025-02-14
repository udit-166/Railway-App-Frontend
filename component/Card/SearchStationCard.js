import { useTheme } from "@react-navigation/native";
import { Image, Pressable, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { getFontSize, getWidth } from "../../utils/pixelSizeCalc";

const SearchStationCard=(props)=>{
    const {colors, fonts} = useTheme();
    return (<Pressable style={{flexDirection:"row", paddingVertical:getWidth(10), borderBottomColor:colors.label, borderBottomWidth:getWidth(0.5), alignItems: "center",}}>
        <MaterialCommunityIcons name={props.iconName} size={getFontSize(24)} color={colors.label} />
        <View style={{marginLeft:getWidth(10)}}>
            <Text style={{color:colors.label, fontSize:getFontSize(14), fontFamily:fonts.medium}}>PQN Jn</Text>
            <Text style={{color:colors.label, fontSize:getFontSize(12), fontFamily:fonts.regular}}>Pune</Text>
        </View>
    </Pressable>)
}
export default SearchStationCard;