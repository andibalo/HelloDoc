import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Button, Gap, Header, Link } from "../../components";
import { ICAddPhoto, ICRemovePhoto, ILNullPhoto } from "../../../assets";
import { colors, storeData } from "../../utils";
import * as ImagePicker from "expo-image-picker";
import { Firebase } from "../../config";

const UploadPhoto = ({ navigation, route }) => {
  const [hasPhoto, setHasPhoto] = useState(false);
  const [picture, setPicture] = useState(ILNullPhoto);
  const [pictureData, setPictureData] = useState(null);
  const { fullname, pekerjaan, uid, email } = route.params;

  const openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      base64: true,
      quality: 0.5,
    });

    //console.log(pickerResult);

    if (pickerResult.cancelled) {
      setPicture(ILNullPhoto);
      setHasPhoto(false);
      return;
    }
    setPictureData(
      `data:${pickerResult.type}/jpeg;base64, ${pickerResult.base64}`
    );
    setPicture({ uri: pickerResult.uri });
    setHasPhoto(true);
  };

  const handleUploadAndContinue = async () => {
    try {
      await Firebase.database()
        .ref(`/users/${uid}/`)
        .update({ photo: pictureData });

      await storeData(
        "user",
        JSON.stringify({
          ...route.params,
          photo: pictureData,
        })
      );

      navigation.replace("MainApp");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.page}>
      <Header title="Upload Photo" navigation={navigation} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity
            style={styles.avatarWrapper}
            onPress={openImagePickerAsync}
          >
            <Image source={picture} style={styles.avatar} />
            {hasPhoto ? (
              <ICRemovePhoto style={styles.addPhoto} />
            ) : (
              <ICAddPhoto style={styles.addPhoto} />
            )}
          </TouchableOpacity>
          <Text style={styles.name}>Andi Usman Balo</Text>
          <Text style={styles.profession}>Software Engineer</Text>
        </View>

        <View>
          <Button
            title="Upload and Continue"
            disable={hasPhoto}
            onPress={() => handleUploadAndContinue()}
          />
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
    borderRadius: 110 / 2,
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
