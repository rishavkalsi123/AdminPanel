import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let isAuth = localStorage.getItem("token");
    if (!isAuth) {
      navigate("/login");
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
};
export default PrivateRoute;
