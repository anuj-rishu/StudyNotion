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
  const [accountType, setAccountType] = useState("student")
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

  <div className='flex bg-slate-800 p-1 gap-x-1 my-6 rounded-full max-w-max '>
  <button onClick={()=> setAccountType("student")} className={`${accountType==="student"
  ?
  "bg-black text-white"
  :"bg-transparent text-yellow-50"} py-2 px-5 rounded-full transition-all duration-200 `}>
      Student
    </button >
    <button onClick={()=> setAccountType("instructor")} className={`${accountType==="instructor"
  ?
  "bg-black text-white"
  :"bg-transparent text-yellow-50"} py-2 px-5 rounded-full transition-all duration-200 `}>
      Instructor
    </button>
  </div>
    
    <form onSubmit={submitHandler}>
     
<div className=' flex gap-x-4 mt-4' >
      <label className='w-full'>
        <p className=' text-[0.875rem] text-white mb-1 leading-[1.375rem] ' >First Name <sup className='text-pink-700'>*</sup></p>
        <input
         className= ' border-gray-600  bg-slate-500 rounded-[0.5rem] text-yellow-50 w-full p-[12px]   '
        required
        type='text'
        name='firstName'
        onChange={changeHandler}
        placeholder='Enter first name'
        value={formdata.firstName}
        />
      </label>
      <label className='w-full'>
        <p className=' text-[0.875rem] text-white mb-1 leading-[1.375rem] '>Last Name <sup className='text-pink-700'>*</sup></p>
        <input
         className= ' border-gray-600  bg-slate-500 rounded-[0.5rem] text-yellow-50 w-full p-[12px]   '
        required
        type='text'
        name='lastName'
        onChange={changeHandler}
        placeholder='Enter last name'
        value={formdata.lasttName}
        />
      </label>
      </div>

      <label>
        <p className=' mt-4 text-[0.875rem] text-white mb-1 leading-[1.375rem] '>Email Address <sup className='text-pink-700'>*</sup></p>
        <input
         className= ' border-gray-600  bg-slate-500 rounded-[0.5rem] text-yellow-50 w-full p-[12px]   '
        required
        type='email'
        name='email'
        onChange={changeHandler}
        placeholder='Enter your email'
        value={formdata.email}
        />
      </label>
    
      <div className=' flex gap-x-4 mt-4'>
      <label className=' w-full relative'>
        <p className=' text-[0.875rem] text-white mb-1 leading-[1.375rem] '>Create Password <sup className='text-pink-700'>*</sup></p>
        <input
         className= ' border-gray-600  bg-slate-500 rounded-[0.5rem] text-yellow-50 w-full p-[12px]   '
        required
        type={showPassword ? ("text"): ("password")}
        name='password'
        onChange={changeHandler}
        placeholder='Enter your password'
        value={formdata.password}
        />

<span 
className=' absolute  right-3 top-[38px] cursor-pointer '
onClick={()=> setshowPassword((prev)=> !prev)}>
        {showPassword ?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />):(<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
      </span>
      </label>

      <label className=' w-full relative' >
        <p className=' text-[0.875rem] text-white mb-1 leading-[1.375rem] '>Confirm Password <sup className='text-pink-700'>*</sup></p>
        <input
         className= ' border-gray-600  bg-slate-500 rounded-[0.5rem] text-yellow-50 w-full p-[12px]   '
        required
        type={showPassword ? ("text"): ("password")}
        name='confirmpassword'
        onChange={changeHandler}
        placeholder='Confirm Password'
        value={formdata.confirmpassword}
        />

<span 
className=' absolute  right-3 top-[38px] cursor-pointer '
onClick={()=> setshowPassword((prev)=> !prev)}>
        {showPassword ?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />):(<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
      </span>
      </label>
      </div>

      <button className='  w-full bg-yellow-300 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6' >
        Create Account
      </button>

      
    </form>
 </div>


  )
}

export default SignupForm