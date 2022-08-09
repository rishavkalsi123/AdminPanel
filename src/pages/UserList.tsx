import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import DashboardLayout from "../components/Layouts/DashboardLayout";
import { UserListCall } from "../services/ApiCalls";
import styles from "./styles/UserList.module.scss";
const UserList = () => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleUserList = async () => {
    try {
      const res = await UserListCall();
      console.log("response===>", res);
      setResponse(res.data.users);
      if (res.status === 200) {
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleUserList();
  }, []);
  return (
    <DashboardLayout>
      <div className={styles.userListPage}>
        <h1>All Users</h1>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone number</th>
                <th>university</th>
              </tr>
            </thead>
            <tbody>
              {!loading ? (
                response.length &&
                response.map((user: any) => (
                  <tr key={user.id}>
                    <td>{`${user.firstName} ${user.lastName}`}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.university}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="100">
                    <>Loading...</>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserList;
