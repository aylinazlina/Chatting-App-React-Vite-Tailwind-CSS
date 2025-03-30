import React from 'react'
import Registration from './pages/Registration'
import SignIn from './pages/SignIn'
import { BrowserRouter, Routes, Route } from "react-router";

const App = () => {
  return (
  <BrowserRouter>
  
  
  <Routes>
    <Route path='/signup' element={<Registration/>}></Route>
    <Route path='/signin' element={<SignIn/>}></Route>
  </Routes>
  
  </BrowserRouter>
  )
}

export default App
