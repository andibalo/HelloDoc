import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Gap } from "../../atom";
import { colors } from "../../../utils";

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        type="icon-only"
        icon="dark-back"
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.text}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    color: colors.text.primary,
  },
});
