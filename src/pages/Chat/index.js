import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header, ChatItem, InputChat } from "../../components";
import { colors } from "../../utils";

const Chat = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <Header
        title="Nairobi Putri Hayza"
        type="dark-profile"
        navigation={navigation}
      />
      <View style={styles.content}>
        <Text style={styles.chatDate}>Senin, 21 Maret 2020</Text>
        <ChatItem isMe />
        <ChatItem />
        <ChatItem isMe />
      </View>

      <InputChat />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  chatDate: {
    fontSize: 12,
    textAlign: "center",
    color: colors.text.secondary,
    marginVertical: 20,
  },
  page: {
    backgroundColor: "white",
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
