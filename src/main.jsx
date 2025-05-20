import React from 'react'; 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient();

const container = document.getElementById('app');

createRoot(container).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
       <BrowserRouter>
          <App />
       </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)