import { useTheme } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { getFontSize, getHeight, getWidth } from "../../utils/pixelSizeCalc";

const NoTicketMessage=()=>{
    const {colors, fonts} = useTheme();
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1, top:getHeight(150)}}>
            <FastImage 
                source={require('../../Images/NoFoundAnimation.gif')} // Ensure this is the correct path
                style={styles.gifImage} 
                resizeMode={FastImage.resizeMode.contain} // Make sure the GIF scales properly
            />
            <Text style={{color:colors.offWhite, fontSize:getFontSize(18), fontFamily:fonts.semiBold, textAlign:"center"}}>There are no result found</Text>
            <Text style={{color:colors.label, fontSize:getFontSize(14), fontFamily:fonts.semiBold, textAlign:"center", marginHorizontal:getWidth(50)}}>Book train ticket and start enjoying your trip</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    gifImage: {
        width: getWidth(70), // Increased the size of the GIF for better visibility
        height: getHeight(70), // Increased the size of the GIF for better visibility
        marginBottom: getWidth(20), // Space between GIF and text
    },
})
export default NoTicketMessage;