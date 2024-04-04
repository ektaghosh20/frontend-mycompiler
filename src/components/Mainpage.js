import './Mainpage.css'
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
export default function Mainpage() {

    const[codes,setcodes]=useState("");
    const[outputs,setoutputs]=useState("Terminal");
    let history = useNavigate();
    const SendCode = async () => {
    let codeBlock = {
        'code': codes,
        'output': 'Terminal',
    };
        await axios({
            method: 'post',
            url: 'http://localhost:8000/api/',
            data: codeBlock,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log(response.data);
            history.push('/');
        }).catch((error) => {
            console.error("Error:", error);
        });
        const response=await axios.get('http://localhost:8000/api/')
        console.log(response.data)
        setoutputs(response.data)
    };
    return(
        <>
<div className="container">
  <main className="sections">
    <section className="section">
      <h2 className="header">Input
      <button className="button" onClick={SendCode}>Run</button></h2>
      <textarea className="textarea" name="code" onChange={(e)=>setcodes(e.target.value)} placeholder='' value={codes} />
    </section>
    <section className="section">
      <h2 className="header">Output</h2>
      <textarea className="textarea" name="output" value={outputs[Object.keys(outputs).length-1].output} readOnly />
    </section>
  </main>
</div>
</>
    )
}
