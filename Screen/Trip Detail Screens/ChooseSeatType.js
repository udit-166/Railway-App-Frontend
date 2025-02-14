import { useTheme } from "@react-navigation/native";
import { KeyboardAvoidingView, Pressable, ScrollView, Text, View } from "react-native";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import BreifTicketDetailCard from "../../component/Card/BreifTicketDetailCard";
import SeatTypeDetailCard from "../../component/Card/SeatTypeDetailCard";
import GetStartedButton from "../../component/Buttons/GetStartedButton";
import { getFontSize, getHeight, getWidth } from "../../utils/pixelSizeCalc";

const ChooseSeatType = ({route, navigation}) => {
    const { colors, fonts } = useTheme();
    const [activeIndex, setActiveIndex] = useState(0);

    const navigationHandler=()=>{
        navigation.navigate("TicketInformation");
    }

    return (
        <View style={{ flex: 1 }}>
            <Pressable style={{ position: "absolute", marginLeft: getWidth(20), marginTop: getHeight(30) }}>
                <Ionicons name="arrow-back" size={getFontSize(21)} color={colors.offWhite} />
            </Pressable>
            <Text style={{
                color: colors.offWhite,
                textAlign: "center",
                fontSize: getFontSize(20),
                alignSelf: "center",
                marginTop: getHeight(27),
                fontWeight: "400"
            }}>
                Seat Type Selection
            </Text>
            <View style={{ justifyContent: "center", alignItems: "center", marginTop: getHeight(30) }}>
                <BreifTicketDetailCard />
                <Text style={{color:colors.offWhite, fontSize:getFontSize(17), fontFamily:fonts.regular, alignSelf:"flex-start", marginLeft:getWidth(18), marginTop:getHeight(18)}}>Select your class</Text>
                <ScrollView style={{flexDirection:"row",gap:getWidth(10), marginTop:getHeight(10)}} horizontal={true}>
                {[1, 2, 3, 4, 5].map((item, index) => (
                    <SeatTypeDetailCard
                        key={index}
                        isActive={activeIndex === index}
                        onPress={(index) => setActiveIndex(index)}
                    />
                ))}
                </ScrollView>
            </View>
            <KeyboardAvoidingView style={{paddingHorizontal:getWidth(14)}}>
                <View style={{top:getHeight(275), flexDirection:"row", justifyContent:"space-between"}}>
                    <View>
                        <Text style={{color:colors.label, fontSize:getFontSize(14)}}>Total</Text>
                        <Text style={{color:colors.offWhite, fontSize:getFontSize(20),fontFamily:fonts.semiBold}}>$1100.00</Text>
                    </View>
                    <GetStartedButton title="Save" width={getWidth(220)} onPress={navigationHandler}/>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};

export default ChooseSeatType;
