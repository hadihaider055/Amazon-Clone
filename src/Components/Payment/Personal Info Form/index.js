import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.css";
import Button from "@material-ui/core/Button";
import { StateContext } from "../../../Global State/StateProvider";

const PersonalInfoForm = ({ handleNext }) => {
  const [ShippingState, setShippingContext] = useContext(StateContext);

  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("First Name must be filled!"),

        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Second Name must be filled!"),

        email: Yup.string()
          .email("Invalid email address")
          .required("Email field must be filled!"),
      })}
      onSubmit={(values) => {
        setTimeout(() => {
          setShippingContext(values);

          handleNext();
        }, 400);
      }}
    >
      {({ errors, touched }) => (
        <div className="checkout-parent ">
          <div className="checkout-container">
            <h2>Personal Info</h2>
            <Form className="checkout-form">
              <label htmlFor="firstName">First Name </label>
              <Field name="firstName" type="text" />
              <ErrorMessage name="firstName">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <br />
              <label htmlFor="lastName">Last Name </label>
              <Field name="lastName" type="text" />
              <ErrorMessage name="lastName">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <br />
              <label htmlFor="email">Email </label>
              <Field name="email" type="text" />
              <ErrorMessage name="email">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <br />
              <Button
                variant="contained"
                className="checkout-btn"
                style={{ width: "100%" }}
                type="submit"
                color="primary"
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default PersonalInfoForm;
