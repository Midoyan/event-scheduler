import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from "./Home"
import Layout from './Layout'
import Event from './Event.jsx'



function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="event/:id" element={<Event />} />
      </Route>
    </Routes>
  )
}

export default App
