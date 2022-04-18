import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const Admin = () => {

    const navigation = useNavigate()

    useEffect(() => {
        if (!sessionStorage.getItem('token')) {
            navigation('/Login')
        }
    }, []);

    return (
        <h1>Admin</h1>
    )
}

export default Admin;