import React, { useEffect, useState } from "react";
import axios from "axios";
import Turnos from "../components/Turnos/Turnos";
import AddTurns from "../components/addTurns/AddTurns";
import "../assets/css/turns.styles.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserTurns } from "../redux/userSlice";
const TurnosList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.users.userData);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const turnos = useSelector(state => state.users.turns);


  const getData = () => {
    axios.get("http://localhost:3000/appointments/"+user?.[0]?.id).then((data)=> {
      dispatch(setUserTurns(data.data));
      setLoading(false);
    }).catch((error) => {
      setError(error);
      setLoading(false);
    })
  }
  useEffect(() => {
    if(!user) return navigate("/login");
    getData();
  }, []);


  const cancelarTurno = (id) => {
    console.log(id);
    axios.put("http://localhost:3000/appointments/cancel/" + id).then((data) => {
      dispatch(setUserTurns(data.data));
  } ).catch((error) => {
    setError(error);
  })
}
  return (
    <>
      <h1>Turnos</h1>
      {loading ? <p>Loading...</p> :
        error ? <p>{error.message}</p> :
          turnos.length < 1 ? <div className="addturns"> <p>No hay turnos, añade uno!</p>
          <button id="add-turns-button" onClick={() => setShowModal(true) }>Añadir</button>
          {showModal && <AddTurns setShowModal={setShowModal} getData={getData}/>}
        </div> :
        <div className="body">
          <table className="turnlist">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Estado</th>
                <th>User ID</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {turnos.map((turno) => (
                <Turnos
                  key={turno.id}
                  id={turno.id}
                  fecha={turno.fecha}
                  hora={turno.hora}
                  status={turno.status}
                  user={turno.user}
                  cancelarTurno={cancelarTurno}
                />
              ))
              }
            </tbody>
          </table>
          <div className="addturns">
            <button id="add-turns-button" onClick={() => setShowModal(true) }>Añadir</button>
          </div>
          {showModal && <AddTurns setShowModal={setShowModal} getData={getData}/>}
        </div>
      }
    </>
  );
};

export default TurnosList;