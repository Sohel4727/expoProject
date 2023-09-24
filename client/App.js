import { View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import tw from "twrnc";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/Navigation/AppNavigator";

function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
