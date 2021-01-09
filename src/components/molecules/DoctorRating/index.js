import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ILNullPhoto, ICStar } from "../../../../assets";
import { colors } from "../../../utils";

const DoctorRating = () => {
  return (
    <View style={styles.container}>
      <Image source={ILNullPhoto} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Alexa Rachel</Text>
        <Text style={styles.profession}>Pediatrician</Text>
      </View>

      <View style={styles.rating}>
        <ICStar />
        <ICStar />
        <ICStar />
        <ICStar />
        <ICStar />
      </View>
    </View>
  );
};

export default DoctorRating;

const styles = StyleSheet.create({
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    marginRight: 16,
  },
  container: {
    flexDirection: "row",
    marginBottom: 16,
  },
  rating: {
    marginLeft: "auto",
    flexDirection: "row",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text.primary,
  },
  profession: {
    fontSize: 12,
    color: colors.text.secondary,
  },
});
