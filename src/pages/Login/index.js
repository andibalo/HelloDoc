import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { showMessage } from "react-native-flash-message";
import { ILLogo } from "../../../assets";
import { Input, Link, Button, Gap, Loading } from "../../components";
import { Firebase } from "../../config";
import { colors, useForm, storeData } from "../../utils";

const Login = ({ navigation }) => {
  const [form, setForm] = useForm({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    //console.log(form);
    setLoading(true);
    try {
      const res = await Firebase.auth().signInWithEmailAndPassword(
        form.email,
        form.password
      );

      //console.log(res);

      const resDb = await Firebase.database()
        .ref(`/users/${res.user.uid}/`)
        .once("value");

      //console.log(resDb.val());
      setLoading(false);
      if (resDb.val()) {
        storeData("user", JSON.stringify(resDb.val()));

        navigation.replace("MainApp");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      showMessage({
        message: error.message,
        type: "default",
        backgroundColor: colors.error,
        color: colors.white,
      });
    }
  };

  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ILLogo />
          <Text style={styles.title}>Masuk & Mulai Berkonsultasi</Text>
          <Input
            label="Email Address"
            onChangeText={(value) => setForm("email", value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            onChangeText={(value) => setForm("password", value)}
            secureTextEntry
          />
          <Gap height={10} />
          <Link title="Forgot Password" size={12} />
          <Gap height={40} />
          <Button title="Sign In" type="primary" onPress={handleLogin} />
          <Gap height={30} />
          <Link
            title="Create Account"
            size={16}
            align="center"
            onPress={() => navigation.navigate("Register")}
          />
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    marginTop: 40,
    fontWeight: "600",
    marginBottom: 40,
    color: "#112340",
    maxWidth: 150,
  },
});
