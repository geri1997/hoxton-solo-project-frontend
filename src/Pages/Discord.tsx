import React from 'react';
import DiscordQuestions from '../Components/DiscordQuestions';
import LeftSidebar from '../Components/LeftSidebar';
import MainQuestions from '../Components/MainQuestions';
import RightSidebar from '../Components/RightSidebar';

const Discord = () => {
    return (
        <div className='questions_container'>
            <LeftSidebar />
            <DiscordQuestions/>
            <RightSidebar />
        </div>
    );
};

export default Discord;
