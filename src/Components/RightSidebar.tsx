import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getPopularTags } from '../utils/api';

const RightSidebar = () => {
    const [popularTags, setPopularTags] = useState<any>([]);
    React.useEffect(() => {
        getPopularTags().then(setPopularTags);
    }, []);
    if(!popularTags) return null

    return (
        <section className='right_sidebar'>
            <section className='popular_Tags'>
                <h5>POPULAR TAGS</h5>

                <ul>
                    {popularTags.map((tag: any) => (
                        <li>
                            <a href=''>
                                <span></span>
                                {tag.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
            <section className='newest_questions'>
                <h5>LATEST QUESTIONS</h5>
                <ul className='new_questions_ul'>
                    <Link to={''}>
                        <li>
                            Can I light up honey or other non-solid objects with
                            the Light cantrip?
                        </li>
                    </Link>
                    <Link to={''}>
                        <li>
                            Can I light up honey or other non-solid objects with
                            the Light cantrip?
                        </li>
                    </Link>
                    <Link to={''}>
                        <li>
                            Can I light up honey or other non-solid objects with
                            the Light cantrip?
                        </li>
                    </Link>
                    <Link to={''}>
                        <li>
                            Can I light up honey or other non-solid objects with
                            the Light cantrip?
                        </li>
                    </Link>
                    <Link to={''}>
                        <li>
                            Can I light up honey or other non-solid objects with
                            the Light cantrip?
                        </li>
                    </Link>
                    <Link to={''}>
                        <li>
                            Can I light up honey or other non-solid objects with
                            the Light cantrip?
                        </li>
                    </Link>
                </ul>
            </section>
        </section>
    );
};

export default RightSidebar;
