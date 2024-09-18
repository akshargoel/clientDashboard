import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClientDashboard from './components/ClientDashboard';
import AddClientForm from './components/AddClientForm';
// import './App.css';  // Optional: Import global CSS if 

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<ClientDashboard />} />
                    <Route path="/add-client" element={<AddClientForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
