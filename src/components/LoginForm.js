import React, { useState } from 'react'

const LoginForm = ({setIsLoggedIn}) => {
const[name,setName]=useState("");
const[password,setPassword]=useState("")
const handlesubmit=(e)=>{
    e.preventDefault();
    setIsLoggedIn(true);
}
  return (
    <div>
        <form onSubmit={handlesubmit}>
<label htmlFor="name">Name:</label>
    <input type="text" id="name" onChange={(e)=>setName(e.target.value)}/>
    <br/>
    <br/>
    <label htmlFor="password">Password:</label>
    <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)}/>
    <br/>
    <br/>
    <button type='submit'>Login</button>
    </form>
    </div>
  )
}

export default LoginForm;