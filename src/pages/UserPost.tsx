import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../components/Layouts/DashboardLayout";
import { SingleUserListCall } from "../services/ApiCalls";
import styles from "./styles/UserList.module.scss";
const UserPost = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<any>([]);
  const { id } = useParams();
  const userID = id;
  const handleSingleUserData = async (id: number) => {
    try {
      const res = await SingleUserListCall(id);
      console.log("response===>", res);
      setUserData(res.data);
      if (res.status === 200) {
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleSingleUserData(Number(userID));
  }, []);
  return (
    <DashboardLayout>
      <div className={styles.userListPage}>
        <h1>
          Hi {userData.firstName} {userData.lastName}
        </h1>
        {}
      </div>
    </DashboardLayout>
  );
};

export default UserPost;
