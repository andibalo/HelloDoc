import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Header, Input, Button, Gap } from "../../components";
import { colors, useForm } from "../../utils";

const Register = ({ navigation }) => {
  const [form, setForm] = useForm({
    fullname: "",
    pekerjaan: "",
    email: "",
    password: "",
  });

  const handleContinue = () => {
    alert(JSON.stringify(form));
  };

  return (
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
