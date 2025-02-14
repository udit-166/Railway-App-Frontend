import { Clipboard, Pressable, ScrollView, Text, ToastAndroid, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import BreifTicketDetailCard from "../../component/Card/BreifTicketDetailCard";
import { useTheme } from "@react-navigation/native";
import PassengerCard from "../../component/Card/PassengerCard";
import { useState } from "react";
import { getFontSize, getHeight, getWidth } from "../../utils/pixelSizeCalc";


const TicketDetail=({navigation})=>{
    const {colors, fonts} =useTheme();
    const [copied, setCopied] = useState(false); // Track the copied state
    const [iconName, setIconName] = useState("copy-outline");

    // Function to handle copying the PNR number and showing the toast message
    const handleCopyPNR = (pnr) => {
      Clipboard.setString(pnr); // Copy the PNR number to clipboard
      setCopied(true); // Update the copied state
      setIconName("copy")
      ToastAndroid.show("The PNR Number Is Copied", ToastAndroid.LONG)

      setTimeout(() => {
        setIconName("copy-outline");
      }, 2000); // After 2 seconds, revert to the original icon
    }
    const goBackNavigationHandler=()=>{
      navigation.navigate("TicketListScreen")
    }

    return (
        <View style={{ paddingHorizontal: getWidth(15) }}>
          <View style={{ justifyContent: "space-between", flexDirection: "row", marginTop: getHeight(23), marginBottom: getHeight(20), alignItems: "center" }}>
            <Pressable onPress={goBackNavigationHandler}>
              <Ionicons name="arrow-back" size={getFontSize(21)} color={colors.offWhite} />
            </Pressable>
    
            {/* Title */}
            <Text style={{ color: colors.offWhite, textAlign: "center", fontSize: getFontSize(20), fontWeight: "400" }}>
              Passengers Information
            </Text>
            <Pressable onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons name="dots-horizontal" size={getFontSize(21)} color={colors.offWhite} />
            </Pressable>
          </View>
    
          <ScrollView>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <BreifTicketDetailCard />
            </View>
    
            <Text style={{ color: colors.offWhite, fontSize: getFontSize(18), fontFamily: fonts.regular, marginTop: getHeight(18), marginBottom: getHeight(5) }}>PNR Number</Text>
            <View style={{ justifyContent: "space-between", paddingHorizontal: getWidth(12), flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: colors.label, fontSize: getFontSize(16), fontFamily: fonts.regular }}>8887943623</Text>
    
              {/* Copy Icon */}
              <Pressable onPress={() => handleCopyPNR("8887943623")}>
                <Ionicons name={iconName} size={getFontSize(18)} color={colors.offWhite} />
              </Pressable>
            </View>
    
            <View style={{ flexDirection: "row", marginTop: getHeight(10), alignItems: "center", gap: getWidth(5) }}>
              <Text style={{ color: colors.offWhite, fontSize: getFontSize(18), fontFamily: fonts.semiBold }}>Select Passengers</Text>
              <Text style={{ color: colors.offWhite, fontSize: getFontSize(16), fontFamily: fonts.semiBold }}>{`(2)`}</Text>
            </View>
    
            <View style={{ marginVertical: getHeight(5) }}>
              <PassengerCard />
              <PassengerCard />
            </View>
    
            <View>
              <Text style={{ color: colors.offWhite, fontSize: getFontSize(18), fontFamily: fonts.semiBold, marginTop: getHeight(10), marginBottom: getHeight(5) }}>Facility</Text>
    
              {[1, 1, 1, 1].map((item, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    gap: getWidth(5),
                    alignItems: "center",
                    marginVertical: getHeight(2),
                    paddingVertical: getHeight(10),
                    borderBottomWidth: getWidth(0.5),
                    borderBottomColor: colors.label,
                  }}
                >
                  <MaterialCommunityIcons name="power-plug-outline" size={getFontSize(14)} color={colors.label} />
                  <Text style={{ fontSize: getFontSize(12), fontFamily: fonts.regular, color: colors.label }}>Power Plugs</Text>
                </View>
              ))}
            </View>
    
            <View style={{ justifyContent: "space-between", flexDirection: "row", marginTop: getHeight(20) }}>
              <Text style={{ color: colors.label, fontSize: getFontSize(18), fontFamily: fonts.semiBold }}>Total Paid</Text>
              <Text style={{ color: colors.offWhite, fontSize: getFontSize(20), fontFamily: fonts.semiBold }}>$10000</Text>
            </View>
          </ScrollView>
        </View>
      );
    };
    

export default TicketDetail;