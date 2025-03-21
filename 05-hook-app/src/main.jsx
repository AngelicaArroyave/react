// import './08-useReducer/intro-reducer.js'
// import { CallbackHook } from './06-memos/CallbackHook.jsx'
// import { CounterApp } from './01-useState/CounterApp.jsx'
// import { FocusScreen } from './04-useRef/FocusScreen.jsx'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx'
// import { HooksApp } from './HooksApp.jsx'
// import { Layout } from './05-useLayoutEffect/Layout.jsx'
// import { MemoHook } from './06-memos/MemoHook.jsx'
// import { Memorize } from './06-memos/Memorize.jsx'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks.jsx'
// import { Padre } from './07-tarea-memo/Padre.jsx'
// import { SimpleForm } from './02-useEffect/SimpleForm.jsx'
// import { TodoApp } from './08-useReducer/TodoApp.jsx'
// import CounterWithCustomHook from './01-useState/CounterWithCustomHook.jsx'
// import React from 'react'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MainApp } from './09-useContext/MainApp.jsx'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
)