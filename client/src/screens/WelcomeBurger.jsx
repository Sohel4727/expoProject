import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../components/Button";
import { COLORS, RES } from "../constants/Theme";

const WelcomeBurger = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/welcomeBurger.png")} />
      <View>
        <Text style={styles.heading}>
          Food Ninja is Where Your Comfort Food Lives
        </Text>
        <Text style={styles.subHeading}>
          Enjoy a fast and smooth food delivery at your doorstep
        </Text>
      </View>

      {/* <TouchableOpacity onPress={() => navigation.navigate("loginscreen")} style={styles.nextBtn}>
            <Text style={styles.nextBtn_text}>Next</Text>
          </TouchableOpacity> */}
      <Button
        onPress={() => navigation.navigate("loginscreen")}
        style={styles.nextBtn}
        name="Next"
      />
    </View>
  );
};

export default WelcomeBurger;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: RES.f(4),
    padding: RES.w(3),
    textAlign: "center",
    fontWeight: "bold",
  },
  subHeading: {
    paddingVertical: RES.h(2),
    paddingHorizontal: RES.w(10),
    textAlign: "center",
    fontWeight:"bold",
    color:COLORS.grey
  },
  nextBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: RES.w(10),
    marginVertical: RES.h(2),
  },
});
