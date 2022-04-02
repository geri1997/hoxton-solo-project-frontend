import React, { useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../assets/home.css';
import { validate } from '../utils/api';
//@ts-ignore
import { useStore } from '../Store/store';

const Home = () => {

    const setCurrentUser = useStore((store: any) => store.setCurrentUser);

    const navigate = useNavigate();
    useEffect(() => {
        validate().then((data) => {
            if (data.error) return;
            setCurrentUser(data.user);
            navigate('/questions');
        });
    }, []);

    return (
        <div className='home_container'>
            <section className='squares'>
                <section className='new_user'>
                    <svg
                        aria-hidden='true'
                        className='fc-orange-500 mb16 svg-spot spotSearch'
                        width='48'
                        height='48'
                        viewBox='0 0 48 48'
                    >
                        <path
                            opacity='.2'
                            d='M29.22 38.1a3.4 3.4 0 0 1 4.81-4.82l8.81 8.81a3.4 3.4 0 0 1-4.81 4.81l-8.81-8.8Z'
                        ></path>
                        <path d='M18.5 5a1 1 0 1 0 0 2c.63 0 1.24.05 1.84.15a1 1 0 0 0 .32-1.98A13.6 13.6 0 0 0 18.5 5Zm7.02 1.97a1 1 0 1 0-1.04 1.7 11.5 11.5 0 0 1 5.44 8.45 1 1 0 0 0 1.98-.24 13.5 13.5 0 0 0-6.38-9.91ZM18.5 0a18.5 18.5 0 1 0 10.76 33.55c.16.57.46 1.12.9 1.57L40 44.94A3.5 3.5 0 1 0 44.94 40l-9.82-9.82c-.45-.45-1-.75-1.57-.9A18.5 18.5 0 0 0 18.5 0ZM2 18.5a16.5 16.5 0 1 1 33 0 16.5 16.5 0 0 1-33 0Zm29.58 15.2a1.5 1.5 0 1 1 2.12-2.12l9.83 9.83a1.5 1.5 0 1 1-2.12 2.12l-9.83-9.83Z'></path>
                    </svg>
                    <p>
                        Find the best answer to your technical question, help
                        others answer theirs
                    </p>
                    <Link className='signUp_Link' to={`/register`}>
                        Join the community
                    </Link>
                    or{' '}
                    <Link className='logIn_Link' to={`/login`}>
                        Login
                    </Link>
                </section>
                <section className='browse_as_guest'>
                    <svg
                        aria-hidden='true'
                        className='fc-black-300 mb0 mx32 svg-spot spotTechnicalWritingLg'
                        width='96'
                        height='96'
                        viewBox='0 0 96 96'
                    >
                        <path
                            d='M33.3 60.21a1 1 0 0 1-.04-1.46l41.1-40.1a1 1 0 0 1 .33-.22l10.83-4.17a1 1 0 0 1 1.31 1.25l-3.26 9.78a1 1 0 0 1-.22.37L43.17 67.8a1 1 0 0 1-1.4.05l-8.48-7.64Zm-9.19 19.02a1 1 0 0 0 .38.98l2.12 1.61a1 1 0 0 1 .11 1.49l-9.1 9.48a3 3 0 0 1-4.29.04l-5.1-5.1a3 3 0 0 1 .11-4.35l12.5-11.28a1 1 0 0 1 1.33-.01l2.38 2.08a1 1 0 0 1 .33.94l-.77 4.12Z'
                            opacity='.2'
                        ></path>
                        <path d='M91.4 5.56a1.5 1.5 0 0 0-1.87-1.98l-15 5c-.24.07-.44.2-.61.38l-9.2 9.6.26-1.85a1.5 1.5 0 0 0-.86-1.58l-11-5a1.5 1.5 0 0 0-1.93.64l-4.51 8.12c-2.16-.21-4.27-.2-6.35 0l-4.52-8.12a1.5 1.5 0 0 0-1.93-.64l-11 5a1.5 1.5 0 0 0-.84 1.73l1.77 7.06c-.9.76-1.6 1.62-2.22 2.46-.32.44-.63.9-.93 1.33v.01a245.75 245.75 0 0 1-.71 1.01l-7.98-2.65a1.5 1.5 0 0 0-1.85.84l-5 12a1.5 1.5 0 0 0 .77 1.95l8 3.56c-.2 2.27-.2 4.93 0 7.14l-8 3.56a1.5 1.5 0 0 0-.77 1.95l5 12a1.5 1.5 0 0 0 1.85.84l2.58-.86-9.57 8.84a1.5 1.5 0 0 0-.04 2.16l9 9a1.5 1.5 0 0 0 2.12 0l7.77-7.76 10.05 4.57c.73.33 1.6.02 1.96-.7l3.53-7.06c2.19.22 4.34.2 6.45-.02l5.48 7.31c.4.54 1.13.74 1.76.5l10-4c.62-.26 1-.9.93-1.57l-.9-8.13a21 21 0 0 0 3.99-4.01l7.06 1.77a1.5 1.5 0 0 0 1.73-.84l5-11a1.5 1.5 0 0 0-.5-1.84L74.1 51.8c.24-2.24.22-4.44 0-6.6l6.28-4.48c.57-.4.78-1.15.52-1.8l-3.59-8.64a1.5 1.5 0 0 0-.58-.7l8.35-8.53c.14-.14.25-.3.32-.5l6-15ZM20.01 68.1c.1-.09.18-.19.25-.3 1 1.46 2.1 2.94 3.55 4.24l-1.67 6.7-.65.64-5.94-5.94a1.5 1.5 0 0 0-.86-.43l5.32-4.9ZM13 74.58c.02.36.17.7.44.98l5.94 5.94L15 85.88l-6.84-6.84L13 74.58Zm12.34 3.74 1.62-6.46a1.5 1.5 0 0 0-.53-1.54c-1.7-1.33-2.8-2.93-4.13-4.86l-.57-.82a1.5 1.5 0 0 0-1.7-.56l-7.68 2.56-3.9-9.36 7.66-3.4c.6-.28.96-.91.88-1.57a37.6 37.6 0 0 1 0-8.61 1.5 1.5 0 0 0-.88-1.57l-7.66-3.4 3.9-9.37 7.68 2.56c.6.2 1.26 0 1.65-.5.45-.57.86-1.15 1.24-1.7l.22-.32.87-1.24a10.1 10.1 0 0 1 2.35-2.43c.5-.36.75-.99.6-1.6l-1.7-6.78 8.6-3.91 4.33 7.79c.3.53.89.84 1.5.76a29.4 29.4 0 0 1 7.61 0 1.5 1.5 0 0 0 1.51-.76l4.33-7.8 8.72 3.97-.7 4.87-6.23 6.5a14.06 14.06 0 0 0-4.86-2.61A21.77 21.77 0 0 0 43.5 25C31.49 25 23 34.69 23 46.5c0 11.76 8.53 22.1 20.6 22.1C55.47 68.6 66 58.44 66 46.5a10.2 10.2 0 0 0-1.14-4.65l-.02-.02a4.72 4.72 0 0 0-.03-.06l9.84-10.06 3 7.26-6.02 4.3A1.5 1.5 0 0 0 71 44.7c.32 2.5.35 5.04 0 7.61-.07.55.17 1.1.62 1.42l6 4.28-3.98 8.74-6.79-1.7a1.5 1.5 0 0 0-1.54.53c-1.66 2.12-2.65 3.29-4.68 4.7-.45.31-.7.85-.63 1.4l.87 7.86L53 82.69l-5.31-7.08a1.5 1.5 0 0 0-1.39-.59c-2.5.32-5.04.35-7.61 0a1.5 1.5 0 0 0-1.54.82l-3.36 6.7-8.32-3.78a1.5 1.5 0 0 0-.14-.43Zm37.38-53.34a1.5 1.5 0 0 0 1.26-1.27l.01-.06 10.54-11 7.36 7.36-43.73 44.7a17.18 17.18 0 0 1-8-5.76l32.56-33.97ZM49.1 29c1.62.55 2.93 1.23 3.74 1.94L28.47 56.38A20.59 20.59 0 0 1 26 46.5C26 36.14 33.34 28 43.5 28c1.58 0 3.68.35 5.61 1Zm-5.52 36.6c-.67 0-1.34-.04-1.99-.11l20.96-21.43.02.04v.02c.21.59.42 1.42.42 2.38 0 10.23-9.12 19.1-19.4 19.1Zm39.86-48.27-6.42-6.42L87.4 7.45l-3.96 9.88Z'></path>
                    </svg>
                    <p>
                        You can browse through millions of questions and answers
                        from developers
                        <b> without an account</b>
                    </p>
                    <Link to={'/questions'}>Browse as Guest</Link>
                </section>
            </section>
            <h1 className='home_text'>
                Every developer has a tab open to Stack Overflow
            </h1>
            <section className='stats'>
                <div className='visitors'>
                    <h3>100+ million</h3>
                    <p>monthly visitors to Stack Overflow & Stack Exchange</p>
                </div>
                <div className='developers'>
                    <h3>45.1+ billion</h3>
                    <p>Times a developer got help since 2008</p>
                </div>
                <div className='roi'>
                    <h3>179% ROI</h3>
                    <p>from companies using Stack Overflow for Teams</p>
                </div>
                <div className='teams'>
                    <h3>5,000+</h3>
                    <p>Stack Overflow for Teams instances active every day</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
