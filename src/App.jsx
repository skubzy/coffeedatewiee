import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Stuti from './pages/Stuti'
import Button from './components/Button.jsx'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stuti" element={<Stuti />} />
        <Route path="/about" element={<About />} />
      </Routes>
   
    </div>
  )
}


export default App
