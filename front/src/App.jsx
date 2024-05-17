import './App.css'
import { Routes, Route } from "react-router-dom";
import TurnosList from './views/TurnosList'
// @ts-ignore
import Login from './views/Login';
import HomeView from './views/home';
import Navbar from './components/Navbar'
import Register from './views/Register';
import ErrorPage from './views/ErrorPage';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/turnos" element={<TurnosList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
    
    </>
  )

}

export default App;