import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Box } from '@mui/material'
import App from './App.jsx'
import './index.css'
import { Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Box 
       bgcolor={"#fee8da"}
       overflowX="hidden"  // Prevent horizontal overflow
       minHeight="100vh"
       
       maxWidth={"100%"}
       flexDirection="column"
       boxSizing="border-box" // Ensure padding and borders are included in the element's total width and height
      //  overflow={"hidden"}
    >
    <App />
    </Box>
  </StrictMode>,
)
