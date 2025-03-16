import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import LandingPage from './pages/LandingPage'
import AddRestPage from './pages/add_restaurants_page/AddRestPage';


//shadcn imports down
import { Button } from './components/ui/button'
import Footer from './components/Footer';

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/AddRest" element={<AddRestPage />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
