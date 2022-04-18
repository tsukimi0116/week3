import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        name: sessionStorage.getItem('name'),
        token: sessionStorage.getItem('token')
    },
    reducers: {
        LoginFunc: (state) => {
            state.name = 'Edward';
            state.token = 'AOQGKICVOGJANGO';
            sessionStorage.setItem('token', state.token)
            sessionStorage.setItem('name', state.name)
            window.location.href = 'http://localhost:3000/';
        },
        logout: (state) => {
            state.name = ''
            state.token = ''
            sessionStorage.clear();
            window.location.href = 'http://localhost:3000/Login';
        }
    }
})

export const { LoginFunc, logout } = loginSlice.actions
export default loginSlice.reducer