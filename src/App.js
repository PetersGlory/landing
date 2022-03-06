
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './pages/landing-page';
import { LoginPage } from './pages/Login-page';




function App() {
  return (
      <Router>
          <Routes>
               <Route exact path="/" element={<LandingPage/>} />
               <Route exact path="/login" element={<LoginPage/>} />
          </Routes>
      </Router>
  );
}

export default App;