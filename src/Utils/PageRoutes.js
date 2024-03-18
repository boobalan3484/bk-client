import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './Components/Hero'
// import Programs from './Components/Programs'
import App from './App'

const PageRoutes = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path='/' element={<App />} />
                {/* <Route path='/program' element={<Programs />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default PageRoutes