import React, { useState } from 'react'

export default function RandomNumber() {
    const [data, setdata] = useState(0)
    const [range, setrange] = useState("")
    function generaterandomnumber() {
        if (range === 0 || Number(range)<=0) {
            alert("enter the range")
        }
        else {
            let num = Math.round(Math.random() * Number(range))
            setdata(num)
        }
    }
    const handlechange=(e)=>{
        setrange(e.target.value)
    }
    const resetdata = () => {
        setdata(0)
        setrange("")
    }
    return (
        <div>
            <div className="container-fluid d-flex justify-content-center align-items-center vh-100 flex-column">
                <div className='text-center border rounded border-dark p-5 bg-info'>
                    <h1>Random Number</h1>
                    <span className='text-dark bg-white border border-2 border-dark d-inline-block w-75'>{data}</span> <br /> <br />
                    <input type="number" name="" className='w-75' value={range} onChange={handlechange} placeholder="enter the range of number" /> <br />
                    <button className='btn btn-primary mt-2 w-75' onClick={generaterandomnumber}>generate random number</button><br />
                    <button className='btn btn-danger w-75 mt-2' onClick={resetdata}>Reset</button>
                </div>
            </div>
        </div>
    )
}
