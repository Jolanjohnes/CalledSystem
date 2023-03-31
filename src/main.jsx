import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { MyRoutes } from './routes/router'
import { AuthProvider } from './contexts/authContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MyRoutes />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
