import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EventList from './components/EventList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EventList/>
    </>
  )
}

export default App
