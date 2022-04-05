import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { getAllQuestions } from '../utils/api';
//@ts-ignore
import { useStore } from '../Store/store';
import { MainQSingle } from './MainQSingle';
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

    const numberOfPages = Math.ceil(count / 10); 
    const createPaginationBtns = useCallback(
        function a() {
            const pageBtns = [];
            for (let i = 1; i <= numberOfPages; i++) {
                pageBtns.push(
                    <button key={i} onClick={(e) => {
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
        [numberOfPages]
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
                        <MainQSingle key={question.id} question={question}/>
                    ))}
                </ul>
                <ul className='pagination_btns'>{createPaginationBtns()}</ul>
            </section>
        </section>
    );
};

export default MainQuestions;
