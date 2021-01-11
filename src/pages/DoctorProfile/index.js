import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Gap, Header, Profile, ProfileItem } from "../../components";
import { colors } from "../../utils";

const DoctorProfile = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" navigation={navigation} />
      <Profile name="Andi Usman Balo" desc="Dokter Anak" />
      <Gap height={10} />
      <View style={styles.content}>
        <ProfileItem label="Alumnus" value="Universitas Indonesia" />
        <ProfileItem label="Practice Location" value="Rumah Sakit Pekerja" />
        <ProfileItem label="No. STR" value="0000000000" />
        <Gap height={23} />
        <Button title="Start Consultation" />
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
  },
});
