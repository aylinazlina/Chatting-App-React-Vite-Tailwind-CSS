import React from 'react'
import Registration from './pages/Registration'
import SignIn from './pages/SignIn'
import Landing from './pages/Landing'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home';

const App = () => {
  return (
  <BrowserRouter>
  
  
  <Routes>
    <Route index element={<Landing/>}></Route>
    <Route path='/signup' element={<Registration/>}></Route>
    <Route path='/signin' element={<SignIn/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
  </Routes>
  
  </BrowserRouter>
  )
}

export default App
