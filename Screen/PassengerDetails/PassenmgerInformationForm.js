import React, { useState } from "react";
import { TextInput, View, Text, Switch, StyleSheet, Pressable } from "react-native";
import { TextInputForStation } from "../../component/TextFields/TextIput";
import { useTheme } from "@react-navigation/native";
import { NameTextField } from "../../component/TextFields/LoginTextFields/LoginText";
import { getFontSize, getHeight, getWidth } from "../../utils/pixelSizeCalc";

const PassengerInformationForm = () => {
  const { colors, fonts } = useTheme();
  
  // State for toggling the "I'm not a citizen of India" option
  const [isNotCitizen, setIsNotCitizen] = useState(false);
  
  // State for gender selection (using radio buttons)
  const [selectedGender, setSelectedGender] = useState("");

  // Function to handle the switch toggle
  const toggleSwitch = () => setIsNotCitizen(previousState => !previousState);

  // Function to handle radio button press
  const handleGenderSelection = (gender) => {
    setSelectedGender(gender); // Set the selected gender
  };

  return (
    <View style={{ padding: getWidth(16), paddingTop:getHeight(0) }}>
        <Pressable onPress={() => console.log("hello")} style={{ marginBottom: getHeight(4)}}>
  <Text
    style={{
      color: colors.primary,
      fontSize: getFontSize(16),
      textAlign: "right",   // This will align the text to the right
    }}
  >
    Remove
  </Text>
</Pressable>

      {/* Name and Email Inputs */}
      <NameTextField placeholder="First Name" />
      <NameTextField placeholder="Last Name" />
      <NameTextField placeholder="Email" />
      <NameTextField placeholder="Age" />

      {/* Gender Radio Buttons */}
      <Text style={{ color: colors.offWhite, fontFamily: fonts.regular, fontSize: getFontSize(18), marginTop: getHeight(5) }}>
        Gender
      </Text>
      <View style={styles.radioContainer}>
        <Pressable 
          style={[styles.radioButton, selectedGender === "male" && styles.selectedRadioButton]}
          onPress={() => handleGenderSelection("male")}
        >
          <Text style={[styles.radioText, { color: colors.offWhite }]}>Male</Text>
        </Pressable>

        <Pressable 
          style={[styles.radioButton, selectedGender === "female" && styles.selectedRadioButton]}
          onPress={() => handleGenderSelection("female")}
        >
          <Text style={[styles.radioText, { color: colors.offWhite }]}>Female</Text>
        </Pressable>

        <Pressable 
          style={[styles.radioButton, selectedGender === "other" && styles.selectedRadioButton]}
          onPress={() => handleGenderSelection("other")}
        >
          <Text style={[styles.radioText, { color:  colors.offWhite }]}>Other</Text>
        </Pressable>
      </View>

      {/* Citizenship Switch */}
      <View style={styles.switchContainer}>
        <Text style={{ color: colors.offWhite, fontFamily: fonts.regular, fontSize:getFontSize(16) }}>
          I'm not a citizen of India
        </Text>
        <Switch
          value={isNotCitizen}
          onValueChange={toggleSwitch}
          trackColor={{ false: colors.label, true: colors.primary }}  // "off" is offWhite, "on" is primary
          thumbColor={isNotCitizen ? colors.primary : colors.offWhite}   // Thumb color change
          ios_backgroundColor={colors.offWhite}  // For iOS background color
          style={styles.switch}  // Custom style for the switch size
        />
      </View>

      {/* Conditionally rendered fields for Passport and Mobile */}
      {isNotCitizen && (
        <View>
          <NameTextField placeholder="Passport Number" />
          <NameTextField placeholder="Mobile Number" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: getHeight(10),
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center",
    marginRight: getWidth(20),
    paddingVertical: getHeight(10),
    width:getWidth(70),
  },
  selectedRadioButton: {
    borderColor: "#fff", // Border color when selected
    borderWidth: getWidth(1),
    borderRadius: getWidth(10), // Make it circular
    paddingVertical:getHeight(4),
    paddingHorizontal:getWidth(8),
    justifyContent:"center"
  },
  radioText: {
    fontSize: getFontSize(16),
    fontFamily: "medium",  // Replace with your font family
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: getHeight(16),
  },
  switch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }], // Increase switch size
  },
});

export default PassengerInformationForm;
