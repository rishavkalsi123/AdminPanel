import React from "react";
import { ImUsers } from "react-icons/im";
import { BsFillHandbagFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebarList}>
      <ul>
        <li>
          <ImUsers />
          Users
        </li>
        <li>
          <BsFillHandbagFill />
          Products
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
