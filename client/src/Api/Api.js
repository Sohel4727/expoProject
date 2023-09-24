
const BaseUrl = "http://192.168.0.105:8080/";
// dummy api for food products
import axios from "axios";
export const burgerApi = async () => {
  return axios.get("https://adorable-bat-fatigues.cyclic.app/burgers");
};

// user registration api
// export const userRegister = async (email, password) => {
//     // console.log("data==>",email,password)
//     try {
//       const response = await axios.post(`${BaseUrl}signup`, {
//         email: email,
//         password: password,
//       });
//       return response.data;
//     } catch (error) {
//       console.error(error);
//       throw error;
//     }
//   };

// user registration api
export const userRegister = async (email, password) => {
  console.log("data",email,password)
  const obj = {
    email: email,
    password: password,
  };

  return axios.post(`${BaseUrl}auth/signup`, obj);
};

// user Login Api

export const userLogin = async (email, password) => {
  console.log("data",email,password)
  const obj = {
    email: email,
    password: password,
  };

  return axios.post(`${BaseUrl}auth/login`, obj);
};

// export const userRegister = async (email, password) => {
//   const params = new URLSearchParams();
//   params.append('email', email);
//   params.append('password', password);
//   const encodedData = params.toString();

//   try {
//     const response = await axios.post(`${BaseUrl}signup`, encodedData, {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
//       },
//     });

//     return response; // Return the entire Axios response object
//   } catch (error) {
//     throw error; // Throw the error for handling in the calling code
//   }
// };



