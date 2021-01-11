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

const Doctors = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <View style={styles.pageOverlay}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.sectionWrapper}>
            <Gap height={30} />
            <HomeProfile onPress={() => navigation.navigate("UserProfile")} />
            <Text style={styles.welcome}>
              Who do you want to consult with today?
            </Text>
          </View>

          <View style={styles.scrollWrapper}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={16} />
                <DoctorCategory
                  category="dokter umum"
                  onPress={() => navigation.navigate("ChooseDoctor")}
                />
                <DoctorCategory
                  category="psikiater"
                  onPress={() => navigation.navigate("ChooseDoctor")}
                />
                <DoctorCategory
                  category="dokter obat"
                  onPress={() => navigation.navigate("ChooseDoctor")}
                />
                <DoctorCategory
                  category="dokter umum"
                  onPress={() => navigation.navigate("ChooseDoctor")}
                />
                <Gap width={6} />
              </View>
            </ScrollView>
          </View>

          <View style={styles.sectionWrapper}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            <DoctorRating
              onPress={() => navigation.navigate("DoctorProfile")}
            />
            <DoctorRating />
            <DoctorRating />
          </View>
          <View style={styles.sectionWrapper}>
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>

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

  sectionLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
  sectionWrapper: {
    paddingHorizontal: 16,
  },
});
