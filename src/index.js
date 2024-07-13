import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import User from './components/Views/User';
import Tickets from './components/Views/tickets';
import Login from './components/Views/login';
import Caso_crear from './components/Views/Caso_crear';
import reportWebVitals from './reportWebVitals';

const AppContainer = () => {
  const [dataFromChild, setDataFromChild] = useState(null);

  const receiveData = (data) => {
    setDataFromChild(data);
    console.log(data);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App sendData={receiveData} />} />
        <Route path="/User" element={<User />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Tickets" element={<Tickets ticket={dataFromChild} />} />
        <Route path="/Caso_crear" element={<Caso_crear />} />
        {/* Define otras rutas aquí */}
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
