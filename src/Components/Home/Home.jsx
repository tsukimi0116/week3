import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import '../../stylesheets/Home/Home.css';

const Home = () => {
    const navigate = useNavigate();

    const [list, setList] = useState([
        { num: 1, name: 'Tris', deg: '', status: false },
        { num: 2, name: 'Nono', deg: '', status: false },
        { num: 3, name: 'Eric', deg: '', status: false },
        { num: 4, name: 'Patrick', deg: '', status: false },
        { num: 5, name: 'Yue', deg: '', status: false },
    ])

    return (
        <div className='tb'>
            <button onClick={() => { navigate('/Login') }}>登入</button>
            <button onClick={() => { navigate('/Admin') }}>後台</button>
            <button onClick={() => { navigate('/Product') }}>產品</button>
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
                                            elm.deg = e.target.value
                                            setList([...list])
                                        }
                                    }} /> : <span>{elm.deg}</span>}</td>
                                <td>{elm.deg !== '' ? 'v' : <span id='sign' onClick={(e) => {
                                    elm.status = true
                                    setList([...list])
                                }}>簽到</span>}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home;