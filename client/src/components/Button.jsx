import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { RES, COLORS } from "../constants/Theme";
const Button = ({ logo, name, style, onPress }) => {
  const buttonStyle = {
    ...styles.button,
    justifyContent: logo ? "space-evenly" : "center",
    ...style,
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={buttonStyle}>
        {logo && <Image source={logo} style={styles.icon} />}
        <Text
          style={
            style.backgroundColor === COLORS.primary && styles.nextBtn_text
          }
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    width: RES.w(60),
    backgroundColor: COLORS.white,
    fontWeight: "bold",
    borderRadius: RES.w(3),
    height: RES.h(8),

    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: RES.h(4),
    width: RES.w(8),
    // marginRight:RES.w(2)
  },
  nextBtn_text: {
    color: COLORS.white,
    fontSize: RES.f(2),
    fontWeight: "bold",
  },
});
