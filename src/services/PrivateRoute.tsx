import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("local")
    ? JSON.parse(localStorage.getItem("local") || "")
    : "";
  useEffect(() => {
    if (!isAuth?.token) {
      console.log(isAuth.token, "isAuth");
      navigate("/login");
    }
  }, []);
  return <div>{isAuth?.token ? <Component /> : ""}</div>;
};
export default PrivateRoute;
