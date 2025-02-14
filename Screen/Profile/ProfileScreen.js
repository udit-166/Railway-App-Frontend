import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { getFontSize, getHeight, getWidth } from "../../utils/pixelSizeCalc";

const ProfileScreen=({route, navigation})=>{
    const {colors, fonts} = useTheme();
    const SeeAllTicket=()=>{
        navigation.navigate("TicketListScreen")
    }
    const SeeAllPaymentHandler=()=>{
        navigation.navigate("Transaction")
    }
    const CustomerCareHandler=()=>{
        navigation.navigate("CustomerCare")
    }
    return (
        <View style={{top:getHeight(20), flex:1}}>
            <View style={{position:"absolute", right:getWidth(12)}}>
            <Ionicons name="pencil" size={getFontSize(24)} color={colors.offWhite} />
            </View>
            <View style={{justifyContent:"center", alignItems:"center", marginTop:getHeight(30)}}>
                <Image source={require("../../Images/avatar.png")} width={getWidth(20)} height={getHeight(20)} style={{width:getWidth(100), height:getHeight(100)}}/>
                <Text style={{color:colors.offWhite, fontSize:getFontSize(16), marginTop:getHeight(8)}}>Udit Shahi</Text>
                <Text style={{color:colors.offWhite, fontSize:getFontSize(14), marginTop:getHeight(8)}}>udhishahi@gmail.com</Text>
                <Text style={{color:colors.offWhite, fontSize:getFontSize(14), marginTop:getHeight(8)}}>+91 8887943623</Text>
            </View>
            <View style={{marginVertical:getHeight(40)}}>
            <Pressable style={{alignItems:"center", justifyContent:"space-between", flexDirection:"row", marginTop:getHeight(10), paddingVertical:getHeight(10), paddingHorizontal:getWidth(15), borderBottomColor:colors.label, borderBottomWidth:getWidth(1)}} onPress={SeeAllPaymentHandler}>
                <View style={{alignItems:"center",flexDirection:"row", gap:getWidth(15)}}>
                <Ionicons name="wallet-outline" size={getFontSize(24)} color={colors.offWhite} />
                <Text style={{color:colors.offWhite, fontSize:getFontSize(16)}}>See all payment</Text>
                </View>
                <Text style={{color:colors.offWhite, fontSize:getFontSize(20)}}>{">"}</Text>
            </Pressable>
            <Pressable style={{alignItems:"center", justifyContent:"space-between", flexDirection:"row", marginTop:getHeight(10), paddingVertical:getHeight(10), paddingHorizontal:getWidth(15), borderBottomColor:colors.label, borderBottomWidth:getWidth(1)}} onPress={SeeAllTicket}>
                <View style={{alignItems:"center",flexDirection:"row", gap:getWidth(15)}}>
                <Ionicons name="ticket-outline" size={getFontSize(24)} color={colors.offWhite} />
                <Text style={{color:colors.offWhite, fontSize:getFontSize(16)}}>See all ticket</Text>
                </View>
                <Text style={{color:colors.offWhite, fontSize:getFontSize(20)}}>{">"}</Text>
            </Pressable>
            <Pressable style={{alignItems:"center", justifyContent:"space-between", flexDirection:"row", marginTop:getHeight(10), paddingVertical:getHeight(10), paddingHorizontal:getWidth(15), borderBottomColor:colors.label, borderBottomWidth:getWidth(1)}} onPress={CustomerCareHandler}>
                <View style={{alignItems:"center",flexDirection:"row", gap:getWidth(15)}}>
                <Ionicons name="chatbubble-outline" size={getFontSize(24)} color={colors.offWhite} />
                <Text style={{color:colors.offWhite, fontSize:getFontSize(16)}}>Customer Care Service</Text>
                </View>
                <Text style={{color:colors.offWhite, fontSize:20}}>{">"}</Text>
            </Pressable>
            <Pressable style={{alignItems:"center", justifyContent:"space-between", flexDirection:"row", marginTop:getHeight(10), paddingVertical:getHeight(10), paddingHorizontal:getWidth(15), borderBottomColor:colors.label, borderBottomWidth:getWidth(1)}} onPress={SeeAllTicket}>
                <View style={{alignItems:"center",flexDirection:"row", gap:getWidth(15)}}>
                <Ionicons name="download-outline" size={getFontSize(24)} color={colors.offWhite} />
                <Text style={{color:colors.offWhite, fontSize:getFontSize(16)}}>App Updation</Text>
                </View>
                <Ionicons name="alert-circle-sharp" size={getFontSize(24)} color={colors.offWhite} />
            </Pressable>
            <Pressable style={{alignItems:"center", justifyContent:"space-between", flexDirection:"row", marginTop:getHeight(10), paddingVertical:getHeight(10), paddingHorizontal:getWidth(15), borderBottomColor:colors.label, borderBottomWidth:getWidth(1)}} onPress={SeeAllTicket}>
                <View style={{alignItems:"center",flexDirection:"row", gap:getWidth(15)}}>
                <Ionicons name="log-out-outline" size={getFontSize(24)} color={colors.offWhite} />
                <Text style={{color:"#ffefea", fontSize:getFontSize(16)}}>Log out</Text>
                </View>
                
            </Pressable>
            </View>
        </View>
    )
}

export default ProfileScreen;