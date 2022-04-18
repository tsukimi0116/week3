import React, { useState, useEffect } from 'react';
import '../../stylesheets/Home/Api.css'


const ApiSearch = () => {

    const [value, setValue] = useState('')

    const list = [
        { id: 1, Name: "apple", Email: "AA@gmail.com", Phone: "0987878787", Address: "全家就是你家" },
        { id: 2, Name: "bee", Email: "BB@gmail.com", Phone: "0978777888", Address: "窩才告訴逆雷" },
        { id: 3, Name: "cat", Email: "CC@gmail.com", Phone: "0912333666", Address: "滾" },
        { id: 4, Name: "dog", Email: "DD@gmail.com", Phone: "0995552111", Address: "掰掰" },
        { id: 5, Name: "egg", Email: "EE@gmail.com", Phone: "0987112223", Address: "不要騷擾我" },
        { id: 6, Name: "flag", Email: "FF@gmail.com", Phone: "0987336884", Address: "呵呵" },
    ]

    const find = (name) => {
        for (let i = 0; i < list.length; i++) {
            if (list[i].Name.includes(name) == true) {
                // return list[i]
                console.log(123);
            } else {
                console.log(555);
            }
        }
    }

    const onChange = (e) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        let aa = find(value);
        console.log(aa);
    }, []);

    console.log(value);

    return (
        <div className='tb'>
            <div className='search'>
                <label htmlFor="search">搜尋</label>
                <input value={value} onChange={onChange} type="text" id='search' />
                <button>submit</button>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>

                    {Array.isArray(list) &&
                        list.map((elm, idx) => (
                            <tr key={idx}>
                                <td>{elm.id}</td>
                                <td>{elm.Name}</td>
                                <td>{elm.Email}</td>
                                <td>{elm.Phone}</td>
                                <td>{elm.Address}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default ApiSearch;