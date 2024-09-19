import { useState } from 'react'
import './App.css'
import Formlist from './Formlist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Formlist />
    </>
  )
}

export default App
