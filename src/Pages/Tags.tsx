import React, { useEffect } from 'react';
import LeftSidebar from '../Components/LeftSidebar';
import RightSidebar from '../Components/RightSidebar';
import '../assets/tags.css';
//@ts-ignore
import { useStore } from '../Store/store';
import { useNavigate } from 'react-router-dom';
import { getTags, validate } from '../utils/api';

const Tags = () => {
    const tags = useStore((store: any) => store.tags);
    const setTags = useStore((store: any) => store.setTags);
    const setCurrentUser = useStore((store: any) => store.setCurrentUser);
    const navigate = useNavigate();
    useEffect(() => {
        validate().then((data) => {
            if (data.error) return;
            setCurrentUser(data);
        });
    }, []);
    useEffect(() => {
        getTags().then(setTags);
    }, []);

    return (
        <div className='questions_container'>
            <LeftSidebar />
            <section className='main_section main_tags'>
                <section className='tags_header'>
                    <h2>Tags</h2>
                    <p>
                        A tag is a keyword or label that categorizes your
                        question with other, similar questions. Using the right
                        tags makes it easier for others to find and answer your
                        question.
                    </p>
                    <input type='search' placeholder='Filter by tag name' />
                </section>

                <section className='main_tags_list'>
                    <ul className='main_tags_ul'>
                        {tags.map((tag: any) => (
                            <li className='single_tag'>
                                <h4>{tag.name}</h4>
                                <p>
                                    {tag.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                </section>
            </section>
            <RightSidebar />
        </div>
    );
};

export default Tags;
