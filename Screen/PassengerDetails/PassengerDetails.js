import React, { useState, useRef } from "react";
import { Pressable, Text, View, ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "@react-navigation/native";
import PassengerInformationForm from "./PassenmgerInformationForm";
import GetStartedButton from "../../component/Buttons/GetStartedButton";
import { getFontSize, getHeight, getWidth } from "../../utils/pixelSizeCalc";

const PassengerDetails = ({ navigation }) => {
  const { colors } = useTheme();
  const [selectedPassenger, setSelectedPassenger] = useState(1); // Default to first passenger
  const [passengerForms, setPassengerForms] = useState({ 1: true }); // Default form for passenger 1

  // Reference for the horizontal ScrollView
  const scrollViewRef = useRef(null);

  const passengerNumber = [
    { id: 1, Passenger: "1", type: "Adult" },
    { id: 2, Passenger: "2", type: "Adult" },
    { id: 3, Passenger: "3", type: "Adult" },
    { id: 4, Passenger: "4", type: "Child" }
  ];

  // Handle passenger selection and load the corresponding form
  const handlePassengerPress = (passengerId) => {
    setSelectedPassenger(passengerId);
    if (!passengerForms[passengerId]) {
      setPassengerForms((prev) => ({ ...prev, [passengerId]: true }));
    }

    // Scroll to the selected passenger item
    const passengerIndex = passengerNumber.findIndex((passenger) => passenger.id === passengerId);
    if (scrollViewRef.current) {
      // Calculate the position of the selected passenger to scroll to
      scrollViewRef.current.scrollTo({ x: passengerIndex * 145, animated: true }); // 145 is the width of the item + margin
    }
  };

  // Handle next passenger
  const handleNextPassenger = () => {
    if (selectedPassenger < passengerNumber.length) {
      const nextPassenger = selectedPassenger + 1;
      setSelectedPassenger(nextPassenger);
      if (!passengerForms[nextPassenger]) {
        setPassengerForms((prev) => ({ ...prev, [nextPassenger]: true }));
      }

      // Scroll to the next passenger
      const nextPassengerIndex = passengerNumber.findIndex((passenger) => passenger.id === nextPassenger);
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ x: nextPassengerIndex * 145, animated: true });
      }
    }
  };

  // Save and navigate back
  const handleSave = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: getHeight(100) }}>
        {/* Back Button */}
        <Pressable style={{ position: "absolute", marginLeft: getWidth(20), marginTop: getHeight(30) }} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={getFontSize(21)} color={colors.offWhite} />
        </Pressable>

        {/* Title */}
        <Text style={{ color: colors.offWhite, textAlign: "center", fontSize:getFontSize(20), marginTop: getHeight(27), fontWeight: "400" }}>
          Passengers Information
        </Text>

        {/* Scrollable Passengers */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.passengerScrollView}
          ref={scrollViewRef} // Attach the reference
        >
          {passengerNumber.map((passenger) => (
            <Pressable
              key={passenger.id}
              onPress={() => handlePassengerPress(passenger.id)}
              style={[
                styles.passengerItem,
                {
                  borderBottomWidth: selectedPassenger === passenger.id ? 1 : 0.5,
                  borderColor: selectedPassenger === passenger.id ? colors.primary : colors.label
                }
              ]}
            >
              <Text
                style={[
                  styles.passengerText,
                  {
                    fontWeight: selectedPassenger === passenger.id ? "bold" : "normal"
                  }
                ]}
              >
                Passenger {passenger.Passenger}
              </Text>
              <Text style={styles.passengerText}>{passenger.type}</Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* Render the PassengerInformationForm for the selected passenger */}
        <ScrollView style={styles.formContainer}>
          {passengerForms[selectedPassenger] && (
            <PassengerInformationForm key={selectedPassenger} passengerId={selectedPassenger} />
          )}
        </ScrollView>
      </ScrollView>

      {/* Next Passenger / Save Button */}
      <View style={styles.buttonContainer}>
        {selectedPassenger < passengerNumber.length ? (
          <GetStartedButton onPress={handleNextPassenger} title="Next Passenger" width={getWidth(310)} />
        ) : (
          <GetStartedButton onPress={handleSave} title="Save" width={getWidth(310)} />
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  passengerScrollView: {
    marginTop: getHeight(20)
  },
  passengerItem: {
    paddingHorizontal: getWidth(15),
    height: getHeight(40),
    width: getWidth(140),
    marginHorizontal:getWidth(5),
    paddingBottom: getHeight(5)
  },
  passengerText: {
    color: "#fff",
    fontSize: getFontSize(12),
    fontFamily: "medium",
    textAlign: "center"
  },
  formContainer: {
    marginTop: getHeight(20),
    paddingHorizontal: getWidth(10)
  },
  buttonContainer: {
    position: "absolute",
    bottom: getHeight(10),
    left: getWidth(0),
    right: getWidth(0),
    paddingHorizontal: getWidth(16),
    paddingBottom: getHeight(10)
  },
  button: {
    backgroundColor: "#1E90FF",
    paddingVertical: getHeight(12),
    borderRadius: getWidth(5),
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: getFontSize(16)
  }
});

export default PassengerDetails;
