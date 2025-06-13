// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Header from "./Componentes/Header/header"; // Certifique-se que o path está correto
import Home from "./Componentes/Home/home";       // Certifique-se que o path está correto
import MeuForm from "./Componentes/ContactForm/contactForm"; // Certifique-se que o path está correto


function App() {
  return (
    <> {/* Usamos um React Fragment para agrupar o Header e os Routes */}
      <Header/> {/* <--- AGORA O HEADER ESTÁ FORA DO ROUTES */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/MeuForm" element={<MeuForm/>} />
      </Routes>
    </>
  );
}

export default App;