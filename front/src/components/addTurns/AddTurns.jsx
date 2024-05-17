import "./addturns.css"
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const AddTurns = ({setShowModal, getData}) => {
    const navigate = useNavigate();
    const userId = useSelector((state) => state.users.userData[0].id);
    if(userId === "") return navigate("/login");
    const [error, setError] = useState("");
    const initialValues = {
        fecha: "",
        hora: "",
        estado: "",
        userId: "",
    }

    const validate = (values) => {
        const errors = {};
        if(!values.date) {
            errors.date = "Campo requerido";
        }
        if(!values.hora) {
            errors.hora = "Campo requerido";
        }
    }
    const handleSubmit = (values, { setSubmitting, setErrors }) => {
      console.log(userId);
        const data = {...values, userId }
        axios.post('http://localhost:3000/appointments/create', data).then((response) => {         
            console.log(response);
        }).catch((e) => {
            console.log(e);
            if (e.response) {
                setError(e.response.data);
            } else if (e.message) {
                setError(e.message);
            }
        }).finally(() => {
            setSubmitting(false);
            setShowModal(false);
            getData();
        })
    }
    return (

        <div className="model-container">
            <div className="model">
                <h1 style={{color: "black"}}>Turnos</h1>
                <div className="model-description">
                    <p style={{color: "black"}}>Agrega un nuevo turno para Pilates</p>
                    {error && <div className="error">{error.message}</div>}
                    <Formik
  initialValues={initialValues}
  onSubmit={handleSubmit}
  validate={validate}
>
  {({ errors, touched }) => (
    <Form>
      <div className="field">
        <label htmlFor="date">Fecha:</label>
        <Field
          type="date"
          name="fecha"
          id="date"
          style={{color: "black"}}
        />
        {errors.date && touched.date && <div className="error">{errors.date}</div>}
      </div>
      <div className="field">
        <label htmlFor="hora">Hora:</label>
        <Field
          type="time"
          name="hora"
          id="hora"
        style={{color: "black"}}
        />
        {errors.hora && touched.hora && <div className="error">{errors.hora}</div>}
      </div>
      <button type="submit">Agregar Turno</button>
      <button type="button" onClick={() => setShowModal(false)}>Cerrar</button>
    </Form>
  )}
</Formik>
                </div>
            </div>
        </div>
    )
}

export default AddTurns;