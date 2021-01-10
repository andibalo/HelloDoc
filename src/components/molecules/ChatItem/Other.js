import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ILNullPhoto } from "../../../../assets";
import { colors } from "../../../utils";

const Other = () => {
  return (
    <View style={styles.container}>
      <Image source={ILNullPhoto} style={styles.avatar} />
      <View>
        <View style={styles.textContent}>
          <Text style={styles.text}>
            Ibu dokter, apakah makan jeruk tiap hari tidak sehat?
          </Text>
        </View>
        <Text style={styles.date}>4.20 A.M.</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: "flex-end",
    paddingLeft: 16,
    flexDirection: "row",
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
  textContent: {
    backgroundColor: colors.primary,
    padding: 12,
    paddingLeft: 18,
    maxWidth: "80%",
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  date: {
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: 8,
  },
  text: {
    fontSize: 14,
    color: colors.white,
  },
});
