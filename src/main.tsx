import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvider } from './context/AuthContext'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <RouterProvider router={MyRouter} /> */}
    
    <AuthProvider>
    <App />
    </AuthProvider>
  </React.StrictMode>,
)
