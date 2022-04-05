import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import LeftSidebar from '../Components/LeftSidebar';
import RightSidebar from '../Components/RightSidebar';
import '../assets/single_question.css';
import '../assets/questions.css';
//@ts-ignore
import { useStore } from '../Store/store';
import {
    checkIfLikedCommnent,
    createComment,
    dislikeComment,
    dislikeQuestion,
    getSingleQuestion,
    likeComment,
    likeQuestion,
    validate,
} from '../utils/api';
import Question from '../Components/Question';

const SingleQuestion = () => {
    const [currentQuestion, setCurrentQuestion] = useState<any>(null);
    const params = useParams();
    useEffect(() => {
        getSingleQuestion(+params.id!).then((data) => {
            if (data.error) return;
            setCurrentQuestion(data);
        });
    }, [params.id]);
    const currentUser = useStore((store: any) => store.currentUser);
    const setCurrentUser = useStore((store: any) => store.setCurrentUser);
    const navigate = useNavigate();

    currentQuestion && currentQuestion.content.replaceAll('\n', '<br>');

    useEffect(() => {
        validate().then((data) => {
            if (data.error) return;
            setCurrentUser(data);
        });
    }, []);
    if (!currentQuestion) return null;

    function handleSubmit(e: any) {
        e.preventDefault();
        const content = e.target.content.value;
        const date = new Date().toISOString();
        createComment(currentUser.id, currentQuestion.id, content, date).then(
            (data) => {
                if (data.error) return;
                setCurrentQuestion({
                    ...currentQuestion,
                    comments: [...currentQuestion.comments, data],
                });
            }
        );
        e.target.reset();
    }

    function upvoteComment(e: any, commentId: number) {
        likeComment(commentId).then((data) => {
            if (data.error) return;
            const question = JSON.parse(JSON.stringify(currentQuestion));
            const comment = question.comments.find(
                (comment: any) => comment.id === commentId
            );

            comment.upvotes = data.upvotes;
            comment.downvotes = data.downvotes;
            comment.isLiked = data.isLiked;
            comment.isDisliked = data.isDisliked;
            setCurrentQuestion({
                ...currentQuestion,
                comments: [...question.comments],
            });
            // checkIfLikedCommnent(comment.id).then((data) => {
            //     console.log(data);
            //     if (data.error) return;
            //     setlikedComments([...likedComments, data]);
            // });
        });
        //fill with red
        // e.target.style.fill = 'red';
    }

    function downvoteComment(e: any, commentId: number) {
        dislikeComment(commentId).then((data) => {
            if (data.error) return;
            const question = JSON.parse(JSON.stringify(currentQuestion));
            const comment = question.comments.find(
                (comment: any) => comment.id === commentId
            );

            comment.upvotes = data.upvotes;
            comment.downvotes = data.downvotes;
            comment.isDisliked = data.isDisliked;
            comment.isLiked = data.isLiked;
            setCurrentQuestion({
                ...currentQuestion,
                comments: [...question.comments],
            });
            // checkIfLikedCommnent(comment.id).then((data) => {
            //     console.log(data);
            //     if (data.error) return;
            //     setlikedComments([...likedComments, data]);
            // });
        });
        //fill with red
        // e.target.style.fill = 'red';
    }

    function upvoteQuestion(e: any, questionId: number) {
        likeQuestion(questionId).then((data) => {
            if (data.error) return;
            const question = JSON.parse(JSON.stringify(currentQuestion));
            question.upvotes = data.upvotes;
            question.downvotes = data.downvotes;
            question.isLiked = data.isLiked;
            question.isDisliked = data.isDisliked;
            setCurrentQuestion(question);
        });
    }

    function downvoteQuestion(e: any, questionId: number) {
        dislikeQuestion(questionId).then((data) => {
            if (data.error) return;
            const question = JSON.parse(JSON.stringify(currentQuestion));
            question.upvotes = data.upvotes;
            question.downvotes = data.downvotes;
            question.isDisliked = data.isDisliked;
            question.isLiked = data.isLiked;
            setCurrentQuestion(question);
        });
    }

    return (
        <div className='questions_container single'>
            <LeftSidebar />
            <section className='single_question'>
                <section className='question_header'>
                    <h2 className='single_title'>{currentQuestion.title}</h2>

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
                    <section className='singleQuestion_vote'>
                        <svg
                        onClick={e=>currentUser&&upvoteQuestion(e,currentQuestion.id)}
                            fill={currentQuestion.isLiked?'red':'gray'}
                            aria-hidden='true'
                            className='svg-icon iconArrowUpLg'
                            width='36'
                            height='36'
                            viewBox='0 0 36 36'
                        >
                            <path d='M2 25h32L18 9 2 25Z'></path>
                        </svg>
                        <span className='vote_nr'>
                            {currentQuestion.upvotes -
                                currentQuestion.downvotes}
                        </span>
                        <svg
                        onClick={e=>currentUser&&downvoteQuestion(e,currentQuestion.id)}
                            fill={currentQuestion.isDisliked?'red':'gray'}
                            aria-hidden='true'
                            className='svg-icon iconArrowDownLg'
                            width='36'
                            height='36'
                            viewBox='0 0 36 36'
                        >
                            <path d='M2 11h32L18 27 2 11Z'></path>
                        </svg>
                    </section>
                    <section className='main_question'>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: currentQuestion.content,
                            }}
                        ></p>
                        <section className='single_question_info'>
                            <ul>
                                <Link
                                    style={{
                                        textDecoration: 'none',
                                    }}
                                    to={'/tags/' + currentQuestion.tagId}
                                >
                                    <li className='tag'>
                                        {currentQuestion.tag}
                                    </li>
                                </Link>
                            </ul>
                            <span className='time_of_post'>
                                {new Date(
                                    currentQuestion.createdAt
                                ).toLocaleDateString()}
                            </span>
                            <span className='single_question_author_name'>
                                {currentQuestion.username}
                            </span>
                        </section>
                    </section>
                </section>
                <section className='answers'>
                    <h4>{currentQuestion.comments.length} answers</h4>
                    <ul>
                        {currentQuestion.comments.map((comment: any) => (
                            <li key={comment.id} className='answer'>
                                <section className='singleQuestion_vote'>
                                    <svg
                                        onClick={(e) => {
                                            upvoteComment(e, comment.id);
                                        }}
                                        fill={comment.isLiked ? 'red' : 'gray'}
                                        aria-hidden='true'
                                        className='svg-icon iconArrowUpLg'
                                        width='36'
                                        height='36'
                                        viewBox='0 0 36 36'
                                    >
                                        <path d='M2 25h32L18 9 2 25Z'></path>
                                    </svg>
                                    <span className='vote_nr'>
                                        {comment.upvotes - comment.downvotes}
                                    </span>
                                    <svg
                                        onClick={(e) => {
                                            downvoteComment(e, comment.id);
                                        }}
                                        fill={
                                            comment.isDisliked ? 'red' : 'gray'
                                        }
                                        aria-hidden='true'
                                        className='svg-icon iconArrowDownLg'
                                        width='36'
                                        height='36'
                                        viewBox='0 0 36 36'
                                    >
                                        <path d='M2 11h32L18 27 2 11Z'></path>
                                    </svg>
                                </section>
                                <section className='main_question'>
                                    <p className='answer_content'>
                                        {comment.content}
                                    </p>
                                    <section className='single_question_info'>
                                        <span className='time_of_post'>
                                            {new Date(
                                                comment.createdAt
                                            ).toLocaleDateString()}
                                        </span>
                                        <span className='single_question_author_name'>
                                            {comment.username}
                                        </span>
                                    </section>
                                </section>
                            </li>
                        ))}
                    </ul>
                </section>
                {currentUser && (
                    <form onSubmit={handleSubmit}>
                        <section className='answer_form'>
                            <textarea
                                name='content'
                                rows={12}
                                style={{ width: '100%', padding: '0.5rem' }}
                                className='answer_input'
                                placeholder='Write your answer here...'
                            ></textarea>
                            <button className='answer_btn'>
                                Post your answer
                            </button>
                        </section>
                    </form>
                )}
            </section>
            <RightSidebar />
        </div>
    );
};

export default SingleQuestion;
