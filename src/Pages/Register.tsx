import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signUp, validate } from '../utils/api';
//@ts-ignore
import { useStore } from '../Store/store';
import { setTokenInStorage } from '../utils/helpers';
const Register = () => {
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
        signUp(
            e.target.password.value,
            e.target.email.value,
            e.target.username.value
        ).then((data: any) => {
            if (data.error) return;
            setCurrentUser(data.user);
            setTokenInStorage(data.token);
            navigate('/questions');
        });
    }
    return (
        <div className='formPage'>
            <form onSubmit={handleSubmit} className='form signUp_form'>
                <h1>Register</h1>
                <div className='form_group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' />
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' />
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' />
                </div>
                <button className='btn login'>Register</button>
                <span>
                    Or <Link to={'/login'}>Log in</Link>
                </span>
            </form>
        </div>
    );
};

export default Register;
