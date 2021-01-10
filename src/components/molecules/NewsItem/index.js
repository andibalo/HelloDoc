import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { DummyNews1 } from "../../../../assets";
import { colors } from "../../../utils";

const NewsItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          Is it safe to stay at home during coronavirus?
        </Text>
        <Text style={styles.date}>Today</Text>
      </View>

      <Image source={DummyNews1} style={styles.image} />
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingBottom: 12,
    paddingTop: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.primary,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text.primary,
    maxWidth: "90%",
  },
  date: {
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: 4,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  titleWrapper: {
    flex: 1,
  },
});
