import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const RegisterComponent = () => {
const navigate = useNavigate();
    const initialValues = {
        name: "",
        email:"",
        birthdate: "",
        nDni: "",
        username: "",
        password: "",
    }

    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (values, { setSubmitting, setErrors }) => {
        axios.post('http://localhost:3000/users/register', values).then((response) => {
          setMessage("Usuario creado con exito, redirigendo...")
          setTimeout(() => {

            setMessage("")
            navigate('/login');
          }, 2000)
        }).catch((e) => {
          setError(e.response.data.error)

            setTimeout(() => {
                setError("")
            }, 5000)
        }).finally(() => {
            setSubmitting(false);
        })
    }
    const validate = (values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Campo requerido";
      }  else if(values.name.length < 3) {
        errors.name = "El nombre debe tener al menos 3 caracteres"
      }
      if (!values.email) {
          errors.email = "Campo requerido";
      } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Correo electrónico incorrecto"
        }
        if (!values.birthdate) {
          errors.birthdate = "Campo requerido";
        } else {
          const birthdate = new Date(values.birthdate);
          const today = new Date();
          today.setHours(0, 0, 0, 0); // Establecer la hora a 00:00:00 para comparar solo la fecha
      
          if (birthdate > today) {
            errors.birthdate = "La fecha de nacimiento no puede ser hoy ni una fecha futura";
          }
        }
      if (!values.nDni) {
          errors.nDni = "Campo requerido";
      } else if(values.nDni.length !== 8) {
        errors.nDni = "DNI incorrecto"
      }
      if (!values.username) {
          errors.username = "Campo requerido";
      } else if(values.username.length < 3) {
        errors.username = "El nombre de usuario debe tener al menos 3 caracteres"
      }
      if (!values.password) {
          errors.password = "Campo requerido";
      } else if(values.password.length < 6) {
        errors.password = "La contraseña debe tener al menos 6 caracteres"
      }
      return errors;
    }

  return (
    <div className="container">
      <div className="form-container">
        <h1>Registra una cuenta</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validate={validate} 
        >
          {({ isSubmitting }) => (
            <Form>
            {error && <div className="error"><p>{error}</p></div>}
            {message && <div className="message"><p>{message}</p></div>}
              <label htmlFor="nombre">Nombre:</label>
              <Field
                type="text"
                name="name"
                id="nombre"
                placeholder="Nombre Completo"
                style={{ color: "black" }}
              />
              <ErrorMessage name="name" component="div" className="error" />

              <label htmlFor="email">Email:</label>
              <Field
                type="text"
                name="email"
                id="email"
                placeholder="Correo Electrónico"
                style={{ color: "black" }}
              />
              <ErrorMessage name="email" component="div" className="error" />

              <label htmlFor="birthdate">Fecha de nacimiento:</label>
              <Field
                type="date"
                name="birthdate"
                id="birthdate"
                placeholder="Fecha de cumpleaños"
                style={{ color: "black" }}
              />
              <ErrorMessage
                name="birthdate"
                component="div"
                className="error"
              />

              <label htmlFor="nDni">Documento (DNI):</label>
              <Field
                type="text"
                name="nDni"
                id="nDni"
                placeholder="Documento (DNI)"
                style={{ color: "black" }}
              />
              <ErrorMessage name="nDni" component="div" className="error" />

              <label htmlFor="username">Username:</label>
              <Field
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                style={{ color: "black" }}
              />
              <ErrorMessage
                name="username"
                component="div"
                className="error"
              />

              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="********"
                style={{ color: "black" }}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error"
              />
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Loading..." : "Register"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}



export default RegisterComponent;