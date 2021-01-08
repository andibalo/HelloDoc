import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

import { ILLogo, ILGetStarted } from "../../../assets";
import { Button, Gap } from "../../components";

const GetStarted = ({ navigation }) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter menjadi lebih mudah & flexibel
        </Text>
      </View>

      <View>
        <Button
          title="Get Started"
          type="primary"
          onPress={() => navigation.navigate("Register")}
        />
        <Gap height={16} />
        <Button
          title="Sign In"
          type="secondary"
          onPress={() => navigation.replace("Login")}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: "space-between",
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    marginTop: 90,
    color: "white",
  },
});
