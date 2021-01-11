import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button, Gap, Header, Link } from "../../components";
import { ICAddPhoto, ILNullPhoto } from "../../../assets";
import { colors } from "../../utils";

const UploadPhoto = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={ILNullPhoto} style={styles.avatar} />
            <ICAddPhoto style={styles.addPhoto} />
          </View>
          <Text style={styles.name}>Andi Usman Balo</Text>
          <Text style={styles.profession}>Software Engineer</Text>
        </View>

        <View>
          <Button title="Upload and Continue" />
          <Gap height={30} />
          <Link
            title="Skip this for now"
            align="center"
            size={16}
            onPress={() => navigation.replace("MainApp")}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: 40,
    paddingBottom: 40,
  },
  avatar: {
    width: 110,
    height: 110,
  },
  avatarWrapper: {
    height: 130,
    width: 130,
    borderRadius: 130 / 2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
  addPhoto: {
    position: "absolute",
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    color: colors.text.primary,
    textAlign: "center",
    fontWeight: "600",
  },
  profession: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    color: colors.text.secondary,
  },
  profile: {
    alignItems: "center",

    flex: 1,
    justifyContent: "center",
  },
});
