import "./turnosmap.css";
const Turnos = ({ id, fecha, hora, status, user, cancelarTurno }) => {

    return (
                <tr>
                    <td>{fecha}</td>
                    <td>{hora}</td>
                    <td>{status}</td>
                    <td>{user}</td>
                    {status === "Cancelado" ? <>
                        <td>Turno cancelado</td>
                    </> :
                      <td><button onClick={() => cancelarTurno(id)}>Cancelar</button></td>
                    }
    
                </tr>
    )
}

export default Turnos;