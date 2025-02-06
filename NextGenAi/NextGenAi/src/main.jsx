import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ContextProvider } from './Componets/Context.jsx'
import {ClerkProvider} from '@clerk/clerk-react'
import { BrowserRouter, Routes, Route } from "react-router";
import Histroy from './Componets/Histroy.jsx'

  
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<ContextProvider>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      
      <Routes>
        <Route  path="/" element={<App/>} />
        <Route  path="/histroy" element={<Histroy/>} />


      </Routes>
    </ClerkProvider>
  </ContextProvider>

  </BrowserRouter>,
)

