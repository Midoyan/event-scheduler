import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from "./pages/HomePage.jsx"
import Layout from './layouts/Layout.jsx'
import Event from './components/Event.jsx'
import NotFound from "./pages/NotFound.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="event/:id" element={<Event />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
