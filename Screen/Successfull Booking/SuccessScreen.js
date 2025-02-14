import { useTheme } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";
import GetStartedButton from "../../component/Buttons/GetStartedButton";
import BackToHomePageButton from "../../component/Buttons/BackToHomePage";
import FastImage from "react-native-fast-image";
import { getFontSize, getHeight, getWidth } from "../../utils/pixelSizeCalc";

const SuccessScreen = ({route,navigation }) => {
    const { colors } = useTheme();

    const ViewTicketDetail=()=>{
        navigation.navigate("ViewTicketDetail");
    }

    const GoToHomePage=()=>{
        navigation.navigate("Welcome");
    }
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

            {/* GIF Image */}
            <FastImage 
                source={require('../../Images/success-animation.gif')} // Ensure this is the correct path
                style={styles.gifImage} 
                resizeMode={FastImage.resizeMode.contain} // Make sure the GIF scales properly
            />
            {/* Success Text */}
            <Text style={{ color: colors.offWhite, textAlign: "center", marginTop: getHeight(10), marginBottom: getHeight(5) }}>
                Booking Completed!
            </Text>
            
            <Text style={{ color: colors.label, fontSize: getFontSize(12), textAlign: "center", marginHorizontal: getWidth(40) }}>
                Confirmation of your order has been sent to your email address.
            </Text>

            {/* Button Container */}
            <View style={[styles.buttonContainer, { gap: getWidth(8) }]}>
                <GetStartedButton title="View your ticket" width={getWidth(310)} onPress={ViewTicketDetail} />
                <BackToHomePageButton title="Back to home screen" width={getWidth(310)} onPress={GoToHomePage}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    gifImage: {
        width: 70, // Increased the size of the GIF for better visibility
        height: 70, // Increased the size of the GIF for better visibility
        marginBottom: 20, // Space between GIF and text
    },
    buttonContainer: {
        position: "absolute",
        bottom: 10,
        left: 0,
        right: 0,
        paddingHorizontal: 16,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: "center"
    },
});

export default SuccessScreen;
