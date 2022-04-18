import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginFunc } from '../../features/login/loginSlice';

const Login = () => {

    const name = useSelector((state) => state.login.name)

    const dispatch = useDispatch()

    console.log(name);

    return (
        <div>
            <h1>Login</h1>
            <button onClick={() => { dispatch(LoginFunc()) }}>Login</button>
        </div>
    )
}

export default Login;