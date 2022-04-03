import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { getAllQuestions } from '../utils/api';
//@ts-ignore
import { useStore } from '../Store/store';
const MainQuestions = () => {
    const currentUser = useStore((store: any) => store.currentUser);
    const setQuestions = useStore((store: any) => store.setQuestions);
    const questions = useStore((store: any) => store.questions);
    const count = useStore((store: any) => store.count);
    const setCount = useStore((store: any) => store.setCount);
    const navigate = useNavigate();
    useEffect(() => {
        getAllQuestions(0).then((data) => {
            setQuestions(data.questions);
            setCount(data.count.count);
        });
    }, []);

    const numberOfPages = Math.ceil(count / 10); //i was tihnking for a couple of min about how to do it and after i figured it out i wrote the const name and copilot autofilled the solution that took me minutes to figure out
    const createPaginationBtns = useCallback(
        function a() {
            const pageBtns = [];
            for (let i = 1; i <= numberOfPages; i++) {
                pageBtns.push(
                    <button onClick={(e) => {
                        getAllQuestions(i-1).then((data) => {
                        
                            setQuestions(data.questions)
                        })
                    }} className='page_btn'>
                        {i}
                    </button>
                );
            }
            return pageBtns;
        },
        [count]
    );

    return (
        <section className='main_questions main_section'>
            <section className='questions_header'>
                <h2>All Questions</h2>
                <h4>{count} questions</h4>
                {currentUser && (
                    <Link className='ask_btn' to={'/ask-question'}>
                        Ask Question
                    </Link>
                )}
            </section>

            <section className='questions_list'>
                <ul>
                    {questions.map((question: any) => (
                        <li key={question.id} className='single_question_li'>
                            <section className='votes'>
                                <span>{question.upvotes +  question.downvotes} votes</span>
                                <span>{question.nrOfAnswers.count} answers</span>
                                <span>0 views</span>
                            </section>
                            <section className='question_desc'>
                                <h3
                                    onClick={(e) =>
                                        navigate(`/questions/${question.id}`)
                                    }
                                >
                                    {question.title}
                                </h3>
                                <p className='short_desc'>
                                    {' '}
                                    {question.content}
                                </p>
                                <section className='tags_userInfo'>
                                    <ul className='tagList'>
                                        <li className='tag'>{question.tag}</li>
                                    </ul>
                                    <section className='userInfo'>
                                        <span className='user_name'>
                                            {question.username}
                                        </span>
                                    </section>
                                </section>
                            </section>
                        </li>
                    ))}
                </ul>
                <ul className='pagination_btns'>{createPaginationBtns()}</ul>
            </section>
        </section>
    );
};

export default MainQuestions;
