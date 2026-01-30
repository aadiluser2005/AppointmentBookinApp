import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BookingProvider } from './Contexts/BookingContext.jsx'


createRoot(document.getElementById('root')).render(
  <BookingProvider>
    <App />
    </BookingProvider>
  
)
