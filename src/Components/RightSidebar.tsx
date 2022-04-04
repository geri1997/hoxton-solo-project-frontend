import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllQuestions, getPopularTags } from '../utils/api';
//@ts-ignore
import { useStore } from '../Store/store';
import PopularTags from './PopularTags';
import LatestQuestions from './LatestQuestions';

const RightSidebar = () => {
    
   

    return (
        <section className='right_sidebar'>
            <PopularTags/>
            <LatestQuestions/>
        </section>
    );
};

export default RightSidebar;
