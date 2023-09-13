import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";

const Signup = ({navigation}) => {
//   const onPressLogin = () => {
//     Alert.alert(
//       "Alert Title",
//       "My Alert Msg",
//       [
//         {
//           text: "Ask me later",
//           onPress: () => console.log("Ask me later pressed"),
//         },
//         {
//           text: "Cancel",
//           onPress: () => console.log("Cancel Pressed"),
//           style: "cancel",
//         },
//         { text: "OK", onPress: () => console.log("OK Pressed") },
//       ]
//       // Do something about login operation
//     );
//   };
//   const onPressForgotPassword = () => {
//     // Do something about forgot password operation
//   };
//   const onPressSignUp = () => {
//     // Do something about signup operation
//   };
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}> Signup</Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Name"
          placeholderTextColor="#003f5c"
          
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="mobile Number"
          placeholderTextColor="#003f5c"
          
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setState({ email: text })}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setState({ password: text })}
        />
      </View>
      
      <TouchableOpacity style={styles.signupBtn}>
        <Text>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.loginBtn}>
        <Text  onPress={() => navigation.navigate('Login')} style={styles.loginText}>Login </Text>
      </TouchableOpacity>
      
    </View>
  );
};
export default Signup;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  title_container: {
    justifyContent: "flex-start",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "black",
    marginBottom: 40,
    textAlign: "left",
  },
  inputView: {
    width: "80%",
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 5,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  forgotAndSignUpText: {
    color: "black",
    fontSize: 15,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  signupBtn: {
    width: "80%",
    borderWidth: 1,
    backgroundColor: "green",
    fontWeight: "bold",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  
});

