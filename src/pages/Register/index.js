import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header, Input, Button, Gap } from "../../components";
import { colors } from "../../utils";

const Register = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <Header title="Daftar Akun" navigation={navigation} />
      <View style={styles.content}>
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input label="Email" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <Button
          title="Continue"
          type="primary"
          onPress={() => navigation.navigate("UploadPhoto")}
        />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  content: {
    padding: 40,
    paddingTop: 0,
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
