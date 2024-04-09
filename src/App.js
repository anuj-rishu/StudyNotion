import './App.css';
import './index.css'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Signup from "./pages/Signup"
import {Routes,  Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div  className='w-screen h-screen  bg-black flex flex-col  '  >
     <Navbar  isLoggedIn={isLoggedIn} setLoggedIn={setIsLoggedIn} />


      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/signup' element={<Signup  setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;