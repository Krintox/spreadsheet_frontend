import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import SheetData from './components/SheetData';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sheets" element={<SheetData />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
