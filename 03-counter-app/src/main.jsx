import './styles.css'
import { CounterApp } from './CounterApp'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={10} />
    </React.StrictMode>
)