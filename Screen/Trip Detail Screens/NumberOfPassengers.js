import { Text, View } from "react-native";
import AddPassenger from "../../component/Card/AddPassenger";
import { useTheme } from "@react-navigation/native";
import { SearchInputForStation } from "../../component/TextFields/TextIput";
import GetStartedButton from "../../component/Buttons/GetStartedButton";
import { getFontSize, getHeight, getWidth } from "../../utils/pixelSizeCalc";

const NumberOfPassengers=()=>{
    const {colors, fonts} = useTheme()
    return (
        <View style={{padding:getHeight(10)}}>
             <Text style={{color:colors.offWhite,fontSize:getFontSize(20), fontFamily:fonts.semiBold, marginBottom:getHeight(20)}}>Passengers</Text>
             <SearchInputForStation placeholder="PQN -> GKP" editable={false}/>
             <Text style={{color:colors.offWhite,fontSize:getFontSize(16), fontFamily:fonts.semiBold, marginTop:getHeight(20), marginBottom:getHeight(10)}}> Add Passengers</Text>
             <AddPassenger heading="Adult"/>
             <AddPassenger heading="Child"/>
             <AddPassenger heading="Elder"/>
             <View style={{width:getWidth(350),marginTop:getHeight(600), justifyContent:"center", alignItems:"center", position:"absolute"}}>
            <GetStartedButton title="Save" width={getWidth(330)}/>
        </View>
        </View>
    )
}

export default NumberOfPassengers;