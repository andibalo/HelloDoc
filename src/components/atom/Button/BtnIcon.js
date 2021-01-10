import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ICSendDark, ICSendLight } from "../../../../assets";
import { colors } from "../../../utils";

const BtnIcon = ({ disabled }) => {
  return (
    <View style={styles.container(disabled)}>
      {disabled ? <ICSendDark /> : <ICSendLight />}
    </View>
  );
};

export default BtnIcon;

const styles = StyleSheet.create({
  container: (disabled) => ({
    padding: 8,
    paddingLeft: 12,
    backgroundColor: disabled ? colors.disable : colors.tertiary,
    borderRadius: 10,
  }),
});
