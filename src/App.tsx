import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import Register from './Pages/Register';

function App() {

    return (
        <>
            <Header />
            <main>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/register" element={<Register />} />
                <Route path="/contact" element={<div>Contact</div>} />

            </Routes>
            </main>
        </>
    );
}

export default App;
