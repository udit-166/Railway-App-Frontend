import {
    Alert,
    Image,
    Pressable,
    StyleSheet,
    Text,
    ToastAndroid,
    View,
  } from "react-native";
  import ReactNativeModal from "react-native-modal";
import ChooseStation from "../Screen/Trip Detail Screens/ChooseStation";
import ChooseDate from "../Screen/Trip Detail Screens/ChooseDate";
import NumberOfPassengers from "../Screen/Trip Detail Screens/NumberOfPassengers";
import { getHeight, getWidth } from "../utils/pixelSizeCalc";
  
  const BottomSheet = ({
     isModalVisible, toggleModal, activeComponent 
  }) => {
    
    // const { isConnected } = useConnection();
  
    // const onSubmitFeedback = () => {
    //   if (!isConnected) {
    //     ToastAndroid.show(
    //       You have lost your Internet Connection!,
    //       ToastAndroid.LONG
    //     );
    //   } else {
    //     Alert.alert(
    //       "Confirm Submission",
    //       "Are you sure you want to submit your review?",
    //       [
    //         { text: "Cancel" },
    //         {
    //           text: "Okay",
    //           onPress: () => {
    //             setSubmitFeedback(true);
    //             setCallfeedBack(false);
    //           },
    //         },
    //       ]
    //     );
    //   }
    // };
  
    const onCloseButtonClick = () => {
        toggleModal();
    };
    return (
      <ReactNativeModal
        onBackdropPress={toggleModal}
        onBackButtonPress={toggleModal}
        isVisible={isModalVisible}
        swipeDirection="down"
        onSwipeComplete={toggleModal}
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={400}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Pressable
            onPress={onCloseButtonClick}
            style={{
              position: "absolute",
             
              height: getHeight(22),
              borderRadius: getWidth(15),
              paddingHorizontal: getWidth(2),
              paddingVertical: getHeight(2),
              marginTop: getHeight(35),
              marginLeft: getWidth(320),
            }}
          >
            <Image
              source={require("../Images/cross-icon.png")}
              style={{ width: getWidth(20), height: getHeight(20) }}
            />
          </Pressable>
           {/* Conditionally render based on the activeComponent */}
           {activeComponent === "ChooseStation" && <ChooseStation />}
            {activeComponent === "ChooseDate" && <ChooseDate />}
            {activeComponent === "NumberOfPassengers" && <NumberOfPassengers />}
        </View>
      </ReactNativeModal>
    );
  };
  
  const styles = StyleSheet.create({
    modal: {
      justifyContent: "flex-end",
      margin: getWidth(0)
    },
    modalContent: {
      backgroundColor: "#0e1321",
      paddingVertical: getHeight(24),
      paddingHorizontal: getWidth(5),
      borderTopRightRadius: getWidth(20),
      borderTopLeftRadius: getWidth(20),
      minHeight: getHeight(700),
      maxHeight:getHeight(700),
    },
  });
  
  export default BottomSheet;