import React, { useState, useEffect, useRef } from 'react';
import num from './num.json'

const Error404 = () => {
    const [name, setName] = useState(0)
    const [districts, setDistricts] = useState(num[0].districts)
    const [zip, setZip] = useState('')
    const testRef = useRef();

    useEffect(() => {
        setDistricts(num[name].districts)
    }, [name]);

    return (
        <div>
            <select ref={testRef} name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <button onClick={() => { testRef.current.value++ }}>控制ref</button>
            <h1>區號</h1>
            <select defaultValue="default" onChange={(e) => { setName(parseInt(e.target.value)) }} name="country" id="">
                <option value="default" disabled >請選擇縣市</option>
                {Array.isArray(num) &&
                    num.map((elm, idx) => (
                        <option value={idx} key={idx}>{elm.name}</option>
                    ))
                }
            </select>

            <select defaultValue="default" onChange={(e) => { setZip(e.target.value); }} name="Area" id="">
                <option value="default" disabled >請選擇區域</option>
                {Array.isArray(districts) &&
                    districts.map((elm, idx) => (
                        <option value={elm.zip} key={idx}>{elm.name}</option>
                    ))
                }
            </select>
            <span>{zip}</span>
        </div>
    )
}

export default Error404;