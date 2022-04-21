import React, { useState, useEffect, useRef } from 'react';
import num from './num.json'

const Error404 = () => {
    const [name, setName] = useState(0)
    const [districts, setDistricts] = useState(num[0].districts)
    const [zip, setZip] = useState('')
    const testRef = useRef();

    useEffect(() => {
        switch (name) {
            default:
                setDistricts(num[0].districts)
                break;
            case 1:
                setDistricts(num[1].districts)
                break
            case 2:
                setDistricts(num[2].districts)
                break
            case 3:
                setDistricts(num[3].districts)
                break
            case 4:
                setDistricts(num[4].districts)
                break
            case 5:
                setDistricts(num[5].districts)
                break
            case 6:
                setDistricts(num[6].districts)
                break
            case 7:
                setDistricts(num[7].districts)
                break
            case 8:
                setDistricts(num[8].districts)
                break
            case 9:
                setDistricts(num[9].districts)
                break
            case 10:
                setDistricts(num[10].districts)
                break
            case 11:
                setDistricts(num[11].districts)
                break
            case 12:
                setDistricts(num[12].districts)
                break
            case 13:
                setDistricts(num[13].districts)
                break
            case 14:
                setDistricts(num[14].districts)
                break
            case 15:
                setDistricts(num[15].districts)
                break
            case 16:
                setDistricts(num[16].districts)
                break
            case 17:
                setDistricts(num[17].districts)
                break
            case 18:
                setDistricts(num[18].districts)
                break
            case 19:
                setDistricts(num[19].districts)
                break
            case 20:
                setDistricts(num[20].districts)
                break
            case 21:
                setDistricts(num[21].districts)
                break
            case 22:
                setDistricts(num[22].districts)
                break
            case 23:
                setDistricts(num[23].districts)
                break
        }
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
            <select defaultValue="default" onChange={(e) => {
                setName(parseInt(e.target.value))
            }} name="country" id="">
                <option value="default" disabled >請選擇縣市</option>
                {Array.isArray(num) &&
                    num.map((elm, idx) => (
                        <option value={idx} key={idx}>{elm.name}</option>
                    ))
                }
            </select>

            <select defaultValue="default" onChange={(e) => {
                setZip(e.target.value);
            }} name="Area" id="">
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