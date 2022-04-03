import React, { useEffect } from 'react';
import LeftSidebar from '../Components/LeftSidebar';
import RightSidebar from '../Components/RightSidebar';
import '../assets/tags.css';
//@ts-ignore
import { useStore } from '../Store/store';
import { useNavigate } from 'react-router-dom';
import { getTags, validate } from '../utils/api';
import MainTags from '../Components/MainTags';

const Tags = () => {
    const setTags = useStore((store: any) => store.setTags);
    const setCurrentUser = useStore((store: any) => store.setCurrentUser);
    const navigate = useNavigate();
    useEffect(() => {
        validate().then((data) => {
            if (data.error) return;
            setCurrentUser(data);
        });
    }, []);
    useEffect(() => {
        getTags().then(setTags);
    }, []);

    return (
        <div className='questions_container'>
            <LeftSidebar />
            <MainTags />
            <RightSidebar />
        </div>
    );
};

export default Tags;
