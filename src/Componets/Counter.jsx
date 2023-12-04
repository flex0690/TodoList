import React, { useState } from 'react'

const Counter = () => {
    const [cnt,setcnt]=useState(0);
    
    const inc=()=>{
        setcnt((prevcounter)=>{
            return prevcounter+1;
        });
        setcnt((prevcounter)=>{
            return prevcounter+1;
        });
       
    }
    const dec=()=>{
        setcnt(cnt-1);
    }
  return (
    <div>
        <div>{cnt}</div>
        <button onClick={inc}> Increment</button>
        <br></br>
        <button onClick={dec}> Decrement</button>
        {/* <button> click me</button> */}
    </div>
  )
}

export default Counter
