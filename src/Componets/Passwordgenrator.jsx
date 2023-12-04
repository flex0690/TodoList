import React, { useCallback, useEffect, useRef, useState } from 'react'
import './Password.css';

const Passwordgenrator = () => {
    const mystyle={
        width:"20px",
        height:"20px"

    }
    const [length,setlength]=useState(0);
    const [Num, setNum]=useState(false);
    const [char,setchar]=useState(false);
    const [password,setpassword]=useState("");

    const copy=useRef(null);

    const copied=()=>{
        window.navigator.clipboard.writeText(password);
        let temp=['red','blue','green','cyan','yellow','purple']
        copy.current?.select()
       
    }



    const passwordGenrator=useCallback(()=>{
        let temp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        
        if(Num) temp+="0123456789"
        if(char) temp+="~!@#$%^7*()_+={}:";
        
        let pass="";
        console.log(temp.length)
        for(let i=0;i<length;i++)
        {
           let c=Math.floor(Math.random()*temp.length)
           //console.log(c);
           pass+=temp.charAt(c);
           //console.log(pass);
        }
        setpassword(pass);

        // console.log(length);
        // console.log(Num);
        // console.log(char);
        // console.log(password);

    },[length,Num,char,setpassword]);

    //passwordGenrator();
    useEffect(()=>{
        passwordGenrator()
    },[length,Num,char,passwordGenrator])





  return (
    <div className='container' >
{/* heading */}
        <div>
            <h1 >Password Generator </h1>
        </div>


{/* password */}
        <div class='password'>
            <input type='text'
            placeholder='Password'
            readOnly
            value={password}
            ref={copy}
            />
            <button id="copy" onClick={copied}>Copy</button>   
        </div>




        <div className='elements'>
{/* range */}

            <input type="range"
            min={3}
            onChange={(e)=>{
                setlength(e.target.value);
            }}
            />
            <label for="Length">  Length{length}</label>

{/* cehckbox for number */}
            <input
                type='checkbox'
                style={mystyle}
                onChange={()=>{
                    setNum((prev)=>setNum(!prev));
                }}
            />
            <label for="Number"> Number</label>


{/* checkbox for charcter */}
            <input
                style={mystyle}
                type='checkbox'
                onChange={()=>{
                    setchar((prev)=>setchar(!prev));
                }}
            />
            <label for="charcter">  Charcter </label>
        </div>
    </div>
  )
}

export default Passwordgenrator
