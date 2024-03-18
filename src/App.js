import { React, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import AOS from 'aos'
import "aos/dist/aos.css"
import LandingPage from './Pages/LandingPage'
import NotFoundPage from './Pages/NotFoundPage'

function App() {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1800,
    })
  }, [])

  return (
    <div className='App'>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;