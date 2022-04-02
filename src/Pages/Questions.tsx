import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/questions.css';
import LeftSidebar from '../Components/LeftSidebar';
import MainQuestions from '../Components/MainQuestions';
import RightSidebar from '../Components/RightSidebar';
import { validate } from '../utils/api'; //@ts-ignore
import { useStore } from '../Store/store';

const Questions = () => {
    const setCurrentUser = useStore((store: any) => store.setCurrentUser);
    const navigate = useNavigate();
    useEffect(() => {
        validate().then((data) => {
            if (data.error) return;
            setCurrentUser(data);
        
        });
    }, []);
    return (
        <div className='questions_container'>
            <LeftSidebar />
            <MainQuestions />
            <RightSidebar />
        </div>
    );
};

export default Questions;
