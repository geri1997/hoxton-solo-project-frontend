import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/login.css';
import { login, validate } from '../utils/api';
//@ts-ignore
import { useStore } from '../Store/store';
import { setTokenInStorage } from '../utils/helpers';
const LogIn = () => {
    const setCurrentUser = useStore((store: any) => store.setCurrentUser);
    const navigate = useNavigate();
    useEffect(() => {
        validate().then((data) => {
            if (data.error) return;
            setCurrentUser(data);
            navigate('/questions');
        });
    }, []);

    function handleSubmit(e: any) {
        e.preventDefault();
        login(e.target.email.value, e.target.password.value).then(
            (data: any) => {
                console.log(data);
                if (data.error) return;
                setCurrentUser(data.data);
                setTokenInStorage(data.token);
                navigate('/questions');
            }
        );
    }
    return (
        <div className='formPage logIn_container'>
            <form onSubmit={handleSubmit} className='form login_form'>
                <h1>Log In</h1>
                <div className='form_group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' />
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' />
                </div>
                <button className='btn login'>Log In</button>
                <span>
                    Or <Link to={'/register'}>Register</Link>
                </span>
            </form>
        </div>
    );
};

export default LogIn;
