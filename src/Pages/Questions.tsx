import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/questions.css';
import LeftSidebar from '../Components/LeftSidebar';
import MainQuestions from '../Components/MainQuestions';
import RightSidebar from '../Components/RightSidebar';

const Questions = () => {
    return (
        <div className='questions_container'>
            <LeftSidebar />
            <MainQuestions />
            <RightSidebar/>
        </div>
    );
};

export default Questions;
