import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ title, type, onPress }) => {
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
});
