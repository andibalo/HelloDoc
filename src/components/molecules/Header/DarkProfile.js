import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ILNullPhoto } from "../../../../assets";
import { colors } from "../../../utils";
import { Button } from "../../atom";

const DarkProfile = ({ title, desc, image, onPress }) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="light-back" onPress={onPress} />
      <View>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.category}>Dokter Anak</Text>
      </View>
      <Image source={ILNullPhoto} style={styles.picture} />
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingVertical: 30,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  picture: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.white,
    textAlign: "center",
  },
  category: {
    fontSize: 14,
    fontWeight: "300",
    color: colors.text.subtitle,
    textAlign: "center",
    marginTop: 6,
  },
});
