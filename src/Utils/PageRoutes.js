import { React } from 'react'
import { Routes, Route } from 'react-router-dom'

import LandingPage from '../Pages/LandingPage'
import ProgramLayout from '../Pages/ProgramLayout'
import AboutPage from '../Pages/AboutPage'
import ContactFormPage from '../Pages/ContactFormPage'
import NotFoundPage from '../Pages/NotFoundPage'

const PageRoutes = () => {

    return (

        <Routes>

            <Route index path="/" element={<LandingPage />} />

            <Route path='programs' >

                <Route path=":url" element={<ProgramLayout />} />
                {/* <Route path=":id" element={<ProgramLayout />} /> */}

            </Route>

            <Route path="/about" element={<AboutPage />} />

            <Route path="/contact" element={<ContactFormPage />} />

            <Route path="*" element={<NotFoundPage />} />

        </Routes>
    )
}

export default PageRoutes