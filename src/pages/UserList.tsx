import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import DashboardLayout from "../components/Layouts/DashboardLayout";
import { UserListCall } from "../services/ApiCalls";
import styles from "./styles/UserList.module.scss";
const UserList = () => {
  const [totalPages, setTotalPages] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleUserList = async (skip: number, limit: number) => {
    try {
      const res = await UserListCall(skip, limit);
      console.log("response===>", res);
      setUserList(res.data.users);
      setTotalPages(Math.ceil(res.data.total / res.data.limit));
      if (res.status === 200) {
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handlePagination = (index: number) => {
    let pageNumber = index + 1;
    setActivePage(pageNumber);
  };
  useEffect(() => {
    setLoading(true);
    handleUserList((activePage - 1) * 20, 20);
  }, [activePage]);
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
                userList.length &&
                userList.map((user: any) => (
                  <tr key={user.id}>
                    <td>
                      <div className={styles.userName}>
                        <span className={styles.userImg}>
                          <img src={user.image} alt="" />
                        </span>
                        <span>{`${user.firstName} ${user.lastName}`}</span>
                      </div>
                    </td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.university}</td>
                    <td>
                      <Link
                        to={`/user/post/${user.id}`}
                        // state={{
                        //   userId: user.id,
                        // }}
                      >
                        <button className="btn btn-primary">Check Posts</button>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={100}>
                    <>Loading...</>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
        {!loading ? (
          <ul className={styles.pagination}>
            {[...Array(totalPages)].map((_, index) => (
              <li
                className={index + 1 === activePage ? "active" : ""}
                onClick={() => {
                  handlePagination(index);
                }}
              >
                {index + 1}
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
      </div>
    </DashboardLayout>
  );
};

export default UserList;
