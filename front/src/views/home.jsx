import { useNavigate } from "react-router-dom";
import Home from "../components/Home";

const HomeView = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Home />
        </div>
    )
}

export default  HomeView