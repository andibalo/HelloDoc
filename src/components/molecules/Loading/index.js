import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { colors } from "../../../utils";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={styles.text}>Loading</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: colors.loadingBg,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 8,
    color: colors.white,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
});
