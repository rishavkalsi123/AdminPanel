import React from "react";
import { ImUsers } from "react-icons/im";
import { BsFillHandbagFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebarList}>
      <ul>
        <Link to="/user">
          <li>
            <ImUsers />
            Users
          </li>
        </Link>
        <Link to="/product">
          <li>
            <BsFillHandbagFill />
            Products
          </li>
        </Link>
      </ul>
    </div>
  );
};
export default Sidebar;
