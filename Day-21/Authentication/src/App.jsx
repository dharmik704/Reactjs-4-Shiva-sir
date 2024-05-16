import { useState } from 'react'
import './App.css'
import Allroutes from '../Routes/Allroutes'
import Navbar from '../Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Allroutes/>
    </>
  )
}

export default App
