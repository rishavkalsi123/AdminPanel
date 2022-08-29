import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/App.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
// import PrivateRoute from "./components/PrivateRoute";
import ProductList from "./pages/ProductList";
import UserList from "./pages/UserList";
import UserDetail from "./pages/UserDetail";
import Cart from "./pages/CartList";
import store from "./store/store";
import { Provider } from "react-redux";
import ProductDetail from "./pages/ProductDetail";
import PostsList from "./pages/PostsList";
import { AnimatePresence } from "framer-motion";
import PrivateRoute from "./services/PrivateRoute";
import Login from "./pages/Login";
function App() {
  const location = useLocation();
  return (
    <Provider store={store}>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute Component={Dashboard} />} />
          <Route
            path="/product"
            element={<PrivateRoute Component={ProductList} />}
          />
          <Route
            path="/product/:id"
            element={<PrivateRoute Component={ProductDetail} />}
          />
          <Route path="/user" element={<PrivateRoute Component={UserList} />} />
          <Route
            path="/user/:id"
            element={<PrivateRoute Component={UserDetail} />}
          />
          <Route
            path="/posts"
            element={<PrivateRoute Component={PostsList} />}
          />
          <Route path="/cart" element={<PrivateRoute Component={Cart} />} />
        </Routes>
      </AnimatePresence>
    </Provider>
  );
}

export default App;
