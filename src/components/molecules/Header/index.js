import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Gap } from "../../atom";
import { colors } from "../../../utils";
import DarkProfile from "./DarkProfile";

const Header = ({ title, navigation, type }) => {
  if (type === "dark-profile") {
    return <DarkProfile title="Nairobi Putri Hayza" onPress={() => navigation.goBack()}/>;
  }

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
    borderBottomLeftRadius: type === "dark" ? 20 : 0,
    borderBottomRightRadius: type === "dark" ? 20 : 0,
  }),
  text: (type) => ({
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    color: type === "dark" ? colors.white : colors.text.primary,
  }),
});
