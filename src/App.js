import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Detail from './components/Detail'
import Home from './components/Home'


export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/detail/:id' element={<Detail/>}/>
    </Routes>
  )
}
