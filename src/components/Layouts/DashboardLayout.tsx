import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./DashboardLayout.module.scss";
import { motion } from "framer-motion";
import { RouteAnimation } from "../../pages/Animations/Animations";
interface Iprops {
  children: React.ReactNode;
}
const DashboardLayout = ({ children }: Iprops) => {
  return (
    <div className={styles.DashboardLayout}>
      {/* <Header /> */}
      <div className={styles.DashboardPage}>
        <div className={styles.DashboardSidebar}>
          <Sidebar />
        </div>

        <motion.div
          className={styles.DashboardBody}
          variants={RouteAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Container>{children}</Container>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardLayout;
