import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Login from './Component/Login'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/addpage" element={<Home />}/>
      </Routes>
    </div>
  )
}
