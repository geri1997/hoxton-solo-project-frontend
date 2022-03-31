import React from 'react';
import { Link } from 'react-router-dom';
import  '../assets/login.css'
const LogIn = () => {
    return (
        <div className='formPage logIn_container'>
            <form className='form login_form'>
                <h1>Log In</h1>
                <div className='form_group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' />
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' />
                </div>
                <button className='btn login'>Log In</button>
                <span>Or <Link to={'/register'}>Register</Link></span>
            </form>
        </div>
    );
};

export default LogIn;
