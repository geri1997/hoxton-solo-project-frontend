import React from 'react';
import { Link } from 'react-router-dom';

const RightSidebar = () => {
    return (
        <section className='right_sidebar'>
            <section className='popular_Tags'>
                <h5>POPULAR TAGS</h5>

                <ul>
                    <li>
                        <a href=''>
                            <span></span>
                            React
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <span></span>
                            Javascript
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <span></span>
                            Node.js
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <span></span>
                            Express
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <span></span>
                            MongoDB
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <span></span>
                            Mongoose
                        </a>
                    </li>
                </ul>
            </section>
            <section className='newest_questions'>
                <h5>NEWEST QUESTIONS</h5>
                <ul className='new_questions_ul'>
                    <Link to={''}>
                        <li>
                            Can I light up honey or other non-solid objects with
                            the Light cantrip?
                        </li>
                    </Link><Link to={''}>
                        <li>
                            Can I light up honey or other non-solid objects with
                            the Light cantrip?
                        </li>
                    </Link><Link to={''}>
                        <li>
                            Can I light up honey or other non-solid objects with
                            the Light cantrip?
                        </li>
                    </Link><Link to={''}>
                        <li>
                            Can I light up honey or other non-solid objects with
                            the Light cantrip?
                        </li>
                    </Link><Link to={''}>
                        <li>
                            Can I light up honey or other non-solid objects with
                            the Light cantrip?
                        </li>
                    </Link><Link to={''}>
                        <li>
                            Can I light up honey or other non-solid objects with
                            the Light cantrip?
                        </li>
                    </Link>
                </ul>
            </section>
        </section>
    );
};

export default RightSidebar;
