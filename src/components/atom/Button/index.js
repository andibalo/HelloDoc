import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../utils";
import BtnIcon from "./BtnIcon";
import IconOnly from "./IconOnly";

const Button = ({ title, type, onPress, icon, disabled }) => {
  if (type === "icon-only") {
    return <IconOnly icon={icon} onPress={onPress} />;
  }

  if (type === "btn-icon") {
    return <BtnIcon disabled={disabled} />;
  }

  if (disabled) {
    return (
      <View style={styles.disabledBg}>
        <Text style={styles.disabledText}>{title}</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === "secondary" ? "white" : "#0BCAD4",
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: (type) => ({
    color: type === "secondary" ? "#0BCAD4" : "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  }),
  disabledBg: {
    backgroundColor: colors.disable,
    paddingVertical: 10,
    borderRadius: 10,
  },
  disabledText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
    color: colors.button.disable.color,
  },
});
