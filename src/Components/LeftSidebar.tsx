import React from 'react';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
    return (
        <section className='left_sidebar'>
            <h5>PUBLIC</h5>
            <ul>
                <Link to={'/questions'}>
                    <li
                        className={
                            document.URL.endsWith('questions') ? 'selected' : ''
                        }
                    >
                        Questions
                    </li>
                </Link>
                <Link to={'/discord'}>
                    <li
                        className={
                            document.URL.endsWith('discord') ? 'selected' : ''
                        }
                    >
                        Discord Questions
                    </li>
                </Link>
                <Link to={'/tags'}>
                    <li
                        className={
                            document.URL.endsWith('tags') ? 'selected' : ''
                        }
                    >
                        Tags
                    </li>
                </Link>
                <Link to={'/users'}>
                    <li
                        className={
                            document.URL.endsWith('users') ? 'selected' : ''
                        }
                    >
                        Users
                    </li>
                </Link>
            </ul>
        </section>
    );
};

export default LeftSidebar;
