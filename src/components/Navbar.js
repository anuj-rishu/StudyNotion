import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import {  toast } from 'react-toastify';

const Navbar = (props) => {
    let isLoggedIn =props.isLoggedIn;
    let setLoggedIn =props.setLoggedIn

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto '>
<Link to="/">
    <img src={logo} alt='logo '  width={160} height={32} loading='lazy'/>

</Link>
<nav>
<ul className='flex gap-3 text-white ' >
   <li>
    <Link to="/">Home</Link>
   </li>
   <li>
    <Link to="/">About</Link>
   </li>
   <li>
    <Link to="/">Contact</Link>
   </li>
    
</ul>
</nav>

<div className='flex items-center gap-x-4 ' >
{ !isLoggedIn &&
    <Link to="/login" >
   <button className=' bg-slate-800  text-white py-[8px] px-[12px] rounded-[8px] border border-gray-600  ' >
    Login
    </button> 
    </Link>
}
{ !isLoggedIn &&
    <Link to="/signup" >
   <button className=' bg-slate-800  text-white py-[8px] px-[12px] rounded-[8px] border border-gray-600  ' > 
    Signup
    </button> 
    </Link>
}
{ isLoggedIn &&
    <Link to="/logout" >
   <button className=' bg-slate-800  text-white        py-[8px] px-[12px] rounded-[8px] border border-gray-600  ' onClick={() => {
    setLoggedIn(false);
    toast.success("Logged Out")
    
   }} >
    
    Log Out
    </button> 
    </Link>
}
{ isLoggedIn &&
    <Link to="/dashboard" >
   <button  className=' bg-slate-800  text-white py-[8px] px-[12px] rounded-[8px] border border-gray-600  ' >
    Dashboard
    </button> 
    </Link>
}
</div>


    </div>
  )
}

export default Navbar