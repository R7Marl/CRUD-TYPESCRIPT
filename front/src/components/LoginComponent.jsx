import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { setUserData } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import "../assets/css/login.css";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
  };
  const [error, setError] = useState("");
  const handleSubmit = (values, { setSubmitting, setErrors }) => {
    axios
      .post("http://localhost:3000/users/login", values)
      .then((response) => {
        dispatch(setUserData([response.data.message.user]))
        navigate("/")
      })
      .catch((e) => {
       setError(e.response.data.error)
        setTimeout(() => {
          setError("")
      }, 5000)
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "Campo requerido";
    }

    if (!values.password) {
      errors.password = "Campo requerido";
    }

    return errors;
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Login</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validate={validate}
        >
          {({ isSubmitting }) => (
            
            <Form>
            {error && <div className="error"><p>{error}</p></div>}
              <div className="field">
                <label htmlFor="username">Username:</label>
                <Field
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  style={{ color: "black"}}
                />
                <ErrorMessage name="username" component="div" className="error" />
              </div>
              <div className="field">
                <label htmlFor="password">Password:</label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="********"
                  style={{ color: "black"}}
                />
                <ErrorMessage name="password" component="div" className="error" />
              </div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Loading..." : "Login"}
              </button>
              <p>¿No estás registrado? <NavLink to="/register">Registrate</NavLink></p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginComponent;