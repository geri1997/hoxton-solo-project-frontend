import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import Register from './Pages/Register';
import Questions from './Pages/Questions';
import Tags from './Pages/Tags';
import Users from './Pages/Users';
import Profile from './Pages/Profile';
import Discord from './Pages/Discord';
import SingleQuestion from './Pages/SingleQuestion';
import SingleTag from './Pages/SingleTag';
import AskQuestion from './Pages/AskQuestion';
import DiscordQuestion from './Pages/DiscordQuestion';

function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<LogIn />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/questions' element={<Questions />} />
                    <Route path='/questions/:id' element={<SingleQuestion />} />
                    <Route path='/tags' element={<Tags />} />
                    <Route path='/tags/:id' element={<SingleTag/>} />
                    <Route path='/users' element={<Users />} />
                    <Route path='/ask-question' element={<AskQuestion />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/discord' element={<Discord />} />
                    <Route path='/discord/:id' element={<DiscordQuestion />} />
                    <Route path='*' element={<div>Not found</div>} />
                </Routes>
            </main>
        </>
    );
}

export default App;
