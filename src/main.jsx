import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DrinkContextComponent from './contexts/DrinkContextComponent.jsx'
import GoogleContextProvider from './contexts/GoogleContextProvider.jsx'
import AuthContextProvider from './contexts/AuthContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <DrinkContextComponent>
        <GoogleContextProvider>
          <App />
        </GoogleContextProvider>
      </DrinkContextComponent>
    </AuthContextProvider>
  </React.StrictMode>
)
