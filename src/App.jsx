import './App.css'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Login from './Pages/Login'
import Profile from './Dash/Profile'
import Home from './Pages/Home'
import Pricing from './Pages/Pricing'
import Register from './Pages/Register'
import Contact from './Pages/Contact'
import Library from './Dash/Library'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const authenticate = async () => {
    try{
      const token = localStorage.getItem('token');
      console.log(token);
      if(token) {
        setLoggedIn(true)
      }else{
        setLoggedIn(false)
      }
    }catch(err) {
      console.log(err)
      setLoggedIn(false)
    }
  }
  
 
  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  }

  useEffect(() => {
    authenticate();  
  },[]);


  return (
    <BrowserRouter>
      <Navbar loggedIn={loggedIn} handleLogout={handleLogout}/>
      <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path = '/pricing' element={<Pricing/>}></Route>
       <Route path='/register' element={<Register/>}></Route>
       <Route path='/contact' element={<Contact/>}></Route>
       <Route path='/dash/profile' element={<Profile/>}></Route>
       <Route path='/dash/library' element={<Library/>}></Route>
      </Routes>
    </BrowserRouter>  
    
  )
}

export default App
