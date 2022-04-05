import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const MainQSingle = ({question}:{question:any}) => {
    const navigate = useNavigate();
  return (
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
                                        <li className='tag'><Link key={`tag${question.id}`} style={{textDecoration:'none'}} to={`/tags/${question.tagId}`}>{question.tag}</Link></li>
                                    </ul>
                                    <section className='userInfo'>
                                        <span className='user_name'>
                                            {question.username}
                                        </span>
                                    </section>
                                </section>
                            </section>
                        </li>
  )
}
