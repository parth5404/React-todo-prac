import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SampleKeyboard from './App1.jsx'
import Pagination from './Pagination.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pagination/>
  </StrictMode>,
)
