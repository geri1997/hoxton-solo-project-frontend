import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import LeftSidebar from '../Components/LeftSidebar';
import RightSidebar from '../Components/RightSidebar';
//@ts-ignore
import { useStore } from '../Store/store';

const DiscordQuestion = () => {
    const params = useParams();
    const [currentQuestion, setCurrentQuestion] = React.useState<any>([]);
    const discordQuestions = useStore((store: any) => store.discordQuestions);

    useEffect(() => {
        fetch(`http://localhost:3009/single-discord-q/${params.id}`)
            .then((res) => res.json())
            .then((data) => {
                setCurrentQuestion(data);
            });
    }, []);

    if (!currentQuestion) return null;

    const foundQuestion = discordQuestions.find((question: any) => question.thread.id === params.id);
    // console.log(discordQuestions)
console.log(foundQuestion)
console.log(currentQuestion.reverse())
    return (
        <div className='questions_container single'>
            <LeftSidebar />
            <section className='single_question'>
                <section className='question_header'>
                    <h2 className='single_title'>{foundQuestion&&foundQuestion.content}</h2>
                </section>
                
                <section className='questions_list'>
                    <ul>
                        {currentQuestion.reverse().map((question: any) => (
                            <li style={{listStyle:'none'}} key={question.id} className='single_question_li'>
                                {/* <section className='votes'>
                                    <span>0 votes</span>
                                    <span>0 answers</span>
                                    <span>0 views</span>
                                </section> */}
                                <section className='question_desc'>
                                    <h3>
                                        {
                                            //@ts-ignore
                                            
                                        }
                                    </h3>
                                    <p style={{fontSize: '0.9rem'}} className='shoart_desc'>
                                        {' '}
                                        {question.content}
                                    </p>
                                    <section className='tags_userInfo'>
                                        <span></span>
                                        <section className='userInfo'>
                                            <span> </span>
                                            <span className='user_name'>
                                                {
                                                    //@ts-ignore
                                                    question.author.username
                                                }
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

export default DiscordQuestion;
