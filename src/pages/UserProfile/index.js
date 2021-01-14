import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { showMessage } from "react-native-flash-message";
import { ILNullPhoto } from "../../../assets";
import { Gap, Header, List, Profile } from "../../components";
import { Firebase } from "../../config";
import { colors, getData } from "../../utils";

const UserProfile = ({ navigation }) => {
  const [profile, setProfile] = useState({
    fullname: "",
    pekerjaan: "",
    photo: ILNullPhoto,
  });

  useEffect(() => {
    getData("user")
      .then((res) => {
        //console.log(res);
        const data = JSON.parse(res);
        data.photo = { uri: data.photo };

        setProfile(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const signOut = async () => {
    try {
      await Firebase.auth().signOut();

      navigation.replace("GetStarted");
    } catch (error) {
      console.log(error);
      showMessage({
        type: "default",
        message: error.message,
        backgroundColor: colors.error,
        color: colors.white,
      });
    }
  };

  return (
    <View style={styles.page}>
      <Header title="Profile" navigation={navigation} />
      <Gap height={10} />
      {profile.fullname.length > 0 && (
        <Profile
          name={profile.fullname}
          desc={profile.pekerjaan}
          photo={profile.photo}
        />
      )}

      <Gap height={14} />
      <List
        title="Edit Profile"
        desc="Make Changes to your profile"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate("UpdateProfile")}
      />
      <List
        title="Change Password"
        desc="Update your password"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate("ChangePassword")}
      />
      <List
        title="Change Language"
        desc="Choose your language"
        type="next"
        icon="language"
      />
      <List title="Rate Us" desc="Give your rating" type="next" icon="rate" />
      <List
        title="Sign Out"
        desc="Log out from account"
        type="next"
        icon="help"
        onPress={signOut}
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
