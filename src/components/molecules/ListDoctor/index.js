import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ILNullPhoto } from "../../../../assets";
import { colors } from "../../../utils";

const ListDoctor = () => {
  return (
    <View style={styles.container}>
      <Image source={ILNullPhoto} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Alexander Jannie</Text>
        <Text style={styles.desc}>
          Baik ibu, terima kasih banyak atas wak...
        </Text>
      </View>
    </View>
  );
};

export default ListDoctor;

const styles = StyleSheet.create({
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
  },
  container: {
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.primary,
  },
  name: {
    fontSize: 16,
    color: colors.text.primary,
  },
  desc: {
    fontSize: 12,
    color: colors.text.secondary,
    fontWeight: "300",
  },
});
