import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "../../components";
import { colors } from "../../utils";
import { ListDoctor } from "../../components";

const ChooseDoctor = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <Header title="Choose Doctor" type="dark" navigation={navigation} />

      <ListDoctor type="next" onPress={() => navigation.navigate("Chat")} />
      <ListDoctor type="next" onPress={() => navigation.navigate("Chat")} />
      <ListDoctor type="next" onPress={() => navigation.navigate("Chat")} />
      <ListDoctor type="next" onPress={() => navigation.navigate("Chat")} />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
