import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import {  toast } from 'react-toastify';

const Navbar = (props) => {
    let isLoggedIn =props.isLoggedIn;
    let setLoggedIn =props.setLoggedIn;

  return (
    <div className='flex justify-evenly'>
<Link to="/">
    <img src={logo} alt='logo '  width={160} height={32} loading='lazy'/>

</Link>
<nav>
<ul className='flex gap-3 ' >
   <li>
    <Link to="/">Home</Link>
   </li>
   <li>
    <Link to="/">About</Link>
   </li>
   <li>
    <Link to="/">Conatact</Link>
   </li>
    
</ul>
</nav>

<div className='flex ml-5 gap-3' >
{ !isLoggedIn &&
    <Link to="/login" >
   <button>
    login
    </button> 
    </Link>
}
{ !isLoggedIn &&
    <Link to="/signup" >
   <button > 
    Signup
    </button> 
    </Link>
}
{ isLoggedIn &&
    <Link to="/logout" >
   <button onClick={() => {
    setLoggedIn(false);
    toast.success("Logged Out")
   }} >
    
    Log Out
    </button> 
    </Link>
}
{ isLoggedIn &&
    <Link to="/dashboard" >
   <button>
    Dashboard
    </button> 
    </Link>
}
</div>


    </div>
  )
}

export default Navbar