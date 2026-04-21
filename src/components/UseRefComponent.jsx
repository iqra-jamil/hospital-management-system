import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
const UseRefComponent = () => {
const [inputvalue,setInputvalue]=useState('')
const inputRef=useRef(null);
const printInputvalue=()=>{
    console.log(inputvalue);
    inputRef.current.focus();
}
  return (
    <div>
    <input value={inputvalue} onChange={((e)=>setInputvalue(e.target.value))} ref={inputRef} placeholder='enter something'/>
    <button onClick={()=>printInputvalue()}>focus input</button>
    </div>
  )
}

export default UseRefComponent
