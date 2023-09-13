import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Button from "../components/Button";
import { COLORS, RES } from "../constants/Theme";
import Input from "../components/Input";
const SignupScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = () => {
    setShowPassword(!showPassword);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.signupContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/welcomeLogo.png")}
          />
          <Text style={styles.heading}>Signup</Text>
          {/* <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="Name"
              placeholderTextColor="#3B3B3B"
            />
          </View> */}
          <Input placeholder='Name'/>
          {/* <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="Email"
              placeholderTextColor="#3B3B3B"
            />
          </View> */}
           <Input placeholder='Email'/>
           <Input placeholder='password'  />
          {/* <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              secureTextEntry={!showPassword}
              placeholder="Password"
              placeholderTextColor="#3B3B3B"
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
          <View style={styles.rightIcon_container}>
            <AntDesign
              style={styles.rightIcon}
              name="checkcircle"
              size={24}
              color={COLORS.primary}
            />
            <Text>Keep Me Signed In</Text>
          </View>
          <View style={styles.rightIcon_container}>
            <AntDesign
              style={styles.rightIcon}
              name="checkcircle"
              size={24}
              color={COLORS.primary}
            />
            <Text>Email Me About Special Pricing</Text>
          </View>
          {/* <View style={styles.signupBtnContainer}>
        <TouchableOpacity>
          <Text style={styles.signupText}>Create account</Text>
        </TouchableOpacity>
      </View> */}
          <Button style={styles.signupBtnContainer} name="Create account" />
          <TouchableOpacity onPress={() => navigation.navigate("loginscreen")}>
            <Text style={styles.alreadyText}>Already have an account?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  signupContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginTop: RES.h(5),
  },
  heading: {
    fontSize: RES.f(4),
    marginVertical: RES.h(3),
    fontWeight: "bold",
  },
  // inputContainer: {
  //   width: RES.w(80),
  //   backgroundColor: "white",
  //   borderRadius: 5,
  //   height: RES.h(7),
  //   marginTop: RES.h(2),
  //   justifyContent: "center",
  //   padding: 20,
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  // },
  // inputText: {
  //   height: RES.h(6),
  //   color: "#3B3B3B",
  //   fontSize: RES.f(2),
  //   fontWeight: "bold",
  // },
  rightIcon_container: {
    flexDirection: "row",
    marginTop: RES.h(2),
    width: RES.w(80),
  },
  rightIcon: {
    marginRight: RES.w(3),
  },
  signupBtnContainer: {
    backgroundColor: COLORS.primary,
    width: RES.w(80),
    // padding: 18,
    marginTop: RES.h(5),
  },
  // signupText: {
  //   color: "white",
  //   fontWeight: "bold",
  //   fontSize: RES.f(2),
  // },
  alreadyText: {
    color: COLORS.primary,
    marginVertical: 20,
    fontWeight: "bold",
  },
});
