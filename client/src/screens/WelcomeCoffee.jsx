import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { RES, COLORS } from "../constants/Theme";
import Button from "../components/Button";

const WelcomeCoffee = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/welcomeCoffe.png")} />
      <View>
        <Text style={styles.heading}>Find your Comfort Food here</Text>
        <Text style={styles.subHeading}>
          Here You Can find a chef or dish for every taste and color. Enjoy!
        </Text>
      </View>

      {/* <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate("welcomeburger")}>
          <Text style={styles.nextBtn_text}>Next</Text>
        </TouchableOpacity> */}
      <Button
        onPress={() => navigation.navigate("welcomeburger")}
        style={styles.nextBtn}
        name="Next"
      />
    </View>
  );
};

export default WelcomeCoffee;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 30,
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  subHeading: {
    paddingVertical: 20,
    paddingHorizontal: 50,
    textAlign: "center",
  },

  nextBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: RES.w(10),
    marginVertical: RES.h(2),
  },
});
