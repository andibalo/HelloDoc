import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import {
  DoctorCategory,
  DoctorRating,
  Gap,
  HomeProfile,
  NewsItem,
} from "../../components";
import { colors } from "../../utils";

const Doctors = () => {
  return (
    <View style={styles.page}>
      <View style={styles.pageOverlay}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30} />
          <HomeProfile />
          <Text style={styles.welcome}>
            Who do you want to consult with today?
          </Text>
          <View style={styles.scrollWrapper}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={16} />
                <DoctorCategory />
                <DoctorCategory />
                <DoctorCategory />
                <DoctorCategory />
              </View>
            </ScrollView>
          </View>

          <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
          <DoctorRating />
          <DoctorRating />
          <DoctorRating />
          <Text style={styles.sectionLabel}>Good News</Text>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctors;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  pageOverlay: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 16,

    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcome: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 200,
    color: colors.text.primary,
  },
  category: {
    flexDirection: "row",
  },
  scrollWrapper: {
    marginHorizontal: -16,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
