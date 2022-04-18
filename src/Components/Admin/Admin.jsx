import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/login/loginSlice'

const Admin = () => {

    const navigation = useNavigate();

    const name = useSelector((state) => state.login.name)

    const dispatch = useDispatch();

    useEffect(() => {
        if (!sessionStorage.getItem('token')) {
            navigation('/Login')
        }
    }, []);

    return (
        <div>
            <h1>Admin</h1>
            <p>Hello!{name}</p>
            <button onClick={() => { dispatch(logout()) }}>logout</button>
        </div>
    )
}

export default Admin;