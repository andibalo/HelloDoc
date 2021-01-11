import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { ILNullPhoto, ICStar } from "../../../../assets";
import { colors } from "../../../utils";

const DoctorRating = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
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
    </TouchableOpacity>
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
    alignItems: "center",
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
