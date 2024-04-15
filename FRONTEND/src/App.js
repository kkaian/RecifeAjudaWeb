import React from 'react';
import Login from './pages/Login';
import Registrations from './pages/registrations/Registrations';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrations" element={<Registrations />} />
        </Routes>
      </Router>
    </div>
  );
}



export default App;
