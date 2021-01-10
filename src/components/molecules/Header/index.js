import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Gap } from "../../atom";
import { colors } from "../../../utils";

const Header = ({ title, navigation, type }) => {
  return (
    <View style={styles.container(type)}>
      <Button
        type="icon-only"
        icon={type === "dark" ? "light-back" : "dark-back"}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.text(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: (type) => ({
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: type === "dark" ? colors.secondary : colors.white,
    flexDirection: "row",
    alignItems: "center",
  }),
  text: (type) => ({
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    color: type === "dark" ? colors.white : colors.text.primary,
  }),
});
