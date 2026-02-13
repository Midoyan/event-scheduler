import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from "./Home"
import Layout from './Layout'
import Event from './Event.jsx'
import NotFound from "./NotFound";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="event/:id" element={<Event />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
