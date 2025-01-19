import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './styles/globals.css'
import './styles/normalize.css'
import './styles/custom_styles.css'
import { App } from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
