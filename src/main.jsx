import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './auth-provider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import Route from './route/Route.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Route}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
