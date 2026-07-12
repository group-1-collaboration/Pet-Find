import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { FavouritesProvider } from './components/context/FavouritesContext'
import { AuthProvider } from './context/AuthContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
       <AuthProvider>
        <FavouritesProvider>
          <App />
        </FavouritesProvider>
       </AuthProvider>
     </BrowserRouter>
  </StrictMode>,
)
