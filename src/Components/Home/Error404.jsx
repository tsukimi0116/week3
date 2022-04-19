import React, { useState, useEffect } from 'react';
import num from './num.json'

const Error404 = () => {
    console.log(num)

    useEffect(() => {

    }, []);
    return (
        <div>
            <h1>區號</h1>
            <select name="country" id="">
                <option value="" disabled >請選擇縣市</option>
                {Array.isArray(num) &&
                    num.map((elm, idx) => (
                        <option key={idx}>{elm.name}</option>
                    ))
                }
            </select>

            {/* <select name="Area" id="">
                <option value="" disabled >請選擇區域</option>
                {Array.isArray(num) &&
                    num.map((elm, idx) => (
                        <option key={idx}>{elm.districts}</option>
                    ))
                }
            </select> */}
        </div>
    )
}

export default Error404;