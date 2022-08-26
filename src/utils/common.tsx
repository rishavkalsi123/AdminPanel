import React from "react";

export const getLoginUser = () => {
  const isAuth = localStorage.getItem("local")
    ? JSON.parse(localStorage.getItem("local") || "")
    : "";
  return isAuth;
};
