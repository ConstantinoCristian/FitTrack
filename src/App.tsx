import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Stats from './pages/Stats';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Login from './pages/Login';
import Protected from './pages/Protected';
import FoodLog from './pages/FoodLog';
import LogWater from './pages/LogWater';
import EditProfile from './pages/EditProfile';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-6">
          <Routes>
            <Route path="/login" element={<Login />} />            
            <Route path="/register" element={<Register />}  />
            <Route path="/stats" element={<Protected Cmp={Stats} />} />
            <Route path="/profile" element={<Protected Cmp={Profile} />} />
            <Route path="/LogFood" element={<Protected Cmp={FoodLog} />} />
            <Route path="/LogWater" element={<Protected Cmp={LogWater} />} />
            <Route path="/EditProfile" element={<Protected Cmp={EditProfile} />} />
            <Route path="/" element={<Dashboard/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;