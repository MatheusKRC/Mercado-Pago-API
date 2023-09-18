import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './CSS/App.css';
import Home from './Pages/Home';
import Plans from './Pages/Plans';

// const api = axios.create({
//   baseURL: "https://api.mercadopago.com"
// });

function App() {
  return (
    <div>
      <Routes>

        <Route exact path="/" Component={Home} />
        <Route exact path="/plans" Component={Plans} />

      </Routes>
    </div>
  );
}

export default App;
