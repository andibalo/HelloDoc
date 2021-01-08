import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ILLogo } from "../../../assets";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      //Replace will not push the intended screen to the history stack but replace the curren stack in history
      //hence after moving to the new page the back button will not return to previous page
      navigation.replace("GetStarted");
    }, 2000);
  }, []);

  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.text}>My Doctor</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "600",
    color: "#112340",
  },
});
