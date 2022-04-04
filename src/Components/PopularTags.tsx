import React from 'react';
import { Link } from 'react-router-dom';
import { getPopularTags } from '../utils/api';

const PopularTags = () => {
    const [popularTags, setPopularTags] = React.useState<any>([]);
    React.useEffect(() => {
        getPopularTags().then(setPopularTags);
    }, []);

    return (
        <section className='popular_Tags'>
            <h5>POPULAR TAGS</h5>

            <ul>
                {popularTags.map((tag: any) => (
                    <li key={`tag${tag.id}`}>
                        <Link to={`/tags/${tag.id}`}>{tag.name}</Link>
                </li>
                ))}
            </ul>
        </section>
    );
};

export default PopularTags;
