import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  ICEditProfile,
  ICHelp,
  ICLang,
  ICNext,
  ICRate,
  ILNullPhoto,
} from "../../../../assets";
import { colors } from "../../../utils";

const List = ({ type, title, desc, onPress, icon }) => {
  const Icon = () => {
    if (icon === "edit-profile") {
      return <ICEditProfile style={styles.icon} />;
    }

    if (icon === "rate") {
      return <ICRate style={styles.icon} />;
    }

    if (icon === "help") {
      return <ICHelp style={styles.icon} />;
    }

    if (icon === "language") {
      return <ICLang style={styles.icon} />;
    }

    return <ICEditProfile />;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon /> : <Image source={ILNullPhoto} style={styles.avatar} />}

      <View>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {type === "next" && <ICNext style={styles.next} />}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
  },
  icon: {
    marginRight: 12,
  },
  container: {
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.primary,
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    color: colors.text.primary,
  },
  desc: {
    fontSize: 12,
    color: colors.text.secondary,
    fontWeight: "300",
  },
  next: {
    marginLeft: "auto",
  },
});
