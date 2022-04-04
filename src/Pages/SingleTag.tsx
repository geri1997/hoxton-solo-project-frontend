import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import LeftSidebar from '../Components/LeftSidebar';
import MainQuestions from '../Components/MainQuestions';
import RightSidebar from '../Components/RightSidebar';
import { getQuestionsByTag } from '../utils/api'; //@ts-ignore
import { useStore } from '../Store/store';

const SingleTag = () => {
    const params = useParams();
   const [questions, setQuestions] = useState<any>([])
    const currentUser = useStore((store: any) => store.currentUser);
    const navigate = useNavigate();
    const [count, setCount] = useState<any>(0);

    useEffect(() => {
        getQuestionsByTag(params.id!).then((data) => {
            console.log(data);
            setQuestions(data.questions);
            setCount(data.count.count);
        });
    }, []);
    if(questions.length===0)return null

    return (
        <div className='questions_container'>
            <LeftSidebar />
            <section className='main_questions main_section'>
                <section className='questions_header'>
                    {console.log(questions[0])}
                    <h2>Questions tagged with {questions[0].tag}</h2>
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
                            <li
                                key={question.id}
                                className='single_question_li'
                            >
                                <section className='votes'>
                                    <span>
                                        {question.upvotes + question.downvotes}{' '}
                                        votes
                                    </span>
                                    <span>
                                        {question.nrOfAnswers.count} answers
                                    </span>
                                    <span>0 views</span>
                                </section>
                                <section className='question_desc'>
                                    <h3
                                        onClick={(e) =>
                                            navigate(
                                                `/questions/${question.id}`
                                            )
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
                                            <li className='tag'>
                                                <Link to={'/tags'}>{question.tag}</Link>
                                            </li>
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
                </section>
            </section>
            <RightSidebar />
        </div>
    );
};

export default SingleTag;
