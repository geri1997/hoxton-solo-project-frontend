import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import LeftSidebar from '../Components/LeftSidebar';
import RightSidebar from '../Components/RightSidebar';
import '../assets/single_question.css';
import '../assets/questions.css';
//@ts-ignore
import { useStore } from '../Store/store';
import { getSingleQuestion, validate } from '../utils/api';

const SingleQuestion = () => {
    const setCurrentQuestion = useStore((store: any) => store.setCurrentQuestion);
    const currentQuestion = useStore((store: any) => store.currentQuestion);
    const params = useParams();
    useEffect(() => {
        getSingleQuestion(+params.id!).then((data) => {
            if (data.error) return;
            setCurrentQuestion(data);
        })
    }, []);
    const currentUser = useStore((store: any) => store.currentUser);
    const setCurrentUser = useStore((store: any) => store.setCurrentUser);
    const navigate = useNavigate();
    useEffect(() => {
        validate().then((data) => {
            if (data.error) return;
            setCurrentUser(data);
        });
    }, []);
    if(!currentQuestion) return null;

    return (
        <div className='questions_container'>
            <LeftSidebar />
            <section className='single_question'>
                <section className='question_header'>
                    <h2>{currentQuestion.title}</h2>

                    {currentUser && (
                        <Link
                            style={{ alignSelf: 'baseline' }}
                            className='ask_btn'
                            to={'/ask-question'}
                        >
                            Ask Question
                        </Link>
                    )}
                </section>
                <section className='question_content'>
                    <p>{currentQuestion.content}</p>
                    <ul>
                        <li className='tag'>Javascript</li>
                    </ul>
                </section>
                <section className='answers'>
                    <ul>
                        <li></li>
                    </ul>
                </section>
            </section>
            <RightSidebar />
        </div>
    );
};

export default SingleQuestion;
