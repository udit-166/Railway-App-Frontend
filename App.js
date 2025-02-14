import React from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './Screen/HomeScreen/Welcome';
import FirstInteractionScreen from './Screen/Login Screens/FirstInteraction';
import LoginScreen from './Screen/Login Screens/LoginScreen';
import Registration from './Screen/Login Screens/Registration';
import Verify from './Screen/Login Screens/Verify';
import Ionicons from "react-native-vector-icons/Ionicons";
import TrainList from './Screen/Train/TrainList';
import ChooseSeatType from './Screen/Trip Detail Screens/ChooseSeatType';
import PassengerInformationForm from './Screen/PassengerDetails/PassenmgerInformationForm';
import PassengerDetails from './Screen/PassengerDetails/PassengerDetails';
import PassengerInformation from './Screen/Trip Detail Screens/PessengerInformation';
import SuccessScreen from './Screen/Successfull Booking/SuccessScreen';
import TicketDetail from './Screen/Ticket/TicketDetail';
import TicketListScreen from './Screen/Ticket/TicketListScreen';
import CustomerSupportScreen from './Screen/Customer Support/CustomerSupportScreen';
import ProfileScreen from './Screen/Profile/ProfileScreen';
import PaymentScreen from './Screen/Payment/PaymentScreen';
 // make sure this path is correct

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const TabIcon = ({ name, color, size, isFocused }) => {
  const {colors, fonts} = useTheme();
  return (
    <View style={styles.iconContainer}>
      {isFocused && <View style={styles.border} />}
      <Ionicons
        name={name}
        color={isFocused ? "white" : colors.label}
        size={24}
      />
    </View>
);
};

const theme = {
  colors:{
    primary:"#0080FF",
    secondary:"#0e1419",
    label:"#7b7d86",
    cardBackground:"",
    danger:"#e05656",
    warning:"#e1c52e",
    background:"#0e1321",
    success:"#4bc157",
    offWhite:"#FFFFFF"
  },
  fonts:{
    ragular:"Montserrat 400",
    medium:"Montserrat 500",
    semiBold:"Montserrat 600",
    bold:"Montserrat 700"
  }
}
const BottomTabNavigator = () => {
  const {colors, fonts} = useTheme();
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true, // Hide the label if needed
        tabBarStyle: {
          backgroundColor: colors.secondary, // Customize the tab bar background color
          height: 70, // Adjust height if needed
          paddingBottom:15,
          borderTopLeftRadius:10,
          borderTopRightRadius:10,
          borderTopColor:colors.secondary

        },
        tabBarActiveTintColor:"white",
        tabBarInactiveTintColor:"white",
      }}
    >
      <BottomTab.Screen
        name="Welcome"
        component={Welcome}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon
              name="home-outline"
              color={color}
              size={size}
              isFocused={focused}
            />),
          tabBarLabel:"Home",
        }}
      />
      <BottomTab.Screen
        name="TicketListScreen"
        component={TicketListScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon
              name="ticket-sharp"
              color={color}
              size={size}
              isFocused={focused}
            />),
          tabBarLabel:"Home",
        }}
      />
       <BottomTab.Screen
        name="CustomerCare"
        component={CustomerSupportScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon
              name="chatbubbles-outline"
              color={color}
              size={size}
              isFocused={focused}
            />),
          tabBarLabel:"Home",
        }}
      />
       <BottomTab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon
              name="person-outline"
              color={color}
              size={size}
              isFocused={focused}
            />),
          tabBarLabel:"Home",
        }}
      />
    </BottomTab.Navigator>
  );
};

const App = () => {
  return (
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="FirstInteraction" component={FirstInteractionScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignUpScreen" component={Registration} />
          <Stack.Screen name="Home" component={BottomTabNavigator} />
          <Stack.Screen name="Verify" component={Verify} />
          <Stack.Screen name="TrainList" component={TrainList}/>
          <Stack.Screen name="SelectSeatType" component={ChooseSeatType}/>
          <Stack.Screen name="TicketInformation" component={PassengerInformation}/>
          <Stack.Screen name="AddPaseengerScreen" component={PassengerDetails}/>
          <Stack.Screen name="SuccessScreen" component={SuccessScreen}/>
          <Stack.Screen name="ViewTicketDetail" component={TicketDetail}/>
          <Stack.Screen name="Transaction" component={PaymentScreen}/>
        </Stack.Navigator>
      </NavigationContainer> 
     
    
  );
};

const styles = StyleSheet.create({
  
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    height: 50, // Set a fixed height
  },
  border: {
    position: "absolute", // Use absolute positioning
    top: 5, // Position it at the bottom
    left: "100%", // Center it horizontally
    transform: [{ translateX: -110 }], // Adjust for half the width
    height: 5,
    width: 42,
    backgroundColor: "white", // Active border color
    borderBottomLeftRadius: 25, // Adjust for radius
    borderBottomRightRadius: 25, // Adjust for radius
    },
});

export default App;