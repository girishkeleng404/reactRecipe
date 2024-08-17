 
import React from 'react'
// import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserContextProvider } from './UserContex.jsx'
import { BrowserRouter } from 'react-router-dom'

 createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <BrowserRouter>

    <UserContextProvider>
      <App />
    </UserContextProvider>

    </BrowserRouter>
  </React.StrictMode>
)
