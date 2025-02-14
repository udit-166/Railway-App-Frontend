import React, { useState } from "react";
import { KeyboardAvoidingView, Pressable, ScrollView, Text, View, StyleSheet } from "react-native";
import BreifTicketDetailCard from "../../component/Card/BreifTicketDetailCard";
import { useTheme } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import PassengerCard from "../../component/Card/PassengerCard";
import { TextInputForStation } from "../../component/TextFields/TextIput";
import Ionicons from "react-native-vector-icons/Ionicons";
import GetStartedButton from "../../component/Buttons/GetStartedButton";
import { getFontSize, getHeight, getWidth } from "../../utils/pixelSizeCalc";


const PassengerInformation = ({route, navigation}) => {
  const { colors, fonts } = useTheme();
   const addPassengerHandler=()=>{
    navigation.navigate("AddPaseengerScreen")
   }

   const ContinueToPaymentHandler=()=>{
    navigation.navigate("SuccessScreen")
   }

  return (
    <View style={{ flex: 1, paddingHorizontal: getWidth(10) }}>
      {/* Back Button */}
      <Pressable style={{ position: "absolute", marginLeft: getWidth(20), marginTop: getHeight(30) }}>
        <Ionicons name="arrow-back" size={getFontSize(21)} color={colors.offWhite} />
      </Pressable>

      {/* Title */}
      <Text style={{
        color: colors.offWhite,
        textAlign: "center",
        fontSize: getFontSize(20),
        alignSelf: "center",
        marginTop: getHeight(27),
        fontWeight: "400"
      }}>
        Summary
      </Text>

      <ScrollView contentContainerStyle={{ paddingBottom: getHeight(80) }}>
        {/* Ticket Detail Card */}
        <View style={{ justifyContent: "center", alignItems: "center", marginTop: getHeight(20) }}>
          <BreifTicketDetailCard />
        </View>

        {/* IRCTC ID Section */}
        <View style={{ marginVertical: getHeight(5) }}>
          <Text style={{ fontSize: getFontSize(16), marginTop: getHeight(10), color: colors.offWhite, fontWeight: 600, marginBottom: getHeight(10) }}>
            Your IRCTC ID
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: getWidth(10) }}>
            <Text style={{ color: colors.offWhite, fontFamily: fonts.semiBold, fontSize: getFontSize(16) }}>udhishahi166</Text>
            <Pressable>
              <Text style={{ color: colors.primary, fontSize: getFontSize(14), fontFamily: fonts.semiBold }}>Change</Text>
            </Pressable>
          </View>
        </View>

        {/* Select Passengers Section */}
        <View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: getHeight(10), alignItems: "center" }}>
            <Text style={{ color: colors.offWhite, fontSize: getFontSize(18), fontFamily: fonts.semiBold }}>Select Passengers</Text>
            <Text style={{ color: colors.offWhite, fontSize: getFontSize(12), fontFamily: fonts.semiBold }}>0/4 Selected</Text>
          </View>

          <View style={{ marginVertical: getHeight(5) }}>
            <PassengerCard />
            <PassengerCard />
          </View>

          <Pressable
            style={{
              flexDirection: "row",
              gap: getHeight(10),
              borderTopWidth: getWidth(1),
              borderTopColor: colors.label,
              borderBottomWidth: getWidth(1),
              borderBottomColor: colors.label,
              paddingVertical: getHeight(5),
              marginVertical: getHeight(5),
              alignItems: "center"
            }}
            onPress={addPassengerHandler}
          >
            <MaterialCommunityIcons name="plus" size={getFontSize(24)} color={colors.offWhite} />
            <Text style={{ color: colors.offWhite, fontSize: getFontSize(14) }}>Add New Passenger</Text>
          </Pressable>

          {/* Information Transfer Details Section */}
          <View style={{ paddingVertical: getHeight(15), paddingHorizontal:getWidth(5)}}>
            <Text style={{ color: colors.offWhite, fontSize: getFontSize(18), fontFamily: fonts.semiBold, marginBottom: getHeight(20) }}>
              Information Transfer Details
            </Text>
            <TextInputForStation placeholder="8887943623" value={8887943623} />
            <TextInputForStation placeholder="user_email@gmail.com" value={"udhishahi1606@gmail.com"} />
            <GetStartedButton width={getWidth(320)} title="Save"disable={true} />
          </View>
        </View>
      </ScrollView>

      {/* Bottom Fixed Section for Total & Payment Button */}
      <KeyboardAvoidingView behavior="padding" style={styles.bottomSection}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", paddingHorizontal: getWidth(12), marginBottom:getHeight(8) }}>
          <View>
            <Text style={{ color: colors.label, fontSize: getFontSize(14) }}>Total</Text>
            <Text style={{ color: colors.offWhite, fontSize: getFontSize(20), fontFamily: fonts.semiBold }}>$1100.00</Text>
          </View>
          <GetStartedButton title="Continue To Payment" width={getWidth(215)} onPress={ContinueToPaymentHandler} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

// Bottom section styles for fixed positioning
const styles = StyleSheet.create({
  bottomSection: {
    position: "absolute",
    bottom: getHeight(0),
    left: getWidth(0),
    right: getWidth(0),
    backgroundColor: "#000229", // Set a solid background color to avoid transparency
    paddingVertical: getHeight(10),
    paddingBottom: getHeight(20), // Added to ensure space for the button
    zIndex: 1, // Ensure it's on top of the content
  }
});

export default PassengerInformation;
