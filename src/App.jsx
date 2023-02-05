import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import EnterName from './componenets/EnterName'
import './App.css'

function App() {
  //let count = 0
  const [count, setCounter] = useState(0)// Here we use array destructering to pick up the value 
                                          // 0 in useState is sent as a start value for our state. 

  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={() => { setCounter(count + 1)}}>
      count i { count }
      </button>
      <EnterName/>
    </div>
  )
}

export default App
