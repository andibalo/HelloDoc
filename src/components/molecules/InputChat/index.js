import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { colors } from "../../../utils";
import { Button } from "../../atom";

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Send Message" style={styles.input} />
      <Button type="btn-icon" style={styles.sendBtn} />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
  },
  input: {
    padding: 14,
    backgroundColor: colors.disable,
    borderRadius: 10,
    marginRight: 8,
    flex: 4,
  },
  sendBtn: {
    flex: 1,
  },
});
