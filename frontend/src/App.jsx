
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";


// Context Providers
import { AuthProvider } from "./context/AuthContext";
import { LanguageProvider } from "./context/LanguageContext";

// Auth Guard
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/signup" element={<AuthPage />} />
            
            {/* Protected Routes */}








            
          </Routes>
        </Router>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;