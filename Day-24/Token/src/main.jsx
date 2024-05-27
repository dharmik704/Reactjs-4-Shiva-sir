import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Isauthcontextprovider from '../Contextprovider/Isauthcontextprovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Isauthcontextprovider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Isauthcontextprovider>
)
