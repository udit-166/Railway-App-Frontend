import { useTheme } from "@react-navigation/native";
import moment from "moment";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { CalendarList } from "react-native-calendars";
import GetStartedButton from "../../component/Buttons/GetStartedButton";
import { getFontSize, getHeight, getWidth } from "../../utils/pixelSizeCalc";

const ChooseDate=()=>{
    const {colors, fonts} = useTheme();
    const today = moment().format("YYYY-MM-DD");
  const maxDate = moment().add(5, 'months').format("YYYY-MM-DD");
  const [selectedDate, setSelectedDate] = useState(today);
  const [isActive, setIsActive]=useState("onlyDeparture");
  const [isAddReturnEnable, setIsAddReturnEnable] = useState(false);
    return (
        <View style={{paddingTop:getHeight(10)}}>
            <Text style={{color:colors.offWhite,fontSize:getFontSize(20), fontFamily:fonts.semiBold, marginBottom:getHeight(20), marginLeft:getWidth(15)}}>Choose Date</Text>
            <View style={{backgroundColor:colors.secondary, flexDirection:"row",paddingVertical:getHeight(5), paddingHorizontal:getWidth(5), marginTop:getHeight(20), height:getHeight(45),borderRadius:getWidth(10)}}>
                <Pressable onPress={()=>{ setIsActive("onlyDeparture");}
                }style={styles.tabChoosen(isActive === "onlyDeparture")}>
                    <Text style={{color:"white"}}>{"Departure"}</Text>
                </Pressable>
                <Pressable onPress={()=> {setIsActive("alsoReturn"); setIsAddReturnEnable(true)}}style={styles.tabChoosen(isActive === "alsoReturn")}>
                    <Text style={{color:"white"}}>Add Return</Text>
                </Pressable>
            </View>
        <CalendarList
        // Enable vertical scrolling (set to false for vertical, true for horizontal)
        horizontal={false}
        // Paging enabled for smooth month-to-month scroll
        pagingEnabled={true}
        // Limit date range from today to five months ahead
        minDate={today}
        maxDate={maxDate}
        // Set the theme for custom colors and styles
        theme={{
            calendarBackground: colors.background,
            textSectionTitleColor: "white", // Color for month and year
            selectedDayBackgroundColor: '#00adf5',  // Background for selected day
            selectedDayTextColor: '#ffffff',  // Text color for selected day
            todayTextColor: '#00adf5',  // Color for today's date
            dayTextColor: "#ffffff",  // White color for selectable future dates
            textDisabledColor:colors.label,  // Gray color for disabled past dates
            textMonthFontFamily: fonts.medium, // Customize font for the month and year
            textMonthFontSize: 20,
        }}
       // Dynamically mark the selected date
      markedDates={{
        [selectedDate]: { selected: true, selectedColor: "blue" },
      }}
      // Update the selected date when a day is pressed
      onDayPress={(day) => {
        setSelectedDate(day.dateString);
      }}
      style={{
        'stylesheet.calendar.header': {
          monthText: {
            color: "white",
            fontSize: getFontSize(20),
            fontFamily: fonts.medium,
            textAlign: "left",
            marginLeft: getWidth(10),
          },
        },
      }}
        // Disable days before today
        disableAllTouchEventsForDisabledDays={true}
        hideExtraDays={true}
      />
      <View style={{width:getWidth(350),marginTop:getHeight(600), justifyContent:"center", alignItems:"center", position:"absolute"}}>
            <GetStartedButton title="Save" width={getWidth(330)}/>
        </View>
      </View>
  );
};
const styles = StyleSheet.create({
  tabChoosen:(isActive)=>({
      backgroundColor: isActive ? "#4c4c4c" : "#0e1419", 
      borderRadius:getWidth(10),
      justifyContent:"center",
      alignItems:"center",
      width:"50%"
  })
})
export default ChooseDate;