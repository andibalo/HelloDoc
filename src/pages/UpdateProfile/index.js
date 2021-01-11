import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button, Gap, Header, Input, Profile } from "../../components";
import { colors } from "../../utils";

const UpdateProfile = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <Header title="Update Profile" navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile />
          <Gap height={26} />
          <Input label="Full Name" />
          <Gap height={24} />
          <Input label="Profession" />
          <Gap height={24} />
          <Input label="Email Address" />
          <Gap height={24} />
          <Input label="Password" />
          <Gap height={40} />
          <Button title="Save Profile" />
        </View>
      </ScrollView>
    </View>
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
