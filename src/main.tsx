import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/app.css'

import App from './App'

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
