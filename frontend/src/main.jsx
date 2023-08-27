import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import {RouterProvider} from 'react-router-dom';
import router from './routes/routes.js'


ReactDOM.createRoot(document.getElementById('root')).render(
 <HelmetProvider>
  <RouterProvider router={router}/>
 </HelmetProvider>
)
