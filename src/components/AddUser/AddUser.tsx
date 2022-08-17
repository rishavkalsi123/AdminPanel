import { Formik } from "formik";
import * as yup from "yup";
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Form, ToggleButton } from "react-bootstrap";
import styles from "./AddUser.module.scss";
import { IUser } from "../../interfaces";

interface IProps {
  userEdit: IUser;
  updateUserList: (updatedUser: IUser) => void;
}
const AddUserForm = ({ userEdit, updateUserList }: IProps) => {
  const [radioValue, setRadioValue] = useState(userEdit ? userEdit.gender : "");
  const [userChanges, setUserChanges] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    age: 0,
    department: "0",
    birth: "",
    address: "",
    gender: "",
  });
  // const submitForm = () => {
  //   handleUpdate(userEdit);
  // };
  const phoneRegx = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup
      .string()
      .min(6, "Minimum 6 char")
      .max(16, "Maximum 16 char")
      .matches(phoneRegx, "Phone number is not valid")
      .required(),
    university: yup.string().required(),
    age: yup
      .string()
      .min(1, "Minimum 1 char")
      .max(3, "Maximum 3 char")
      .required(),
    department: yup.string().ensure().required(),
    birth: yup.string().required(),
    address: yup.string().ensure().required(),
    gender: yup.string().ensure().required(),
  });
  const Gender = [
    { name: "Male", value: "male" },
    { name: "Female", value: "female" },
    { name: "Other", value: "other" },
  ];
  useEffect(() => {
    if (userEdit) {
      setUserChanges((prev) => ({
        ...prev,
        name: `${userEdit?.firstName} ${userEdit?.lastName}`,
        email: userEdit?.email,
        phone: userEdit?.phone,
        university: userEdit?.university,
        age: userEdit?.age,
        department: "0",
        birth: userEdit?.birthDate,
        address: userEdit?.address.address,
        gender: userEdit?.gender,
      }));
    }
  }, [userEdit]);
  return (
    <div>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          updateUserList(values);
        }}
        initialValues={userChanges}
        enableReinitialize
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={values.name}
                onChange={handleChange}
                isInvalid={!!errors.name && touched.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email && touched.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Phone number"
                name="phone"
                value={values.phone}
                minLength={9}
                maxLength={12}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.phone && touched.phone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>University</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter university"
                name="university"
                value={values.university}
                onChange={handleChange}
                isInvalid={!!errors.university && touched.university}
              />
              <Form.Control.Feedback type="invalid">
                {errors.university}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={values.age}
                onChange={handleChange}
                isInvalid={!!errors.age && touched.age}
                placeholder="Write age"
              />
              <Form.Control.Feedback type="invalid">
                {errors.age}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <div>
                <ButtonGroup>
                  {Gender.map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`radio-${idx}`}
                      type="radio"
                      variant="outline-primary"
                      name="gender"
                      value={radio.value}
                      checked={radioValue === radio.value}
                      onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Birth Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter university"
                name="birth"
                value={values.birth}
                onChange={handleChange}
                isInvalid={!!errors.birth && touched.birth}
              />
              <Form.Control.Feedback type="invalid">
                {errors.birth}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Blood Group</Form.Label>
              <Form.Select
                name="department"
                onChange={handleChange}
                value={values.department}
                isInvalid={!!errors.department && touched.department}
              >
                <option value="1">A-</option>
                <option value="2">A+</option>
                <option value="3">B-</option>
                <option value="4">B+</option>
                <option value="5">AB-</option>
                <option value="6">AB+</option>
                <option value="7">O-</option>
                <option value="8">O+</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.department}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                name="address"
                value={values.address}
                onChange={handleChange}
                isInvalid={!!errors.address && touched.address}
                aria-label="Write Address"
              />
              <Form.Control.Feedback type="invalid">
                {errors.address}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddUserForm;
