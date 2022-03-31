import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='formPage'>
            <form className='form signUp_form'>
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
                <span>Or <Link to={'/login'}>Log in</Link></span>
            </form>
        </div>
    );
};

export default Register;
