import React from 'react';
import { Link } from 'react-router-dom';
//@ts-ignore
import { useStore } from '../Store/store';

const MainTags = () => {
    const tags = useStore((store: any) => store.tags);
    const [query, setQuery] = React.useState('');

    const tagsToDisplay = tags.filter((tag: any) =>
        tag.name.toLowerCase().includes(query.toLowerCase().trim())
    );
    return (
        <section className='main_section main_tags'>
            <section className='tags_header'>
                <h2>Tags</h2>
                <p>
                    A tag is a keyword or label that categorizes your question
                    with other, similar questions. Using the right tags makes it
                    easier for others to find and answer your question.
                </p>
                <input onChange={e=>setQuery(e.target.value)} type='search' placeholder='Filter by tag name' />
            </section>

            <section className='main_tags_list'>
                <ul className='main_tags_ul'>
                    {tagsToDisplay.map((tag: any) => (
                        <li key={`mainTag${tag.id}`} className='single_tag'>
                            <Link
                                style={{ textDecoration: 'none' }}
                                to={`/tags/${tag.id}`}
                            >
                                <h4>{tag.name}</h4>
                            </Link>
                            <p>{tag.description}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
};

export default MainTags;
