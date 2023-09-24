import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { RES ,COLORS} from "../constants/Theme";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const Input = ({ onChange, value,style, placeholder,name }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
      name={name}
        style={styles.inputText}
        placeholder={placeholder}
        placeholderTextColor="#3B3B3B"
        secureTextEntry={!showPassword}
        onChangeText={onChange}
        value={value}
      />
     { placeholder==='password' && <TouchableOpacity>
        {showPassword ? (
          <Octicons
            onPress={handlePasswordChange}
            style={{ width: 24, height: 24 }}
            name="eye-closed"
            size={24}
            color={COLORS.primary}
          />
        ) : (
          <Octicons
            onPress={handlePasswordChange}
            style={{ width: 24, height: 24 }}
            name="eye"
            size={24}
            color={COLORS.primary}
          />
        )}
      </TouchableOpacity>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    width: RES.w(80),
    backgroundColor: "white",
    borderRadius: 5,
    height: RES.h(7),
    marginTop: RES.h(2),
    justifyContent: "center",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputText: {
    height: RES.h(6),
    color: "#3B3B3B",
    fontSize: RES.f(2),
    fontWeight: "bold",
  },
});
