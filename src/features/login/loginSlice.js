import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        name: sessionStorage.getItem('name'),
        token: sessionStorage.getItem('token')
    },
    reducers: {
        LoginFunc: (state, info) => {
            sessionStorage.setItem('token', info.payload.token)
            sessionStorage.setItem('name', info.payload.name)
        },
        LogoutFunc: (state, info) => {
            if (info.payload) {
                sessionStorage.clear();
            }
        }
    }
})

export const { LoginFunc, LogoutFunc } = loginSlice.actions
export default loginSlice.reducer