import React from 'react'
import './Process.css'
import axios from './axios';
function Process() {
    const getMethod =(e)=>{
       
    }
    return (
        <div>
            <h1>Processing the conversion to txt</h1>
            <button onClick={getMethod} className="button">process</button>
        </div>
    )
}

export default Process
