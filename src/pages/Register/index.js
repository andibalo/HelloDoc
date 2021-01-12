import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Header, Input, Button, Gap, Loading } from "../../components";
import { colors, useForm, storeData, deleteAllData } from "../../utils";
import { Firebase } from "../../config";
import { showMessage } from "react-native-flash-message";

const Register = ({ navigation }) => {
  const [form, setForm] = useForm({
    fullname: "",
    pekerjaan: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleContinue = async () => {
    //alert(JSON.stringify(form));
    setLoading(true);
    try {
      const authRes = await Firebase.auth().createUserWithEmailAndPassword(
        form.email,
        form.password
      );

      //console.log("AUTH", authRes);

      const data = {
        fullname: form.fullname,
        pekerjaan: form.pekerjaan,
        email: form.email,
        uid: authRes.user.uid,
      };

      await Firebase.database().ref(`/users/${authRes.user.uid}/`).set(data);

      await storeData("user", JSON.stringify(data));

      setForm("reset");
      setLoading(false);
      navigation.navigate("UploadPhoto", data);
    } catch (error) {
      console.log(error);
      setLoading(false);

      showMessage({
        type: "default",
        message: error.message,
        backgroundColor: colors.error,
        color: colors.white,
      });
    }
  };

  return (
    <>
      <View style={styles.page}>
        <Header title="Create Account" navigation={navigation} />

        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              label="Full Name"
              value={form.fullname}
              onChangeText={(value) => setForm("fullname", value)}
            />
            <Gap height={24} />
            <Input
              label="Pekerjaan"
              value={form.pekerjaan}
              onChangeText={(value) => setForm("pekerjaan", value)}
            />
            <Gap height={24} />
            <Input
              label="Email"
              value={form.email}
              onChangeText={(value) => setForm("email", value)}
            />
            <Gap height={24} />
            <Input
              label="Password"
              secureTextEntry={true}
              value={form.password}
              onChangeText={(value) => setForm("password", value)}
            />
            <Gap height={40} />
            <Button
              title="Continue"
              type="primary"
              onPress={() => handleContinue()}
            />
          </ScrollView>
        </View>
      </View>
      {loading && <Loading />}
    </>
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
