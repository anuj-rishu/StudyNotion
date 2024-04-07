import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link , useNavigate} from 'react-router-dom';
import {  toast } from 'react-toastify'

const Loginform = ({setIsLoggedIn }) => {
  const navigate = useNavigate()
  const [formData , setFormData] = useState({
    email:"" ,password: ""
  })

  const[showPassword, setshowPassword] =useState(false)
  function changeHandler(event){
    setFormData ((prevData)=>({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  }

  function submitHandler(event){
    event.preventDefault( );
    setIsLoggedIn(true)
    toast.success("Logged In")
    navigate("/dashboard")
  }
  return (
    <form onSubmit={submitHandler} >
<label>
    <p>
        Email Address <sup>*</sup>
    </p>
    <input 
    required
    type="email"
     name="email"
   
      value={formData.email}
      onChange={changeHandler}
      placeholder='Enter email id'
      />
</label>

<label>
    <p>
        Password <sup>*</sup>
    </p>
    <input 
    required
    type={showPassword ? ("text") : ("password")}
     name="password"
      
      value={formData.password}
      onChange={changeHandler}
      placeholder='password'
      />

      <span onClick={()=> setshowPassword((prev)=> !prev)}>
        {showPassword ?(<AiOutlineEyeInvisible />):(<AiOutlineEye />)}
      </span>
      <Link to="#">
      <p>Forget Password</p>
      </Link>
</label>

<button  >
    Sign In
</button>
  </form>
  )
}

export default Loginform