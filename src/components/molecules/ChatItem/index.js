import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../utils";
import Me from "./Me";
import Other from "./Other";

const ChatItem = ({ isMe }) => {
  if (isMe) {
    return <Me />;
  }

  return <Other />;
};

export default ChatItem;

const styles = StyleSheet.create({});
