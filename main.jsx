import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react';

const CLERK_KEY = 'pk_test_ZW5vcm1vdXMtc2hlcGhlcmQtMTIuY2xlcmsuYWNjb3VudHMuZGV2JA'; // Replace with the correct key
const clerk_key = import.meta.env.VITE_CLERK_KEY || CLERK_KEY;



createRoot(document.getElementById('root')).render(
 <StrictMode>
   <ClerkProvider publishableKey={clerk_key}>
     <App />
   </ClerkProvider>
 </StrictMode>,
);