
import React from "react";
import { Routes, Route } from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";


function App() {
  return (
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/signup" element={<AuthPage />} /> 
  );
}

export default App;