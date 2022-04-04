import React from 'react'
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
                            <a href=''>
                                <span></span>
                                {tag.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
  )
}

export default PopularTags