import React from 'react';
import { Link } from 'react-router-dom';

const MainQuestions = () => {
    return (
        <section className='main_questions main_section'>
            <section className='questions_header'>
                <h2>All Questions</h2>
                <h4>Nr of questions</h4>
                <Link className='ask_btn' to={'/ask-question'}>
                    Ask Question
                </Link>
            </section>

            <section className='questions_list'>
                <ul>
                    <li className='single_question_li'>
                        <section className='votes'>
                            <span>0 votes</span>
                            <span>0 answers</span>
                            <span>0 views</span>
                        </section>
                        <section className='question_desc'>
                            <h3>Random text question</h3>
                            <p className='short_desc'>
                                {' '}
                                This is a shirt description
                            </p>
                            <section className='tags_userInfo'>
                                <ul className='tagList'>
                                    <li className='tag'>Javascript</li>
                                    <li>React</li>
                                </ul>
                                <section className='userInfo'>
                                    <span className='user_name'>Geri luga</span>
                                </section>
                            </section>
                        </section>
                    </li>
                </ul>
            </section>
        </section>
    );
};

export default MainQuestions;
