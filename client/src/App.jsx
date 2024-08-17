import React from 'react'; // If needed
 

import './App.css'
import axios from 'axios' 
import Layout from './Layout'
import { Routes, Route } from 'react-router-dom'

function App() {

   axios.defaults.baseURL = 'http://localhost:4000/'
   axios.defaults.withCredentials = true
   

  return (
  <Routes>
    <Route path="/" element={<Layout/>} />
  </Routes>
  )
}

export default App
