import React from "react";

import { Formik, ErrorMessage } from "formik";

const BasicForm = () => {
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </div>
            <ErrorMessage name="email" component="div" />
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </div>
            {/* {errors.email && touched.email && errors.email} */}

            {/* {errors.password && touched.password && errors.password} */}
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default BasicForm;
