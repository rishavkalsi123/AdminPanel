import axios from "axios";
import { IUser } from "../interfaces";
import API_BASE_URL from "./constants";

// ====== Products APi's =============

export const ProductListCall = (limit: number = 20) => {
  return axios
    .get(`${API_BASE_URL}/products?limit=${limit}`)
    .then((response) => {
      return response;
    });
};
export const ProductSearch = (query: string) => {
  return axios
    .get(`${API_BASE_URL}/products/search?q=${query}`)
    .then((response) => {
      console.log(response);
      return response;
    });
};

export const SingleProductListCall = (id: number = 0) => {
  return axios.get(`${API_BASE_URL}/products/${id}`).then((response) => {
    return response;
  });
};
// ====== Products APi's end =============

// ====== Users APi's  =============

export const UserSearch = (query: string) => {
  return axios
    .get(`${API_BASE_URL}/users/search?q=${query}`)
    .then((response) => {
      return response;
    });
};
export const UserListCall = (skip: number = 0, limit: number = 0) => {
  return axios
    .get(`${API_BASE_URL}/users?limit=${limit}&skip=${skip}`)
    .then((response) => {
      return response;
    });
};
export const SingleUserListCall = (id: number = 0) => {
  return axios.get(`${API_BASE_URL}/users/${id}`).then((response) => {
    return response;
  });
};
export const SingleUserPost = (id: number = 0) => {
  return axios.get(`${API_BASE_URL}/users/${id}/posts`).then((response) => {
    return response;
  });
};
export const AddUser = (user: IUser) => {
  return axios
    .post(`${API_BASE_URL}/users/add`, {
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age,
      address: user.address,
      birthDate: user.birthDate,
      bloodGroup: user.blood,
      email: user.email,
      phone: user.phone,
      university: user.university,
      gender: user.gender,
      image: user.image,
    })
    .then((response) => {
      return response;
    });
};
// ====== Users APi's end =============
