import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "../../components";

const ChooseDoctor = ({ navigation }) => {
  return (
    <View>
      <Header title="Choose Doctor" type="dark" navigation={navigation} />
      <Text>Choose Doctor</Text>
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({});
