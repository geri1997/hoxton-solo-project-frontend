import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
//@ts-ignore
import { useStore } from '../Store/store';

const DiscordQuestions = () => {
    // const [discordQuestions, setdiscordQuestions] = useState([]);
    const discordQuestions = useStore((store: any) => store.discordQuestions);
    const setdiscordQuestions = useStore((store: any) => store.setDiscordQuestions);

    useEffect(() => {
        fetch(`http://localhost:3009/discord-questions/895957476606898176`)
            .then((res) => res.json())
            .then((data) => {
                setdiscordQuestions(data);
            });
    }, []);
    
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
                    {discordQuestions.map((question:any) => (
                        <li key={question.id} className='single_question_li'>
                            <section className='votes'>
                                <span>0 votes</span>
                                <span>0 answers</span>
                                <span>0 views</span>
                            </section>
                            <section className='question_desc'>
                                <h3><Link style={{textDecoration:'none'}} to={'/discord/'+question.thread.id}>
                                    {
                                        //@ts-ignore
                                        question.content
                                    }</Link>
                                </h3>
                                <p className='short_desc'>
                                    {' '}
                                    Question from support thread in Hoxton
                                    Discord
                                </p>
                                <section className='tags_userInfo'>
                                    <ul className='tagList'>
                                        <li className='tag'>Javascript</li>
                                        {/* <li>React</li> */}
                                    </ul>
                                    <section className='userInfo'>
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
  )
}

export default DiscordQuestions