import React, { useState } from "react";



const LoginForm = () => {
    const [firstname,setFirstName]=useState("");
    const [lastname,setLastname]=useState("");

    const getValues = () => {
        console.log(firstname)
        console.log(lastname)
    }

    return (
        <>
        <h1>Login Form</h1>
        <div>
        <input type="text" 
        name="firstname"
        placeholder="firstname"
        onChange={(e)=>setFirstName(e.target.value)}
        />
        </div>
        <div>
        <input type="text" 
        placeholder="lastname"
        onChange={(e)=>setLastname(e.target.value)}
        />
        </div>
        <button onClick={getValues}>Show Values</button>
        
        </>
    )
}

export default LoginForm;