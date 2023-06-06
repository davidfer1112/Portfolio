import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx';
import Prerender from './prerender.jsx';
import AppEs from './appEs.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <Prerender />
  </React.StrictMode>,
)
