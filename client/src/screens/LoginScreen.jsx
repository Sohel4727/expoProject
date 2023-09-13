import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "../components/Button";
import { COLORS, RES } from "../constants/Theme";
import React, { useState } from "react";
import Input from "../components/Input";
const LoginScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.loginContainer}>
      <Image source={require("../assets/welcomeLogo.png")} />
      <Text style={styles.heading}>Login To Your Account</Text>
      {/* <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor={COLORS.grey}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          secureTextEntry={!showPassword}
          placeholder="Password"
          placeholderTextColor={COLORS.grey}
        />
        <TouchableOpacity>
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
        </TouchableOpacity>
      </View> */}
      <Input placeholder="Email" />
      <Input placeholder="password"  />
      <Text style={styles.orText}>Or Continue with</Text>
      <View style={styles.mainIconContainer}>
        {/* <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require("../assets/facebookIcon.png")}
          />
          <TouchableOpacity>
            <Text style={styles.iconText}>Facebook</Text>
          </TouchableOpacity>
        </View> */}
        <Button
          style={styles.iconContainer}
          logo={require("../assets/facebookIcon.png")}
          name="Facebook"
        />
        <Button
          style={styles.iconContainer}
          logo={require("../assets/googleIcon.png")}
          name="Google"
        />
        {/* <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require("../assets/googleIcon.png")}
          />
          <TouchableOpacity>
            <Text style={styles.iconText}>Google</Text>
          </TouchableOpacity>
        </View> */}
      </View>
      <TouchableOpacity>
        <Text style={styles.forgetHeading}>Forget Your Password?</Text>
      </TouchableOpacity>
      {/* <View style={styles.loginBtnContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("home")}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View> */}
      <Button
        onPress={() => navigation.navigate("home")}
        style={styles.loginBtnContainer}
        name="Login"
      />
      <TouchableOpacity onPress={() => navigation.navigate("signupscreen")}>
        <Text style={styles.signupText}>New Here? Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 25,
    marginVertical: 30,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 5,
    height: 50,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    marginVertical: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  mainIconContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  iconContainer: {
    // flexDirection: "row",
    width: RES.w(40),
    // paddingVertical: 12,
    // borderRadius: 10,
    // backgroundColor: "white",
    // justifyContent: "center",
    // alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  iconText: {
    fontWeight: "bold",
  },
  forgetHeading: {
    color: COLORS.primary,
    marginVertical: 18,
  },
  loginBtnContainer: {
    backgroundColor: COLORS.primary,
    width: RES.w(80),
    marginVertical: RES.h(2),
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  signupText: {
    color: COLORS.primary,
  },
});
