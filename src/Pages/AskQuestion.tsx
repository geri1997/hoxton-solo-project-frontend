import React, { useEffect } from 'react';
import LeftSidebar from '../Components/LeftSidebar';
import RightSidebar from '../Components/RightSidebar';
import '../assets/ask.css';
import { useNavigate } from 'react-router-dom';
import { createPost, validate } from '../utils/api';
//@ts-ignore
import { useStore } from '../Store/store';

const AskQuestion = () => {
    const currentUser = useStore((store: any) => store.currentUser);
    const setCurrentUser = useStore((store: any) => store.setCurrentUser);
    const setQuestions = useStore((store: any) => store.setQuestions);
    const setCount = useStore((store: any) => store.setCount);
    const navigate = useNavigate();
    useEffect(() => {
        validate().then((data) => {
            if (data.error) return navigate('/login');
            setCurrentUser(data);
        });
    }, []);

    function handleSubmit(e:any){
        e.preventDefault();
        console.log(JSON.stringify(e.target.description.value));
        createPost(currentUser.id,e.target.title.value, JSON.stringify(e.target.description.value), e.target.tags.value).then(
            (data: any) => {
                if (data.error) return;
                setQuestions(data.questions)
                setCount(data.count.count)
                navigate('/questions');
            }
        );
    }

    if(!currentUser) return null;

    return (
        <div className='questions_container'>
            <LeftSidebar />
            <section className='main_questions main_section'>
                <section className='questions_header'>
                    <h2>Ask a question</h2>
                </section>

                <form onSubmit={handleSubmit} className='ask_question_form'>
                    <div className='title-form-group '>
                        <label htmlFor='title'>Title</label>
                        <input required
                            name='title'
                            type='text'
                            className='form-control'
                            id='title'
                        />
                    </div>
                    <div className='description-form-group'>
                        <label htmlFor='description'>Description</label>
                        <textarea
                        required
                            name='description'
                            className='form-control'
                            id='description'
                            rows={10}
                        />
                    </div>
                    <label htmlFor='tags'>Select a tag</label>
                    <select required name='tags' id='tags'>
                        <option hidden value=''>
                            Select a tag
                        </option>
                        <option value='javascript'>Javascript</option>
                        <option value='react'>React</option>
                        <option value='node'>Node</option>
                        <option value='express'>Express</option>
                        <option value='mongodb'>MongoDB</option>
                        <option value='html'>HTML</option>
                        <option value='css'>CSS</option>
                        <option value='typescript'>Typescript</option>
                    </select>
                    <button type='submit' className='btn btn-primary'>
                        Submit
                    </button>
                </form>
            </section>
            <RightSidebar />
        </div>
    );
};

export default AskQuestion;
