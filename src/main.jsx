import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Snowfall from 'react-snowfall'
import CryptoImage from "./assets/crypto.png"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Snowfall
     snowflakeCount={50}
    
     />
    <App />
  </React.StrictMode>,
)
