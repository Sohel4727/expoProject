import axios from "axios";
import React, { useState } from "react";
import {
  Alert,
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
import { userRegister } from "../Api/Api";
const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPasswod] = useState("");

  const handleEmail = (text) => {
    setEmail(text);
  };
  const handlePassword = (text) => {
    setPasswod(text);
  };

  // const obj = {
  //   email: email,
  //   password: password,
  // };
  // const handleSubmit = () => {
  //   fetch("http://localhost:8080/signup", {
  //     method: "POST",
  //     body: obj,
  //     headers: {
  //       //Header Defination
  //       "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       //Hide Loader
  //       // setLoading(false);
  //       console.log(responseJson);
  //       // If server response message same as Data Matched
  //       // if (responseJson.status === 'success') {
  //       //   AsyncStorage.setItem('user_id', responseJson.data.email);
  //       //   console.log(responseJson.data.email);
  //       //   navigation.replace('DrawerNavigationRoutes');
  //       // } else {
  //       //   setErrortext(responseJson.msg);
  //       //   console.log('Please check your email id or password');
  //       // }
  //     })
  //     .catch((error) => {
  //       //Hide Loader
  //       // setLoading(false);
  //       console.error(error);
  //     });
  // };

  // const handleSubmit = async ()=>{
  //   let result = await fetch('http://localhost:8080/signup',{
  //     method:"POST",
  //     body:JSON.stringify(obj),
  //     headers:{
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     }
  //   })
  //   result= await result.json();
  //   console.log("result",result);
  // }
  const handleSubmit = async () => {
    console.log("pressed");
    try {
      const response = await userRegister(email, password);
      console.log("res", response.data);

      // Display a success alert
      Alert.alert(
        'Success',
        'User registration successful!',
        [
          {
            text: 'OK',
            onPress:() => navigation.navigate("loginscreen")
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.log(error);

      // Display an error alert
      Alert.alert(
        'Error',
        'User registration failed. Please try again.',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),

          },
        ],
        { cancelable: false }
      );
    }
  };
  // const handleSubmit = async () => {
  //   console.log("pressed");
  //   const obj = {
  //     empid: 1,
  //     fname: "sayyed1",
  //     lname: "sohel1",
  //     email: "sohel@example.com",
  //     mobile: 1234567890,
  //     city: "nanded",
  //   };
  
  //   try {
  //     const response = await axios.post("http://192.168.0.101:8080/auth/signup", obj);
  //     console.log(response.data); // Assuming the server responds with meaningful data
  //   } catch (error) {
  //     console.error("Network Error:", error);
  //     // Handle the error, log it, or display a user-friendly message
  //   }
  // };
  
  // const data = {
  //   email: "sohel123@gmail.com",
  //   password: "Sohel@123",
  // };

  //const apiUrl = "http://172.23.240.1:8080"; // Replace with your actual server address

// const handleSubmit = async () => {
//   console.log("pressed");
//   const TIMEOUT_MS = 60000; // 30 seconds
//   try {
//     let result = await Promise.race([
//       fetch(`${apiUrl}/auth/signup`, {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       }),
//       new Promise((_, reject) =>
//         setTimeout(() => reject(new Error("Request timeout")), TIMEOUT_MS)
//       ),
//     ]);

//     if (result.ok) {
//       // HTTP status code 200-299 indicates success
//       console.log('Data added');
//     } else {
//       // Handle non-successful response (e.g., 4xx or 5xx)
//       console.log('Data not added');
//     }
//   } catch (error) {
//     if (error.message === "Request timeout") {
//       console.error("Request timed out. Please try again later.");
//     } else {
//       // Handle other network errors or exceptions
//       console.error("Error:", error);
//     }
//   }
// };


  // const handleSubmit = async () => {
  //   console.log("pressed");
  //   try {
  //     let result = await fetch('http://172.23.240.1:8080/auth/signup', {
  //       method: "POST",
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     console.log("After fetch");
  //     if (result.ok) {
  //       // HTTP status code 200-299 indicates success
  //       console.log('Data added');
  //     } else {
  //       // Handle non-successful response (e.g., 4xx or 5xx)
  //       console.log('Data not added');
  //     }
  //   } catch (error) {
  //     // Handle any network errors or exceptions
  //     console.error('Error:', error);
  //   }
  // }

  // const handleSubmit = async () => {
  //   console.log("pressed");
  //   await axios({
  //     method: "post",
  //     url: "http://172.23.240.1:8080/auth/signup",
  //     data: {
  //       email: "sohel@gmail.com",
  //       password: "Sohel@123",
  //     },
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((response) => {
  //       // Handle the response coming from the server after inserting records
  //       Alert.alert(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  // const handleSubmit = async () => {
  //   await axios({
  //     method:"post",
  //     url:"http://localhost:8080/auth/signup",
  //     obj:{
  //       email : "sohel@gmail.com",
  //       password: "Sohel@123"
  //     }
  //   }).then((res)=>console.log(res))
  //   .catch((error)=> console.log(error))
  // };

  // const handleSubmit = async (event) => {
  //   console.log("button pressed");
  //   try {
  //     const response = await axios.post(`${baseUrl}signup`, {
  //       email: "jane.doe@gmail.com",
  //       password: "Jane@123",
  //     });
  //     if (response.status === 201) {
  //       alert(` You have created: ${JSON.stringify(response.data)}`);
  //     } else {
  //       throw new Error("An error has occurred throw");
  //     }
  //   } catch (error) {
  //     console.error("An error has occurred:", error);
  //     alert("An error has occurred");
  //   }

  // };
  // const handleSubmit=() =>{
  //   userRegister(email,password)
  //   .then((res)=>{
  //     console.log(res);
  //     Alert.alert(
  //       "Alert Title",
  //       "My Alert Msg",
  //       [
  //         {
  //           text: "Ask me later",
  //           // onPress: () => console.log("Ask me later pressed"),
  //         },
  //         {
  //           text: "Cancel",
  //           // onPress: () => console.log("Cancel Pressed"),
  //           style: "cancel",
  //         },
  //         // { text: "OK", onPress: () => console.log("OK Pressed") },
  //       ]
  //       // Do something about login operation
  //     );
  //   }).catch((error)=>{
  //     console.log(error);
  //   })
  // }
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
          <Input placeholder="Name" />

          {/* <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="Email"
              placeholderTextColor="#3B3B3B"
            />
          </View> */}
          <Input
            name="email"
            onChange={handleEmail}
            value={email}
            placeholder="Email"
          />
          <Text>{email}</Text>
          <Input
            name="password"
            placeholder="password"
            onChange={handlePassword}
          />
          <Text>{password}</Text>
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
          <Button
            onPress={handleSubmit}
            style={styles.signupBtnContainer}
            name="Create account"
          />
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
