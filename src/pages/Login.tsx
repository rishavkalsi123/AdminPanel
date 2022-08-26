import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Button, Form, Toast, ToastContainer } from "react-bootstrap";
import { LoginUser } from "../services/Auth";
import { ILogin } from "../interfaces";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);
  const handleFormSubmit = async (values: ILogin) => {
    try {
      const response = await LoginUser(values.username, values.password);
      setShowA(false);
      if (response.status === 200 || response.status === 201) {
        navigate("/");
      }
    } catch (err) {
      setShowA(true);
      setTimeout(() => {
        setShowA(false);
      }, 5000);
    }
  };
  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });
  return (
    <>
      <div className="loginPage">
        <div className="login_inner">
          <h1>Login</h1>
          <Formik
            validationSchema={schema}
            onSubmit={(values: ILogin) => {
              handleFormSubmit(values);
            }}
            initialValues={{
              username: "",
              password: "",
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
              setFieldValue,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter email"
                    value={values.username}
                    name="username"
                    onChange={handleChange}
                    isInvalid={!!errors.username && touched.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    Enter valid email
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password && touched.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    Enter password
                  </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
          <ToastContainer className="p-3" position="top-end">
            <Toast show={showA} onClose={toggleShowA}>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Error</strong>
              </Toast.Header>
              <Toast.Body>Please enter validate Username</Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
      </div>
    </>
  );
};
export default Login;
