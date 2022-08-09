import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../components/Header/Header";
import DashboardLayout from "../components/Layouts/DashboardLayout";
import styles from "./styles/Dashboard.module.scss";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className={styles.dashboard}>
        <div className={styles.cardWrapper}>
          <Row>
            <Col md={6}></Col>
          </Row>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
