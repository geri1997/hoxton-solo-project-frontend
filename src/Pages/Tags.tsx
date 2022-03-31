import React from 'react';
import LeftSidebar from '../Components/LeftSidebar';
import RightSidebar from '../Components/RightSidebar';
import '../assets/tags.css';

const Tags = () => {
    return (
        <div className='questions_container'>
            <LeftSidebar />
            <section className='main_section main_tags'>
                <section className='tags_header'>
                    <h2>Tags</h2>
                    <p>
                        A tag is a keyword or label that categorizes your
                        question with other, similar questions. Using the right
                        tags makes it easier for others to find and answer your
                        question.
                    </p>
                    <input type='search' placeholder='Filter by tag name' />
                </section>

                <section className='main_tags_list'>
                    <ul className='main_tags_ul'>
                        <li className='single_tag'>
                            <h4> TagName</h4>
                            <p>
                                For questions regarding programming in
                                ECMAScript (JavaScript/JS) and its various
                                dialects/implementations (excluding
                                ActionScript).
                            </p>
                        </li>
                        <li className='single_tag'>
                            <h4> TagName</h4>
                            <p>
                                For questions regarding programming in
                                ECMAScript (JavaScript/JS) and its various
                                dialects/implementations (excluding
                                ActionScript).
                            </p>
                        </li>
                        <li className='single_tag'>
                            <h4> TagName</h4>
                            <p>
                                For questions regarding programming in
                                ECMAScript (JavaScript/JS) and its various
                                dialects/implementations (excluding
                                ActionScript).
                            </p>
                        </li>
                        <li className='single_tag'>
                            <h4> TagName</h4>
                            <p>
                                For questions regarding programming in
                                ECMAScript (JavaScript/JS) and its various
                                dialects/implementations (excluding
                                ActionScript).
                            </p>
                        </li>
                        <li className='single_tag'>
                            <h4> TagName</h4>
                            <p>
                                For questions regarding programming in
                                ECMAScript (JavaScript/JS) and its various
                                dialects/implementations (excluding
                                ActionScript).
                            </p>
                        </li>
                        <li className='single_tag'>
                            <h4> TagName</h4>
                            <p>
                                For questions regarding programming in
                                ECMAScript (JavaScript/JS) and its various
                                dialects/implementations (excluding
                                ActionScript).
                            </p>
                        </li>
                        <li className='single_tag'>
                            <h4> TagName</h4>
                            <p>
                                For questions regarding programming in
                                ECMAScript (JavaScript/JS) and its various
                                dialects/implementations (excluding
                                ActionScript).
                            </p>
                        </li>
                        <li className='single_tag'>
                            <h4> TagName</h4>
                            <p>
                                For questions regarding programming in
                                ECMAScript (JavaScript/JS) and its various
                                dialects/implementations (excluding
                                ActionScript).
                            </p>
                        </li>
                        <li className='single_tag'>
                            <h4> TagName</h4>
                            <p>
                                For questions regarding programming in
                                ECMAScript (JavaScript/JS) and its various
                                dialects/implementations (excluding
                                ActionScript).
                            </p>
                        </li>
                    </ul>
                </section>
            </section>
            <RightSidebar />
        </div>
    );
};

export default Tags;
