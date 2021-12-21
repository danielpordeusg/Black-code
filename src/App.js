import React from 'react';
import {Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './pages/Login';
import TelaPrincipal from './pages/TelaPrincipal';
import Perfil from './pages/Perfil';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/telaprincipal" element={<TelaPrincipal />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
