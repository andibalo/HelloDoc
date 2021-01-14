import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { ICRemovePhoto, ILNullPhoto } from "../../../../assets";
import { colors } from "../../../utils";

const Profile = ({
  name,
  desc,
  isAvatarRemovable,
  photo = ILNullPhoto,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      {isAvatarRemovable ? (
        <TouchableOpacity style={styles.avatarBorder} onPress={onPress}>
          <Image source={photo} style={styles.avatar} />
          {isAvatarRemovable && <ICRemovePhoto style={styles.remove} />}
        </TouchableOpacity>
      ) : (
        <View style={styles.avatarBorder}>
          <Image source={photo} style={styles.avatar} />
          {isAvatarRemovable && <ICRemovePhoto style={styles.remove} />}
        </View>
      )}
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{desc}</Text>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 130 / 2,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  avatarBorder: {
    height: 130,
    width: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 16,
    color: colors.text.primary,
  },
  profession: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 4,
    color: colors.text.secondary,
  },
  remove: {
    position: "absolute",
    bottom: 4,
    right: 4,
  },
});
