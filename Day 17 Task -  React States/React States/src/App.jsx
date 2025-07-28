import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/Home/Home'
import Parent from './component/Parent/Parent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <Parent />
    </>
  )
}

export default App
