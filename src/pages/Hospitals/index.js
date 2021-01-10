import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

import { ILHospitalBG } from "../../../assets";
import { ListHospital } from "../../components";
import { colors } from "../../utils";

const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 Found</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital />
        <ListHospital />
        <ListHospital />
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    color: colors.white,
  },
  desc: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: "300",
    textAlign: "center",
    color: colors.white,
  },
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
});
