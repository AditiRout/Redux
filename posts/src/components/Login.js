import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'


import './Login.css'

const Login = () => {
    const [name, setname] = useState()
    const [email, setemail] = useState()

    const [password, setpassword] = useState()

    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
      e.preventDefault()
      dispatch(login({
        name:name,
        email:email,
        password:password,
        loggedIN:true,
      }))
    }


  return (
    <div className='login'>
        <form className='login__form' onSubmit={(e)=>handleSubmit(e)}>
            <h1>Login here</h1>
            <input type='name' placeholder='Name' value={name} onChange={(e)=>setname(e.target.value)}/>
            <input type='email' placeholder='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
            <input type='password' placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
            <button type='submit' className='submit__btn'>submit</button>
        </form>
    </div>
  )
}

export default Login