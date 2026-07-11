import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { FavouritesProvider } from './components/context/FavouritesContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavouritesProvider>
        <App />
    </FavouritesProvider>
import { AuthProvider } from './context/AuthContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
       <AuthProvider>
         <App />
       </AuthProvider>
     </BrowserRouter>
  </StrictMode>,
)
