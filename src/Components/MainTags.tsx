import React from 'react'
//@ts-ignore
import { useStore } from '../Store/store';

const MainTags = () => {
  const tags = useStore((store: any) => store.tags);
  return (
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
  )
}

export default MainTags