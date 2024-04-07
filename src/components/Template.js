import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import Loginform from './Loginform'

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>
        {formtype === "signup" ? <SignupForm setIsLoggedIn={setIsLoggedIn} /> : <Loginform setIsLoggedIn={setIsLoggedIn} />}
        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <button>
          <p> Sign Up with google</p>
        </button>
      </div>
      <div>
        <img src={frameImage} alt='pattern' width={558} height={504}/>
        <img src={image} alt='pattern' loading='lazy' width={558}  height={490} />
      </div>
    </div>
  )
}

export default Template