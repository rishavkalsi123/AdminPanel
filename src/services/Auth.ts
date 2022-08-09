import axios from "axios";
import API_BASE_URL from "./constants";
export const LoginApi = (email, password) => {
  return axios
    .post(`${API_BASE_URL}/login`, {
      email: email,
      password: password,
    })
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("token", response.data.token);
      }
      console.log("response ==> ", response);
      return response;
    });
  // .catch((error) => {
  //   return error;
  // });
};
export const RegisterApi = (email, password) => {
  return axios
    .post(`${API_BASE_URL}/register`, {
      email: email,
      password: password,
    })
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("token", response.data.token);
      }
      console.log("response ==> ", response);
      return response;
    });
};
