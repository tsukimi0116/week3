import React from 'react';
import { Login } from './api'
import { useDispatch } from 'react-redux';
import { LoginFunc } from '../../features/login/loginSlice';

const SignIn = () => {

    const dispatch = useDispatch()

    const loginHandler = async () => {
        try {
            let data = await Login()
            dispatch(LoginFunc(data))
            window.location.href = 'http://localhost:3000/'
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick={loginHandler}>Login</button>
        </div>
    )
}

export default SignIn;