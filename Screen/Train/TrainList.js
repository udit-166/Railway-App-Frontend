import { useTheme } from "@react-navigation/native";
import { Pressable, ScrollView, Text, View } from "react-native";
import TrainCard from "../../component/Card/TrainCard";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useEffect, useState } from "react";
import { getFontSize, getHeight, getWidth } from "../../utils/pixelSizeCalc";

const TrainList=({route, navigation})=>{
    const {colors, fonts} = useTheme();
    const generateDates = (startDate, days) => {
        const dates = [];
        for (let i = 0; i < days; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            dates.push({
                day: date.toLocaleDateString("en-GB", { day: "2-digit" }),
                month: date.toLocaleDateString("en-GB", { month: "short" }),
                weekday: date.toLocaleDateString("en-GB", { weekday: "short" }),
                fullDate: date,
            });
        }
        return dates;
    };
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [dates, setDates] = useState([]);
    const [dateRangeStart, setDateRangeStart] = useState(new Date(new Date().setDate(new Date().getDate() - 2)));

    useEffect(() => {
        // Initial load of dates (starting from 2 days before the current date)
        setDates(generateDates(dateRangeStart, 10));
    }, []);

    const loadMoreDates = () => {
        const newStartDate = new Date(dates[dates.length - 1].fullDate);
        newStartDate.setDate(newStartDate.getDate() + 1);
        setDates([...dates, ...generateDates(newStartDate, 10)]);
    };
    const SeatSelectionHandler=()=>{
        navigation.navigate("SelectSeatType");
    }

    return (
        <View style={{flex:1}}>
            <View style={{justifyContent:"space-between", flexDirection:"row", marginTop:getHeight(20), marginHorizontal:getWidth(10)}}>
                <Pressable>
                    <Ionicons name="arrow-back-sharp" size={getFontSize(21)} color={colors.offWhite} />
                </Pressable>
                <Text style={{color:colors.offWhite, textAlign:"center", fontSize:getFontSize(16)}}>Ticket</Text>
                <Pressable>
                    <Ionicons name="funnel-outline" size={getFontSize(20)} color={colors.offWhite} />
                </Pressable>
            </View>
            <View style={{justifyContent:"space-between", flexDirection:"row", marginHorizontal:getWidth(10), alignItems:"center", marginTop:getHeight(20)}}>
                <Text style={{color:colors.offWhite, fontSize:getFontSize(22), fontFamily:fonts.medium}}>PWT</Text>

               <View style={{flexDirection:"row", justifyContent:"center"}}>
                <Text style={{color:colors.label, fontFamily:fonts.medium}}>------------------</Text><Ionicons name="location-outline" size={24} color={colors.label} /><Text  style={{color:colors.label, fontFamily:fonts.medium}}>------------------</Text>
                </View>
                <Text style={{color:colors.offWhite, fontSize:getFontSize(22), fontFamily:fonts.medium}}>SBY</Text>
            </View>
            <View style={{justifyContent:"space-between", flexDirection:"row", marginHorizontal:getWidth(10), marginTop:getWidth(5)}}>
                <Text style={{color:colors.label, fontSize:getFontSize(12)}}>Purwakerta, PWT</Text>
                <Text style={{color:colors.label, fontSize:getFontSize(12)}}>Surabaya, SBY</Text>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginVertical: getHeight(20), paddingHorizontal: getWidth(10) }}
                onScrollEndDrag={() => loadMoreDates()}
            >
                {dates.map((date, index) => (
                    <Pressable
                        key={index}
                        onPress={() => setSelectedDate(date.fullDate)}
                        style={{
                            alignItems: "center",
                            paddingHorizontal: getWidth(10),
                            paddingVertical: getHeight(5),
                            borderBottomWidth: selectedDate.toDateString() === date.fullDate.toDateString() ? getWidth(1) : getWidth(0.5),
                            borderColor: selectedDate.toDateString() === date.fullDate.toDateString() ? colors.offWhite : colors.label,
                        }}
                    >
                        <Text style={{ color: colors.offWhite, fontSize: getFontSize(12), fontFamily: fonts.medium }}>{date.day} {date.month}, {date.weekday}</Text>
                        <Text style={{ color: colors.label, fontSize: getFontSize(4) }}></Text>
                    </Pressable>
                ))}
            </ScrollView>
            <ScrollView >
            {[1,1,1,1,1,1].map((item)=><TrainCard onPress={SeatSelectionHandler}/>)}
            </ScrollView>
        </View>
    )
}

export default TrainList;