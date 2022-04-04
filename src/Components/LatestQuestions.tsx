import React from 'react';
import { Link } from 'react-router-dom';
import { getAllQuestions } from '../utils/api';

const LatestQuestions = () => {
    const [latestQuestions, setLatestQuestions] = React.useState([]);

    React.useEffect(() => {
        getAllQuestions(0).then((data) => setLatestQuestions(data.questions));
    }, []);
    return (
        <section className='newest_questions'>
            <h5>LATEST QUESTIONS</h5>
            <ul className='new_questions_ul'>
                {latestQuestions.map((question: any) => {
                    return (
                        <Link
                            key={`popQ${question.id}`}
                            to={`/questions/${question.id}`}
                        >
                            <li>{question.title}</li>
                        </Link>
                    );
                })}
            </ul>
        </section>
    );
};

export default LatestQuestions;
