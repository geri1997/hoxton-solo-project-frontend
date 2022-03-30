import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';

function App() {

    return (
        <>
            <Header />
            <main>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<div>About</div>} />
                <Route path="/contact" element={<div>Contact</div>} />

            </Routes>
            </main>
        </>
    );
}

export default App;
