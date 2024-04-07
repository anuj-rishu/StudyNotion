import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {  toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {
  const navigate = useNavigate()
  const [formdata , setFormData] =useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmpassword:""
  })
  const [showPassword , setshowPassword]=  useState(false)
  function changeHandler(event){
    setFormData ((prevData)=>({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  }

  function submitHandler (event){
event.preventDefault()
if(formdata.password !== formdata.confirmpassword){
  toast.error("Password do not match")
  return
}
setIsLoggedIn(true);
toast.success("Account Created")
const accountData = {

  ...formdata
}
console.log(formdata)
navigate("/dashboard")
  }

  return (
 <div>

  <div>
  <button>
      Student
    </button>
    <button>
      Instructor
    </button>
  </div>
    
    <form onSubmit={submitHandler}>
     

      <label>
        <p>First Name <sup>*</sup></p>
        <input
        required
        type='text'
        name='firstName'
        onChange={changeHandler}
        placeholder='Enter first name'
        value={formdata.firstName}
        />
      </label>
      <label>
        <p>Last Name <sup>*</sup></p>
        <input
        required
        type='text'
        name='lastName'
        onChange={changeHandler}
        placeholder='Enter last name'
        value={formdata.lasttName}
        />
      </label>

      <label>
        <p>Email Adress <sup>*</sup></p>
        <input
        required
        type='email'
        name='email'
        onChange={changeHandler}
        placeholder='Enter your email'
        value={formdata.email}
        />
      </label>
    
      <div>
      <label>
        <p>Create Password <sup>*</sup></p>
        <input
        required
        type={showPassword ? ("text"): ("password")}
        name='password'
        onChange={changeHandler}
        placeholder='Enter your password'
        value={formdata.password}
        />

<span onClick={()=> setshowPassword((prev)=> !prev)}>
        {showPassword ?(<AiOutlineEyeInvisible />):(<AiOutlineEye />)}
      </span>
      </label>

      <label>
        <p>Confirm Password <sup>*</sup></p>
        <input
        required
        type={showPassword ? ("text"): ("password")}
        name='confirmpassword'
        onChange={changeHandler}
        placeholder='Confirm Password'
        value={formdata.confirmpassword}
        />

<span onClick={()=> setshowPassword((prev)=> !prev)}>
        {showPassword ?(<AiOutlineEyeInvisible />):(<AiOutlineEye />)}
      </span>
      </label>
      </div>

      <button>
        Create Account
      </button>

      
    </form>
 </div>


  )
}

export default SignupForm