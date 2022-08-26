import React from "react";
import { FiUsers } from "react-icons/fi";
import { RiShoppingBag3Line } from "react-icons/ri";
import { GoDashboard } from "react-icons/go";
import { BsCartCheck } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./Sidebar.module.scss";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const itemsLength = useSelector((state: any) => state.cart.length);
  return (
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
  );
};
export default Sidebar;
