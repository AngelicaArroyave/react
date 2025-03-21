import './styles.css'
import { CounterApp } from './CounterApp'
import { FirstApp } from './FirstApp'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={10} />
        {/* <FirstApp title='Angie' age={25} hobbie='Coding'/> */}
    </React.StrictMode>
)