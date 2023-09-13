import { View, Text ,TouchableOpacity} from 'react-native';
import {StatusBar} from "expo-status-bar"
import tw from 'twrnc';
import { NavigationContainer } from "@react-navigation/native";

// import AppNavigator from "./src/Navigation/AppNavigator";

function App() {
  return (
    <NavigationContainer>
      <View style={tw`flex-1 justify-center items-center bg-black`}>
        <TouchableOpacity style={tw`bg-teal-500 p-3 rounded-lg `}>
        <Text style={tw`text-white text-3xl font-bold`}>Hello World</Text>
        </TouchableOpacity>
        <StatusBar style={'light'} />
         
      </View>
      {/* <AppNavigator /> */}
    </NavigationContainer>
  );
}

export default App;
