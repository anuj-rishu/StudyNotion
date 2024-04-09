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
    <form className='flex flex-col w-full gap-y-4 mt-6 ' onSubmit={submitHandler} >
<label className=' w-full' >
    <p className=' text-[0.875rem] text-white mb-1 leading-[1.375rem] '>
        Email Address <sup className='text-pink-700'>*</sup>
    </p>
    <input 
    className= ' border-gray-600  bg-slate-500 rounded-[0.5rem] text-yellow-50 w-full p-[12px]   '
    required
    type="email"
     name="email"
   
      value={formData.email}
      onChange={changeHandler}
      placeholder='Enter email id'
      />
</label>

<label className=' w-full relative'>
    <p className=' text-[0.875rem] text-white mb-1 leading-[1.375rem] '>
        Password  <sup className='text-pink-700'>*</sup>
    </p>
    <input 
    className= ' border-gray-600  bg-slate-500 rounded-[0.5rem] text-yellow-50 w-full p-[12px]   '
    required
    type={showPassword ? ("text") : ("password")}
     name=" password"
      
      value={formData.password}
      onChange={changeHandler}
      placeholder=' Enter password'
      />

      <span className=' absolute  right-3 top-[38px] cursor-pointer '
       onClick={()=> setshowPassword((prev)=> !prev)}>
        {showPassword ?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />):(<AiOutlineEye fontSize={24} fill='#AFB2BF'  />)}
      </span>
      <Link to="#"
      
      >
      <p  className=' text-xs mt-2  text-blue-500 max-w-max ml-auto'>Forget Password</p>
      </Link>
</label>

<button className=' bg-yellow-300 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6'  >
    Sign In
</button>




  </form>
  )
}

export default Loginform