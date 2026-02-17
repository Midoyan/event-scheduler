import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from "./pages/HomePage.jsx"
import Layout from './layouts/Layout.jsx'
import Event from './components/Event.jsx'
import NotFound from "./pages/NotFound.jsx";
import SignInPage from './pages/SignInPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import ProtectedLayout from './layouts/ProtectedLayout.jsx'
import NewEventPage from './pages/NewEventPage.jsx'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<ProtectedLayout><HomePage /></ProtectedLayout>} />
        <Route path="events/:id" element={<ProtectedLayout><Event /></ProtectedLayout>} />
        <Route path="login" element={<SignInPage />} />
        <Route path="register" element={<SignUpPage />} />
	      <Route path="events/new" element={<ProtectedLayout><NewEventPage /></ProtectedLayout>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App