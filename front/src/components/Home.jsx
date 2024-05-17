import "../assets/css/home.styles.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.users.userData);
  console.log(user)
  const [isLogged, setIsLogged] = useState(null);
  useEffect(() => {
    if(!user) {
      setIsLogged(false);
    } else {
      setIsLogged(true);
    }
  }, [user]);
  return (
    <div className="banner">
      <div className="conteiner">
        <div className="main-title">Gimnasio Buenos Aires</div>
        <div className="main-subtitle">¡Inscribete en nuestras clases gratis!</div>
        <div className="main-button">
          {isLogged ? <button onClick={() => navigate("/turnos")}>Mis turnos</button> : <button onClick={() => navigate("/login")}>Inicia sesión</button>}
        </div>
      </div>
    </div>
  );
};

export default Home;