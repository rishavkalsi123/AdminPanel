import axios from "axios";
import API_BASE_URL from "./constants";

export const ProductListCall = () => {
  return axios.get(`${API_BASE_URL}/products`).then((response) => {
    return response;
  });
};
export const UserListCall = () => {
  return axios.get(`${API_BASE_URL}/users`).then((response) => {
    return response;
  });
};
