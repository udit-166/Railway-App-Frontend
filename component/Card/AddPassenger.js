import { useTheme } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { getFontSize, getHeight, getWidth } from "../../utils/pixelSizeCalc";

const AddPassenger = (props) => {
    const { colors, fonts } = useTheme();
    const [passengerCount, setPassengerCount] = useState(0); // Initialize passenger count

    // Function to handle the increase in passenger count
    const increaseCount = () => {
        setPassengerCount((prevCount) => prevCount + 1);
    };

    // Function to handle the decrease in passenger count
    const decreaseCount = () => {
        if (passengerCount > 0) {
            setPassengerCount((prevCount) => prevCount - 1);
        }
    };

    return (
        <View style={{
            flexDirection: "row",
            paddingVertical: getHeight(10),
            paddingHorizontal: getHeight(9),
            borderBottomColor: colors.label,
            borderBottomWidth: getWidth(0.5),
            alignItems: "center",
            justifyContent: "space-between"
        }}>
            <Text style={{ color: colors.offWhite, fontSize: getFontSize(14), fontFamily: fonts.medium }}>
                {props.heading}
            </Text>
            <View style={{ flexDirection: "row", gap:getWidth(9), alignItems: "center" }}>
                <Pressable onPress={decreaseCount} disabled={passengerCount === 0}>
                    <MaterialCommunityIcons 
                        name="minus" 
                        size={getFontSize(14)} 
                        color={passengerCount > 0 ? colors.offWhite : '#d9d9d9'} // Gray if disabled
                    />
                </Pressable>
                <Text style={{ color: colors.offWhite, fontSize: getFontSize(14), fontFamily: fonts.medium }}>
                    {passengerCount}
                </Text>
                <Pressable onPress={increaseCount}>
                    <MaterialCommunityIcons name="plus" size={getFontSize(14)} color={colors.offWhite} />
                </Pressable>
            </View>
        </View>
    );
}

export default AddPassenger;
