import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button, Gap, Header, Input, Profile, Loading } from "../../components";
import { colors, getData, storeData } from "../../utils";
import { Firebase } from "../../config";
import * as ImagePicker from "expo-image-picker";
import { ILNullPhoto } from "../../../assets";

const UpdateProfile = ({ navigation }) => {
  const [profile, setProfile] = useState({
    fullname: "",
    pekerjaan: "",
    email: "",
    uid: "",
    photo: ILNullPhoto,
  });

  const [loading, setLoading] = useState(false);
  const [pictureData, setPictureData] = useState("");
  const [hasChangedPhoto, setHasChangedPhoto] = useState(false);
  useEffect(() => {
    getData("user")
      .then((res) => {
        res = JSON.parse(res);
        //console.log("GET EFFECT", res);
        res.photo = { uri: res.photo };
        setProfile(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = async () => {
    console.log(profile);
    setLoading(true);
    try {
      const data = profile;

      data.photo = profile.photo.uri;

      await Firebase.database().ref(`/users/${profile.uid}/`).update(data);
      console.log("LOCALSTORAGE", data);
      storeData("user", JSON.stringify(data));
      setLoading(false);
      return;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const onChangeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const getImage = async () => {
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
      // setPicture(ILNullPhoto);
      // setHasPhoto(false);
      return;
    }
    setPictureData(
      `data:${pickerResult.type}/jpeg;base64, ${pickerResult.base64}`
    );
    setHasChangedPhoto(true);
    setProfile({
      ...profile,
      photo: {
        uri: `data:${pickerResult.type}/jpeg;base64, ${pickerResult.base64}`,
      },
    });
  };

  return (
    <>
      <View style={styles.page}>
        <Header title="Update Profile" navigation={navigation} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Profile
              isAvatarRemovable
              photo={profile.photo}
              onPress={getImage}
            />
            <Gap height={26} />
            <Input
              label="Full Name"
              value={profile.fullname}
              onChangeText={(value) => onChangeText("fullname", value)}
            />
            <Gap height={24} />
            <Input
              label="Profession"
              value={profile.pekerjaan}
              onChangeText={(value) => onChangeText("pekerjaan", value)}
            />
            <Gap height={24} />
            <Input label="Email Address" disabled value={profile.email} />
            <Gap height={24} />
            <Input label="Password" />
            <Gap height={40} />
            <Button title="Save Profile" onPress={handleUpdate} />
          </View>
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
