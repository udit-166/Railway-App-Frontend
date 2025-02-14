import { useTheme } from "@react-navigation/native"
import { ScrollView, Text, View } from "react-native"
import PaymentSummaryCard from "../../component/Card/PaymentSummaryCard";
import { getFontSize, getHeight } from "../../utils/pixelSizeCalc";

const PaymentScreen = () =>{
    const {colors, fonts} = useTheme();

    const PaymentHistory=[
        {
            id:12345678910,
            source_station_code:"GKP",
            destination_station_code:"GTNR",
            payment_amount:"$200",
            status:"Successful",
            date:"28 Aug, 2024",
        },
        {
            id:234567890110,
            source_station_code:"GKP",
            destination_station_code:"GTNR",
            payment_amount:"$200",
            status:"Successful",
            date:"28 Aug, 2024",
        },
        {
            id:345678901210,
            source_station_code:"GKP",
            destination_station_code:"GTNR",
            payment_amount:"$200",
            status:"Failed",
            date:"28 Aug, 2024",
        }
    ]

    return (
        <ScrollView style={{paddingTop:getHeight(18)}}>
            <Text style={{color:colors.offWhite, fontSize:getFontSize(18), textAlign:"center", marginBottom:getHeight(15)}}>All Payments</Text>
            { PaymentHistory.map((item)=><PaymentSummaryCard details={item} key={item.id}/>)}
        </ScrollView>
    )
}

export default PaymentScreen