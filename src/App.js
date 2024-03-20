import { React, useEffect } from 'react'

import AOS from 'aos'
import "aos/dist/aos.css"

import PageRoutes from './Utils/PageRoutes'



function App() {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1800,
    })
  }, [])

  return (
    <div className='App'>
<<<<<<< HEAD
      <PageRoutes />
=======
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route path='programs' >
          <Route path=":id" element={<ProgramLayout />} />
        </Route>

        <Route path="/about" element={<AboutPage />} />

        <Route path="/contact" element={<ContactFormPage />} />

        <Route path="*" element={<NotFoundPage />} />

      </Routes>
>>>>>>> 4910340af867a6e93fc58712f60b58ca6478fa25
    </div>
  );
}

export default App;