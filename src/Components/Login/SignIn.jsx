import React from 'react';
import { Login } from './api'
import { useDispatch } from 'react-redux';
import { LoginFunc } from '../../features/login/loginSlice';
import '../../stylesheets/sign/login.css'

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
        <div className="login">
            <div className="loginArea">
                <div className="titleFlex">
                    {/*<button></butt。n>。*/}
                </div>
                <div className="inputFlex">
                    <div className="">
                        <label htmlFor="">帳號</label>
                        <br/>
                        <input type="text"/>
                    </div>
                    <div>
                        <label htmlFor="">密碼</label>
                        <br/>
                        <input type="password"/>
                    </div>
                </div>
                <div className="btnFlex">
                    <button onClick={loginHandler}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default SignIn;