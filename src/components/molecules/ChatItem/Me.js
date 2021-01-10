import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../utils";
const Me = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContent}>
        <Text style={styles.text}>
          Ibu dokter, apakah makan jeruk tiap hari tidak sehat?
        </Text>
      </View>
      <Text style={styles.date}>4.20 A.M.</Text>
    </View>
  );
};

export default Me;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: "flex-end",
    paddingRight: 16,
  },
  textContent: {
    backgroundColor: colors.cardLight,
    padding: 12,
    paddingRight: 18,
    maxWidth: "70%",
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  date: {
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: 8,
  },
  text: {
    fontSize: 14,
    color: colors.text.primary,
  },
});
