import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Download from './pages/Download'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <p className="read-the-docs">
        Click onasdasde
      </p>
      <Login/>
      <Download/>
    </>
  )
}

export default App
