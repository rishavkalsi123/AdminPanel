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
  const animation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };
  return (
    <motion.div
      className={styles.DashboardLayout}
      variants={RouteAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Header />
      <div className={styles.DashboardPage}>
        <div className={styles.DashboardSidebar}>
          <Sidebar />
        </div>

        <div className={styles.DashboardBody}>
          <Container>{children}</Container>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardLayout;
