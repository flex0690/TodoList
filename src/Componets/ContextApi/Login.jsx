import React, { useContext, useState } from 'react'
import UserContext from './UserContext';


const Login = () => {
    const [username,setUsername]=useState("");
    // const [showname,setShowname]=useState("");
    const {user,setUser}=useContext(UserContext);

    // const user=useContext(UserContext);
    const handle=(e)=>{
        e.preventDefault();
        setUser({username});
        // setShowname(username);
    }
  return (
    <div>
        <input
            type='text'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder='enter you name'
        />
        <button
        onClick={handle}
        >Submit</button>
      
        <input
            type='text'
            value={user?.username}
            placeholder='your name'
        />
    </div>
  )
}

export default Login;
