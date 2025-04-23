import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AuthProvider from './providers/AuthProvider'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import router from './routes/Routes'
import { Toaster } from 'react-hot-toast'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
        <Toaster position='left-bottom' reverseOrder={false} />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)
