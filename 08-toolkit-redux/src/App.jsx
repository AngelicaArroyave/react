import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { increment, decrement, incrementBy } from './store/slices/counter/counterSlice'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const { counter } = useSelector(state => state.counter)  
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>Count is {counter}</p>
        <p>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(incrementBy(2))}>Increment by 2</button>
        </p>
      </div>
    </>
  )
}

export default App
