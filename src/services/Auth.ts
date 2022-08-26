import axios from "axios";
import { ILogin } from "../interfaces";
import API_BASE_URL from "./constants";

export const LoginUser = (username: string, password: string) => {
  return axios
    .post(`${API_BASE_URL}/auth/login`, {
      username: username,
      password: password,
    })
    .then((response) => {
      const res = response.data;
      const localData = {
        id: res.id,
        username: res.username,
        email: res.email,
        firstName: res.firstName,
        lastName: res.lastName,
        gender: res.gender,
        image: res.image,
        token: res.token,
      };
      localStorage.setItem("local", JSON.stringify(localData));
      return response;
    });
};
// ====== Users APi's end =============
