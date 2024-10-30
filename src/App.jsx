/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header&Footer/Header'
import Home from './Pages/Home'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App