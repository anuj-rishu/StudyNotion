import './App.css';
import './index.css'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Signup from "./pages/Signup"
import {Routes,  Route } from 'react-router-dom';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div  className='w-screen min-h-screen  bg-black flex flex-col  '  >
     <Navbar  isLoggedIn={isLoggedIn} setLoggedIn={setIsLoggedIn} />


      <Routes>
        <Route path='/' element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/signup' element={<Signup  setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path='/dashboard' element={
        <PrivateRoute isLoggedIn={isLoggedIn} >
<Dashboard/>
        </PrivateRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;