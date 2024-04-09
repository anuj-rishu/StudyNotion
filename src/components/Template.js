import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import Loginform from './Loginform'
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div className='flex w-11/12 justify-between max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0' >
      <div  className=' w-11/12 max-w-[445px] '>
        <h1 className='text-white font-semibold text-[1.875rem] leading-[2.375rem] ' >{title}</h1>
        <p className=' text-[1rem] leading-[1.625rem mt-4] ' >
          <span className='  text-white ' >{desc1}</span>
          <br />

          <span className='text-blue-500 italic '  >{desc2}</span>
        </p>
        {formtype === "signup" ? <SignupForm setIsLoggedIn={setIsLoggedIn} /> : <Loginform setIsLoggedIn={setIsLoggedIn} />}
        <div className='flex w-full items-center my-4 gap-x-2 ' >
          <div className=' w-full h-[1px] bg-slate-600  ' ></div>
          <p className=' text-white   font-medium leading-[1.375rem] '>OR</p>
          <div className=' w-full h-[1px]  bg-slate-600  ' ></div> 
        </div>
        <button className=' w-full flex justify-center items-center rounded-[8px] font-medium   text-white  bg-slate-800  border border-gray-600  px-[12px] py-[8px] gap-x-2 mt-6  ' >
        <FcGoogle  />
          <p> Sign Up with google</p>
        </button>
      </div>
      <div className=' relative w-11/12 max-w-[450px] ' >
        <img src={frameImage} alt='pattern' width={558} height={504}/>
        <img className=' absolute -top-4 right-4' src={image} alt='pattern' loading='lazy' width={558}  height={490} />
      </div>
    </div>
  )
}

export default Template