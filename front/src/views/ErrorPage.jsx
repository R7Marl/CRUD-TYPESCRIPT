import { useEffect, useState } from "react";
import ErrorComponent from "../components/ErrorComponent";
import { useNavigate } from "react-router-dom"; 

const errorPage = () => {   
    const navigate = useNavigate();

    const [ loadTimer, setLoadTimer ] = useState(5);

    useEffect(() => {
    const interval = setInterval(() => {
        setLoadTimer(loadTimer => loadTimer - 1);
    }, 1000)            

    const timeout = setTimeout(() => {
        clearInterval(interval);
        navigate("/");
    }, 5000);

    return () => clearInterval(interval);
    }, [navigate])
    

    return (
        <>
            <ErrorComponent loadTimer1={loadTimer} />
        </>
    )
}

export default errorPage;