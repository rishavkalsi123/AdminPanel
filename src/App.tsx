import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import ProductList from "./pages/ProductList";
import UserList from "./pages/UserList";
import UserPost from "./pages/UserPost";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/user/post/:id" element={<UserPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
