import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ILCatDokUmum, ILCatDokObat, ILCatPsi } from "../../../../assets";
import { colors } from "../../../utils";

const DoctorCategory = ({ category, onPress }) => {
  const Icon = () => {
    if (category === "dokter umum") {
      return <ILCatDokUmum style={styles.illustration} />;
    }

    if (category === "dokter obat") {
      return <ILCatDokObat style={styles.illustration} />;
    }

    if (category === "psikiater") {
      return <ILCatPsi style={styles.illustration} />;
    }

    return <ILCatDokUmum style={styles.illustration} />;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    borderRadius: 10,
    marginRight: 10,
    width: 100,
    height: 130,
  },
  illustration: {
    marginBottom: 28,
  },
  label: {
    fontSize: 12,
    fontWeight: "300",
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.text.primary,
  },
});
