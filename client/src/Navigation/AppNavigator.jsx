import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import WelcomeFood from "../screens/WelcomeFood";
import WelcomeCoffee from "../screens/WelcomeCoffee";
import WelcomeBurger from "../screens/WelcomeBurger";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="welcomefood">
      <Stack.Screen
        name="welcomefood"
        options={{
          headerShown: false,
        }}
        component={WelcomeFood}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="welcomecoffee"
        component={WelcomeCoffee}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="welcomeburger"
        component={WelcomeBurger}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="loginscreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="signupscreen"
        component={SignupScreen}
      />
      <Stack.Screen name="home" component={HomeScreen} />
      {/* <Stack.Screen name="Signup" component={Signup} /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
