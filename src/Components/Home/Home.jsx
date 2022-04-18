import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import '../../stylesheets/Home/Home.css';

const Home = () => {
    const navigate = useNavigate();
    const [signIn, setSignIn] = useState({
        Tris: false,
        Nono: false,
        Eric: false,
        Patrick: false,
        Yue: false
    })

    const [deg, setDeg] = useState({
        Tris: '',
        Nono: '',
        Eric: '',
        Patrick: '',
        Yue: ''
    })

    const list = [
        { num: 1, name: 'Tris', deg: deg.Tris, status: signIn.Tris },
        { num: 2, name: 'Nono', deg: deg.Nono, status: signIn.Nono },
        { num: 3, name: 'Eric', deg: deg.Eric, status: signIn.Eric },
        { num: 4, name: 'Patrick', deg: deg.Patrick, status: signIn.Patrick },
        { num: 5, name: 'Yue', deg: deg.Yue, status: signIn.Yue },
    ]


    return (
        <div className='tb'>
            <button onClick={() => {
                navigate('/Login')
            }}>登入</button>
            <button onClick={() => {
                navigate('/Admin')
            }}>後台</button>
            <button onClick={() => {
                navigate('/Product')
            }}>產品</button>
            <table>
                <tbody>
                    <tr>
                        <th>員工編號</th>
                        <th>員工姓名</th>
                        <th>體溫</th>
                        <th>是否簽到</th>
                    </tr>
                    {Array.isArray(list) &&
                        list.map((elm, idx) => (
                            <tr key={idx}>
                                <td>{elm.num}</td>
                                <td>{elm.name}</td>
                                <td id='deg'>{elm.deg === '' && elm.status ? <input type="text" defaultValue="36.5"
                                    onKeyDown={(e) => {
                                        if (e.keyCode === 13) {
                                            setDeg({ ...deg, [elm.name]: e.target.value })
                                            setSignIn({ ...signIn, [elm.name]: true })
                                        }
                                    }} /> : <span>{elm.deg}</span>}</td>
                                <td>{elm.deg !== '' ? 'v' : <span id='sign' onClick={() => {
                                    setSignIn({ ...signIn, [elm.name]: true })
                                }}>簽到</span>}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home;