/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header&Footer/Header'
import Footer from './Header&Footer/Footer'
import Home from './Pages/Home'
import Blogs from './Pages/Blogs'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blogs' element={<Blogs />} />

        </Routes>
        <Footer />

      </BrowserRouter>

    </>
  )
}

export default App