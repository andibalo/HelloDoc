import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ILNullPhoto } from "../../../../assets";
import { colors } from "../../../utils";

const HomeProfle = () => {
  return (
    <View style={styles.container}>
      <Image source={ILNullPhoto} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Andi Usman Balo</Text>
        <Text style={styles.profession}>Full Stack Developer</Text>
      </View>
    </View>
  );
};

export default HomeProfle;

const styles = StyleSheet.create({
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  container: {
    flexDirection: "row",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text.primary,
  },
  profession: {
    fontSize: 12,
    fontWeight: "400",
    color: colors.text.secondary,
  },
});
