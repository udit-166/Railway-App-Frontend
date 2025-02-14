import { useTheme } from "@react-navigation/native";
import { Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { getFontSize, getHeight, getWidth } from "../../utils/pixelSizeCalc";

const SeatTypeDetailCard = ({ isActive }) => {
    const { colors, fonts } = useTheme();
    
    // Determine background and border styles based on active state
    const cardStyle = {
        backgroundColor: isActive ? "#000229" : colors.secondary,
        borderWidth: getWidth(0.5),
        borderColor: isActive ? colors.primary : colors.label,
        padding: getHeight(10),
        borderRadius: getWidth(8),
        marginHorizontal:getWidth(15),
        marginBottom: getWidth(15),
        paddingBottom:getHeight(40)
    };

    return (
        <View style={cardStyle}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomColor: colors.label,
                borderBottomWidth: getWidth(1),
                paddingVertical: getWidth(5),
                marginBottom: getWidth(10),
                gap:getHeight(30)
            }}>
                <View style={{
                    flexDirection: "row",
                    gap: getHeight(6),
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Ionicons name="ticket-outline" size={getFontSize(14)} color={colors.offWhite} />
                    <Text style={{ color: colors.offWhite, fontSize: getFontSize(16) }}>Economy</Text>
                </View>
                <Text style={{ color: colors.offWhite, fontSize: getFontSize(16) }}>$0.00</Text>
            </View>
            {[1, 1, 1, 1].map((item, index) => (
                <View
                    key={index}
                    style={{
                        flexDirection: "row",
                        gap: getWidth(5),
                        alignItems: "center",
                        marginVertical: getWidth(2),
                    }}
                >
                    <MaterialCommunityIcons name="power-plug-outline" size={getFontSize(14)} color={colors.label} />
                    <Text style={{ fontSize: getFontSize(12), fontFamily: fonts.regular, color: colors.label }}>Power Plugs</Text>
                </View>
            ))}
        </View>
    );
};

export default SeatTypeDetailCard;
