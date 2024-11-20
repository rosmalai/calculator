import { useEffect, useState } from 'react'
import React from 'react'
import './App.css'
import Button from './components/button'

function App() {

  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const [val, setVal] = useState(0);
  const [opt, setOpt] = useState("");

  function clear() {
    setResult(0);
    setInput(" ");
  }
  
  function backspace() {
    setInput(input.slice(0, -1));
  }

  function handleOpr(e) {
    console.log(e.target.className);
  }

  function handleClick (e) {
    const target = e.target.className;
    setInput(input + target);
  }

  function equalTo(){
    setResult(result);
    setInput("");
  }
  

  return (
    <div>
      <div className='calculatorBody'
        style={{
          height: "500px",
          width: "400px",
          backgroundColor: "wheat",
          borderRadius:"10px"
        }}>
        
        <div className='display'
          style={{
            display: "flex",
            justifyContent: "right",
            height: "100px",
            width: "auto",
            borderRadius: "10%",
            padding:"5px",
            margin: "5px",
            backgroundColor: "black"
          }}>
          <h1 className='result'>{result}</h1>
          <br/>
          <p className='inputs'>{input}</p>
        </div>
        
        <div className='buttonBox' style={{}}>
                
                <Button className='7' onClick={handleClick} label={7} style={{ margin: "4px" }}></Button>
                <Button className='8' onClick={handleClick} label={8} style={{margin:"4px"}}></Button>
                <Button className='9' onClick={handleClick} label={9} style={{margin:"4px"}}></Button>
                <Button className='+' onClick={(e)=>{handleClick(e);handleOpr(e)}} label={"+"} style={{margin:"4px"}}></Button>
                

                <Button className='4' onClick={handleClick} label={4} style={{margin:"4px"}}></Button>
                <Button className='5' onClick={handleClick} label={5} style={{ margin: "4px" }}></Button>
                <Button className='6' onClick={handleClick} label={6} style={{ margin: "4px" }}></Button>
                <Button className='-' onClick={(e)=>{handleClick(e);handleOpr(e)}} label={"-"} style={{margin:"4px"}}></Button>
                
                
                <Button className='1' onClick={handleClick} label={1} style={{ margin: "4px" }}></Button>
                <Button className='2' onClick={handleClick} label={2} style={{margin:"4px"}}></Button>
                <Button className='3' onClick={handleClick} label={3} style={{margin:"4px"}}></Button>
                <Button className='*' onClick={(e)=>{handleClick(e);handleOpr(e)}} label={"*"} style={{margin:"4px"}}></Button>
                

                <Button className='C' onClick={clear} label={"C"} style={{margin:"4px"}}></Button>
                <Button className='0' onClick={handleClick} label={0} style={{margin:"4px"}}></Button>
                <Button className='=' onClick={equalTo} label={"="} style={{margin:"4px"}}></Button>
                <Button className='/' onClick={(e)=>{handleClick(e);handleOpr(e);}} label={"/"} style={{margin:"4px"}}></Button>
                
        </div>
      </div>

      
      
    </div>
  )
}

export default App
