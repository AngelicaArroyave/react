import './app.css'
import { BrowserRouter } from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { HeroesApp } from './HeroesApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>
)