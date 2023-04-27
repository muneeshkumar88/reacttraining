import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Signup = () => {
  return (
    <>
      <h1>React Js Formik Signup Form</h1>
      <Formik
        initialValues={{ fullname: "", email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.fullname) {
            errors.fullname = "Full name is Required";
          }

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Password is Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            //alert(JSON.stringify(values, null, 2));
            console.log(values);
            //setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field
                type="text"
                name="fullname"
                placeholder="Enter your fullname"
              />
              <ErrorMessage name="fullname" component="div" />
            </div>
            <div>
              <Field
                type="email"
                name="email"
                placeholder="Enter email address"
              />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <Field
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Signup;
