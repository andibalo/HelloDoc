import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ILLogo } from "../../../assets";
import { Input, Link, Button, Gap } from "../../components";

const Login = () => {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk & Mulai Berkonsultasi</Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title="Forgot Password" size={12} />
      <Gap height={40} />
      <Button title="Sign In" type="primary" />
      <Gap height={30} />
      <Link title="Create Account" size={16} align="center" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
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