import { React, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import AOS from 'aos'
import "aos/dist/aos.css"
import LandingPage from './Pages/LandingPage'
import NotFoundPage from './Pages/NotFoundPage'
import ContactFormPage from './Pages/ContactFormPage'
import AboutPage from './Pages/AboutPage'
import ProgramLayout from './Pages/ProgramLayout'


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
        <Route index path="/" element={<LandingPage />} />
        <Route path='programs' >
          <Route path=":id" element={<ProgramLayout />} />
        </Route>

        <Route path="/about" element={<AboutPage />} />

        <Route path="/contact" element={<ContactFormPage />} />

        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </div>
  );
}

export default App;