import { useState } from 'react'
import './App.css'
import  { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing } from './components/Landing.tsx'
import { Room } from './components/Room.tsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'  element={<Landing />} />
      <Route path='/room'  element={<Room />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
