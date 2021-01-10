import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ICBackDark, ICBackLight } from "../../../../assets";

const IconOnly = ({ icon, onPress }) => {
  const Icon = () => {
    if (icon === "dark-back") {
      return <ICBackDark />;
    }

    if (icon === "light-back") {
      return <ICBackLight />;
    }

    return <ICBackDark />;
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;

const styles = StyleSheet.create({});
