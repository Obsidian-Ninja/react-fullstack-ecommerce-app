import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import ShopContextProvider from "./context/ShopContext.jsx"

createRoot(document.getElementById('root')).render(
  // So we get the support of react router dom in the entire project
  <BrowserRouter>
  {/* So we can use this in all our project all components */}
    <ShopContextProvider >
      <App />
    </ShopContextProvider>
  </BrowserRouter>,
)
