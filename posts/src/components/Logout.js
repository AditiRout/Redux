import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import "./Login.css"

const Logout = () => {
    const dispatch=useDispatch();


    const handleLogout=(e)=>{
        e.preventDefault();
        dispatch(logout())
    }
 const user=useSelector(selectUser)
  return (
    <div className='logout'>
        <h1>Welcome <span className='user__name'>{user.name}</span></h1>
        <button className='logout__button' onClick={(e)=>{handleLogout(e)}}>Logout</button>
    </div>
  )
}

export default Logout