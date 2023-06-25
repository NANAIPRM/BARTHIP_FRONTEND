import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DrinkContextComponent from './contexts/DrinkContextComponent.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DrinkContextComponent>
      <App />
    </DrinkContextComponent>
  </React.StrictMode>
)
