import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import TicketBreiftDescriptionCard from "../../component/Card/TicketBreiftDescriptionCard";
import NoTicketMessage from "./NoTicketMessage";
import { getFontSize, getHeight, getWidth } from "../../utils/pixelSizeCalc";

const TicketListScreen=({navigation})=>{
    const {colors, fonts} = useTheme();
    const [isActive, setIsActive] = useState("upcomingTrips");
    const [isUpcomingTripShow, setIsUpcomingTripShow] = useState(true);
    const navigationHandler=()=>{
      navigation.navigate("ViewTicketDetail")
    }

    const TicketList=[
        {
            id:1,
            status:"upcoming",
            date:"Dec 26, 2022",
            passenger:"2",
            source_time:"08:30 AM",
            departure_time:"09:00 PM",
            duration:"11h 30m",
            source_station:"Lucknow",
            destination_station:"Gorakhpir"
        },
        {
            id:2,
            status:"ongoing",
            date:"Dec 26, 2022",
            passenger:"2",
            source_time:"08:30 AM",
            departure_time:"09:00 PM",
            duration:"11h 30m",
            source_station:"Lucknow",
            destination_station:"Gorakhpir"
        },
        {
            id:3,
            status:"upcoming",
            date:"Dec 26, 2022",
            passenger:"2",
            source_time:"08:30 AM",
            departure_time:"09:00 PM",
            duration:"11h 30m",
            source_station:"Lucknow",
            destination_station:"Gorakhpur"
        },
        {
            id:4,
            status:"done",
            date:"Dec 26, 2022",
            passenger:"2",
            source_time:"08:30 AM",
            departure_time:"09:00 PM",
            duration:"11h 30m",
            source_station:"Lucknow",
            destination_station:"Gorakhpir"
        },
        {
            id:6,
            status:"done",
            date:"Dec 26, 2022",
            passenger:"2",
            source_time:"08:30 AM",
            departure_time:"09:00 PM",
            duration:"11h 30m",
            source_station:"Lucknow",
            destination_station:"Gorakhpir"
        },
        {
            id:7,
            status:"done",
            date:"Dec 26, 2022",
            passenger:"2",
            source_time:"08:30 AM",
            departure_time:"09:00 PM",
            duration:"11h 30m",
            source_station:"Lucknow",
            destination_station:"Gorakhpir"
        },
        {
            id:8,
            status:"done",
            date:"Dec 26, 2022",
            passenger:"2",
            source_time:"08:30 AM",
            departure_time:"09:00 PM",
            duration:"11h 30m",
            source_station:"Lucknow",
            destination_station:"Gorakhpir"
        },
        {
            id:9,
            status:"done",
            date:"Dec 26, 2022",
            passenger:"2",
            source_time:"08:30 AM",
            departure_time:"09:00 PM",
            duration:"11h 30m",
            source_station:"Lucknow",
            destination_station:"Gorakhpir"
        },
        {
            id:10,
            status:"done",
            date:"Dec 26, 2022",
            passenger:"2",
            source_time:"08:30 AM",
            departure_time:"09:00 PM",
            duration:"11h 30m",
            source_station:"Lucknow",
            destination_station:"Gorakhpir"
        },
        {
            id:11,
            status:"done",
            date:"Dec 26, 2022",
            passenger:"2",
            source_time:"08:30 AM",
            departure_time:"09:00 PM",
            duration:"11h 30m",
            source_station:"Lucknow",
            destination_station:"Gorakhpir"
        },
        {
            id:12,
            status:"done",
            date:"Dec 26, 2022",
            passenger:"2",
            source_time:"08:30 AM",
            departure_time:"09:00 PM",
            duration:"11h 30m",
            source_station:"Lucknow",
            destination_station:"Gorakhpir"
        },
        {
            id:13,
            status:"done",
            date:"Dec 26, 2022",
            passenger:"2",
            source_time:"08:30 AM",
            departure_time:"09:00 PM",
            duration:"11h 30m",
            source_station:"Lucknow",
            destination_station:"Gorakhpir"
        },
        {
            id:14,
            status:"done",
            date:"Dec 26, 2022",
            passenger:"2",
            source_time:"08:30 AM",
            departure_time:"09:00 PM",
            duration:"11h 30m",
            source_station:"Lucknow",
            destination_station:"Gorakhpir"
        },
        {
            id:15,
            status:"done",
            date:"Dec 26, 2022",
            passenger:"2",
            source_time:"08:30 AM",
            departure_time:"09:00 PM",
            duration:"11h 30m",
            source_station:"Lucknow",
            destination_station:"Gorakhpir"
        },
    ]

    const upcomingTickets = TicketList.filter(ticket => ticket.status === "upcoming" || ticket.status === "ongoing");
  const historyTickets = TicketList.filter(ticket => ticket.status === "done");
    return (
        <View style={{ flex: 1 }}>
      {/* Title */}
      <Text style={{ color: colors.offWhite, fontSize: getFontSize(20), fontFamily: fonts.semiBold, textAlign: "center" }}>Ticket</Text>

      {/* Tab Navigation */}
      <View style={{ backgroundColor: colors.secondary, flexDirection: "row", paddingVertical: getHeight(5), paddingHorizontal: getWidth(5), marginTop: getHeight(40), height: getHeight(45), borderRadius: getWidth(10), marginHorizontal:getWidth(10), marginBottom:getHeight(15) }}>
        <Pressable onPress={() => setIsActive("upcomingTrips")} style={styles.tabChoosen(isActive === "upcomingTrips")}>
          <Text style={{ color: "white" }}>Upcoming Trips</Text>
        </Pressable>
        <Pressable onPress={() => setIsActive("History")} style={styles.tabChoosen(isActive === "History")}>
          <Text style={{ color: "white" }}>History</Text>
        </Pressable>
      </View>

      {/* Content Area - Show Tickets Based on Active Tab */}
      <ScrollView>
        {isActive === "upcomingTrips" ? (
          // Show upcoming and ongoing tickets
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            {upcomingTickets.map((ticket) => (
              <TicketBreiftDescriptionCard
                key={ticket.id}
                ticket={ticket}
                onPress={navigationHandler}
              />
            ))}
          </View>
        ) : (
          // Show done (history) tickets
          <View style={{ justifyContent: "center", alignItems: "center", flex:1 }}>
            {/* {historyTickets.map((ticket) => (
              <TicketBreiftDescriptionCard
                key={ticket.id}
                ticket={ticket}
              />
            ))} */}
            <NoTicketMessage/>
          </View>
        )}
      </ScrollView>
    </View>
    )
}
const styles = StyleSheet.create({
    tabChoosen:(isActive)=>({
        backgroundColor: isActive ? "#4c4c4c" : "#0e1419", 
        borderRadius:getWidth(10),
        justifyContent:"center",
        alignItems:"center",
        width:"50%"
    })
})

export default TicketListScreen;