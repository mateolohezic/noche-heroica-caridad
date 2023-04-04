import React from 'react'
import { Route, Routes } from "react-router-dom";
import './app.css';
import Guia from './Pages/Guia/Guia';
import Header from './Pages/Header/Header';
import Horarios from './Pages/Horarios/Horarios';
import Inicio from './Pages/Inicio/Inicio';

function App() {

  return (
  <>
    <Header/>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/Horarios" element={<Horarios />} />
      <Route path="/Guia" element={<Guia />} />
    </Routes>
  </>
  )
}

export default App
