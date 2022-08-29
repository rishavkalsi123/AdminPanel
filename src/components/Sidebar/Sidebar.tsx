import React, { useEffect, useState } from "react";
import { FiUsers } from "react-icons/fi";
import { RiLogoutCircleRLine, RiShoppingBag3Line } from "react-icons/ri";
import { GoDashboard } from "react-icons/go";
import { BsCartCheck } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./Sidebar.module.scss";
import { useSelector } from "react-redux";
import { getLoginUser } from "../../utils/common";
const Sidebar = () => {
  const [loginUser, setLoginUser] = useState({});
  const navigate = useNavigate();
  const itemsLength = useSelector((state: any) => state.cart.length);
  const handleLogout = () => {
    localStorage.removeItem("local");
    navigate("/login");
  };
  useEffect(() => {
    setLoginUser(getLoginUser());
  }, []);
  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.sidebarList}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} height="60" alt="logo" />
            <span>RK Panel</span>
          </Link>
        </div>
        <ul>
          <NavLink to="/">
            <li>
              <GoDashboard />
              Dashboard
            </li>
          </NavLink>
          <NavLink to="/user">
            <li>
              <FiUsers />
              Users
            </li>
          </NavLink>
          <NavLink to="/product">
            <li>
              <RiShoppingBag3Line />
              Products
            </li>
          </NavLink>
          <NavLink to="/posts">
            <li>
              <MdOutlineMessage />
              Posts
            </li>
          </NavLink>
          <NavLink to="/cart">
            <li>
              <BsCartCheck />
              Cart Items ({itemsLength})
            </li>
          </NavLink>
        </ul>
      </div>
      <div className={styles.sidebarList}>
        <ul>
          <li>
            <div className={styles.userPofile}>
              <img src={loginUser.image} alt="" />
              <span>{`${loginUser.firstName} ${loginUser.lastName}`}</span>
            </div>
          </li>
          <li onClick={handleLogout}>
            <RiLogoutCircleRLine />
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
function token(token: any): any {
  throw new Error("Function not implemented.");
}
