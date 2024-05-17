import '../assets/css/navbar.styles.css';
import { useNavigate, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData, setUserTurns } from '../redux/userSlice';
const Navbar = () => {
    const userData = useSelector(state => state.users.userData);
    const dispath = useDispatch();

    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("state");
        localStorage.clear();
        dispath(setUserData(null));
        dispath(setUserTurns([]));
        navigate("/")
    }

    return (
        <nav className="navbar">
            <div className="navbar-center">
                    <ul>
                        <li>
                            <button onClick={() => navigate("/")} style={{color: "white"}}>Inicio</button>
                        </li>
                        <li>
                            <button onClick={() => navigate("/turnos")} style={{color: "white"}}>Mis turnos</button>
                        </li>
                        <li>
                            <button onClick={() => navigate("/login")} style={{color: "white"}}>Login</button>
                        </li>
                        <li>
                            <button onClick={() => navigate("/register")} style={{color: "white"}}>Registrar</button>
                        </li>
                        {userData ?
                        <li>
                            <button onClick={logout} style={{color: "white"}}>Logout</button>
                        </li>
    : null}
                    </ul>
            </div>
        </nav>
    )
}

export default Navbar;