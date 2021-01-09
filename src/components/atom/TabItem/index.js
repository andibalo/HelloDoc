import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  ICDoctor,
  ICDoctorActive,
  ICHospital,
  ICHospitalActive,
  ICMessage,
  ICMessageActive,
} from "../../../../assets";
import { colors } from "../../../utils";

const TabItem = ({ title, active, onPress, onLongPress }) => {
  const Icon = () => {
    if (title === "Doctors") {
      return active ? <ICDoctorActive /> : <ICDoctor />;
    }
    if (title === "Messages") {
      return active ? <ICMessageActive /> : <ICMessage />;
    }
    if (title === "Hospitals") {
      return active ? <ICHospitalActive /> : <ICHospital />;
    }

    return <ICDoctorActive />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: (active) => ({
    color: active ? colors.text.tabActive : colors.text.tabInactive,
    fontSize: 10,
    fontWeight: "600",
    marginTop: 4,
  }),
});
