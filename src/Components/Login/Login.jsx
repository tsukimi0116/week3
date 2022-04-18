import React from 'react';
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigation = useNavigate();

    const click = () => {
        sessionStorage.setItem('token', 'token')
        setTimeout(() => {
            navigation('/')
        }, 1000);

    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick={click}>Login</button>
        </div>
    )
}

export default Login;