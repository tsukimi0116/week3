import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LogoutFunc } from '../../features/login/loginSlice';
import { Logout } from '../Login/api';

const Admin = () => {

    const navigation = useNavigate();

    const name = useSelector((state) => state.login.name)

    const dispatch = useDispatch();

    const logoutHandler = async () => {
        try {
            let data = await Logout()
            dispatch(LogoutFunc(data))
            window.location.href = 'http://localhost:3000/Login'
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (!sessionStorage.getItem('token')) {
            navigation('/Login')
        }
    }, []);

    return (
        <div>
            <h1>Admin</h1>
            <p>Hello!{name}</p>
            <button onClick={logoutHandler}>logout</button>
        </div>
    )
}

export default Admin;