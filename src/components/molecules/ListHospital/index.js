import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { DummyHospital1 } from "../../../../assets";
import { colors } from "../../../utils";

const ListHospital = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyHospital1} style={styles.image} />
      <View>
        <Text style={styles.title}>Rumah Sakit</Text>
        <Text style={styles.title}>Citra Bunga Merdeka</Text>
        <Text style={styles.address}>Jln. Surya Sejahtera</Text>
      </View>
    </View>
  );
};

export default ListHospital;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: colors.border.primary,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 10,
    marginRight: 16,
  },
  title: {
    fontSize: 16,
    color: colors.text.primary,
  },
  address: {
    fontSize: 12,
    fontWeight: "300",
    color: colors.text.secondary,
    marginTop: 6,
  },
});
