import axios from "axios";
import API_BASE_URL from "./constants";

export const ProductListCall = () => {
  return axios.get(`${API_BASE_URL}/products`).then((response) => {
    return response;
  });
};
