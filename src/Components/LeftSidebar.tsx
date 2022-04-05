import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const LeftSidebar = () => {
    return (
        <section className='left_sidebar'>
            <h5>PUBLIC</h5>
            <ul>
                <NavLink end to={'/questions'}>
                    <li>Questions</li>
                </NavLink>
                <NavLink to={'/discord'}>
                    <li>Discord Questions</li>
                </NavLink>
                <NavLink to={'/tags'}>
                    <li>Tags</li>
                </NavLink>
                {/* <NavLink to={'/users'}>
                    <li>Users</li>
                </NavLink> */}
            </ul>
        </section>
    );
};

export default LeftSidebar;
