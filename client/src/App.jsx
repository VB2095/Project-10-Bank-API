import Navbar from './components/Navbar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import NotFound from './pages/404'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
