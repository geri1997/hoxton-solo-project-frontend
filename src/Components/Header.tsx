import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/header.css';
//@ts-ignore
import { useStore } from '../Store/store';
import { removeTokenFromStorage } from '../utils/helpers';

const Header = () => {
    const navigate = useNavigate();
    const currentUser = useStore((store: any) => store.currentUser);
    const setCurrentUser = useStore((store: any) => store.setCurrentUser);
    const setSearchedQuestions = useStore(
        (store: any) => store.setSearchedQuestions
    );
    const setQuestions = useStore((store: any) => store.setQuestions);
    const setCount = useStore((store: any) => store.setCount);

    const searchedQuestions = useStore((store: any) => store.searchedQuestions);
    function handleSubmit(e: any) {
        e.preventDefault();
        fetch(`http://localhost:3009/search?search=${e.target.search.value}`)
            .then((res) => res.json())
            .then(data=>{
                setQuestions(data.questions);
                setCount(data.count.count);
            });
        // e.target.reset();
    }

    return (
        <nav className='main_nav'>
            <img
                onClick={(e) =>
                    !currentUser ? navigate('/') : navigate('/questions')
                }
                src='\src\assets\Stack_Overflow_logo.svg'
                alt=''
            />
            <div className='search_bar'>
                <svg
                    aria-hidden='true'
                    className='iconSearch'
                    width='18'
                    height='18'
                    viewBox='0 0 18 18'
                >
                    <path d='m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z'></path>
                </svg>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder='Search…'
                        autoComplete='off'
                        type='search'
                        name='search'
                        id=''
                    />
                </form>
            </div>
            <section className='account_nav'>
                {!currentUser ? (
                    <>
                        <button
                            onClick={(e) => navigate('/login')}
                            className='account log_in'
                        >
                            Log in
                        </button>
                        <button
                            onClick={(e) => navigate('/register')}
                            className='account sign_up'
                        >
                            Sign up
                        </button>
                    </>
                ) : (
                    <>
                        {/* <button
                            onClick={(e) => navigate('/profile')}
                            className='account log_in'
                        >
                            Profile
                        </button> */}
                        <button
                            onClick={(e) => {
                                removeTokenFromStorage();
                                setCurrentUser(null);
                            }}
                            className='account sign_up'
                        >
                            Sign out
                        </button>
                        <h4 style={{ marginLeft: '2rem' }}>
                            {currentUser.username}
                        </h4>
                    </>
                )}
            </section>{' '}
        </nav>
    );
};

export default Header;
