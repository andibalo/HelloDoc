import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { ILNullPhoto } from "../../../../assets";
import { colors, getData } from "../../../utils";

const HomeProfle = ({ onPress }) => {
  const [user, setUser] = useState({
    photo: ILNullPhoto,
    fullname: "",
    pekerjaan: "",
  });

  useEffect(() => {
    getData("user")
      .then((res) => {
        res = JSON.parse(res);

        res.photo = { uri: res.photo };

        setUser(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={user.photo} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{user.fullname}</Text>
        <Text style={styles.profession}>{user.pekerjaan}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfle;

const styles = StyleSheet.create({
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  container: {
    flexDirection: "row",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text.primary,
  },
  profession: {
    fontSize: 12,
    fontWeight: "400",
    color: colors.text.secondary,
  },
});
