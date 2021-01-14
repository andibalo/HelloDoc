import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button, Gap, Header, Input, Loading } from "../../components";
import { colors, useForm } from "../../utils";
import { Firebase } from "../../config";
import { showMessage } from "react-native-flash-message";

const ChangePassword = ({ navigation }) => {
  const [form, setForm] = useForm({
    password: "",
    newPassword: "",
  });

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const user = Firebase.auth().currentUser;

    setEmail(user.email);
  }, []);

  const updatePassword = async () => {
    //console.log("FORM", form);
    setLoading(true);
    try {
      const credential = Firebase.auth.EmailAuthProvider.credential(
        email,
        form.password
      );

      //console.log("CRED", credential);
      const user = Firebase.auth().currentUser;
      const res = await user.reauthenticateWithCredential(credential);
      //console.log("REAUTH CRED", res);
      await user.updatePassword(form.newPassword);

      setForm("reset");
      showMessage({
        type: "success",
        message: "Password has been updated!",
      });

      setLoading(false);
    } catch (error) {
      console.log(error);

      showMessage({
        type: "default",
        message: error.message,
        backgroundColor: colors.error,
        color: colors.white,
      });

      setLoading(false);
    }
  };

  return (
    <>
      <View style={styles.page}>
        <Header title="Change Password" navigation={navigation} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Input
              label="Current Password"
              onChangeText={(value) => setForm("password", value)}
              value={form.password}
              secureTextEntry
            />
            <Gap height={24} />
            <Input
              label="New Password"
              onChangeText={(value) => setForm("newPassword", value)}
              value={form.newPassword}
              secureTextEntry
            />
            <Gap height={40} />
            <Button title="Update Password" onPress={updatePassword} />
          </View>
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
  },
});
