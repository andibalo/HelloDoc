import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Gap, Header, List, Profile } from "../../components";
import { colors } from "../../utils";

const UserProfile = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <Header title="Profile" navigation={navigation} />
      <Gap height={10} />
      <Profile
        name="Andi Usman Balo"
        desc="Software Engineer"
        isAvatarRemovable
      />
      <Gap height={14} />
      <List
        title="Edit Profile"
        desc="Make Changes to your profile"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate("UpdateProfile")}
      />
      <List
        title="Change Language"
        desc="Choose your language"
        type="next"
        icon="language"
      />
      <List title="Rate Us" desc="Give your rating" type="next" icon="rate" />
      <List title="Help" desc="Get Help" type="next" icon="help" />
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
