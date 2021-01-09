import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ILCatDokUmum } from "../../../../assets";
import { colors } from "../../../utils";

const DoctorCategory = () => {
  return (
    <View style={styles.container}>
      <ILCatDokUmum style={styles.illustration} />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>dokter umum</Text>
    </View>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    borderRadius: 10,
    marginRight: 10,
    width: 100,
    height: 130,
  },
  illustration: {
    marginBottom: 28,
  },
  label: {
    fontSize: 12,
    fontWeight: "300",
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.text.primary,
  },
});
