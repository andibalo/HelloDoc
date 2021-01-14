import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { colors } from "../../../utils";

const Input = ({ label, secureTextEntry, value, onChangeText, disabled }) => {
  const [border, setBorder] = useState(colors.border.primary);

  const onFocusForm = (isFocused) => {
    if (isFocused) {
      setBorder(colors.tertiary);
      return;
    }

    setBorder(colors.border.primary);
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={() => onFocusForm(true)}
        onBlur={() => onFocusForm(false)}
        style={styles.input(border)}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        editable={!disabled}
        selectTextOnFocus={!disabled}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: (border) => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12,
  }),
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
  },
});
