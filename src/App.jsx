/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Header from './Header&Footer/Header'
import Footer from './Header&Footer/Footer'
import Home from './Pages/Home'
import Blogs from './Pages/Blogs'
import BlogDetails from './Components/BlogDetails'
import ScrollToTop from './Utils/ScrollToTop'
import Courses from './Pages/Courses'
import Contact from './Pages/Contact'
import AboutUs from './Pages/AboutUs'
import LoginPage from './admin/auth/LoginPage'
import ProtectedRoute from './Middleware/ProtectedRoute'
import Dashboard from './admin/Dashboard'
import Error404 from './Pages/Error404'
import AddBlog from './admin/AddBlog'
import AddBanner from './admin/AddBanner'
import BannerIndex from './admin/BannerIndex'
import BlogIndex from './admin/BlogIndex'
import GeneralSettings from './admin/GeneralSettings'
import ProfileRoutes from './admin/ProfileRoutes'
import Layout from './admin/Layout'
import AddCategory from './admin/AddCategory'
import AllCategories from './admin/AllCategories'
import EditBlog from './admin/EditBlog'



const tempBlogsData = [
  {
    id: 1,
    title: 'Sophia Mesabhi on Profitable and Sustainable Growth',
    desc: 'Sophia Mesabhi is a Senior Partner at Untitled Ventures. Frankie Sullivan sat down with her to chat about sustainable and profitable growth...',
    img: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=600',
    createdAt: '01 November 2024',
    author: 'Dipanita Biswas',
    redirectTo: '/blog-details'

  },
  {
    id: 2,
    title: 'Building Resilience for Mental Health and Success',
    desc: 'Sophia Mesabhi is a Senior Partner at Untitled Ventures. Frankie Sullivan sat down with her to chat about sustainable and profitable growth...',
    img: 'https://images.pexels.com/photos/806427/pexels-photo-806427.jpeg?auto=compress&cs=tinysrgb&w=600',
    createdAt: '01 November 2024',
    author: 'Dipanita Biswas',
    redirectTo: '/blog-details'

  },
  {
    id: 3,
    title: 'Supporting Mental Well-Being in Challenging Times',
    desc: 'Sophia Mesabhi is a Senior Partner at Untitled Ventures. Frankie Sullivan sat down with her to chat about sustainable and profitable growth...',
    img: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=600',
    createdAt: '01 November 2024',
    author: 'Dipanita Biswas',
    redirectTo: '/blog-details'

  },
]

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            {/* Public Routes with Header and Footer */}
            <Route
              element={
                <>
                  <Header />
                  <Outlet />
                  <Footer />
                </>
              }
            >
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Blogs tempBlogsData={tempBlogsData} />} />
              <Route path="/blogs/:id" element={<BlogDetails blogs={tempBlogsData} />} />
              <Route path="/our-courses" element={<Courses />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Route>

            {/* Auth Routes without Header and Footer */}
            <Route
              element={
                <>
                  <Outlet />
                </>
              }
            >


              <Route exact path="/admin" element={<LoginPage />} />
              <Route path="/admin/dashboard" element={<Layout />}>
                <Route index element={<Dashboard />} /> {/* Default dashboard */}
                <Route path='/admin/dashboard/add-blog' element={<AddBlog/>} />
                <Route path='/admin/dashboard/all-banner' element={<BannerIndex/>} />
                <Route path='/admin/dashboard/all-blogs' element={<BlogIndex/>}/>
                <Route path='/admin/dashboard/add-banners' element={<AddBanner/>} /> 
                <Route path='/admin/dashboard/general-setting' element={<GeneralSettings/>} />
                <Route path='/admin/dashboard/profile' element={<ProfileRoutes/>} />
                <Route path='/admin/dashboard/add-blog-category' element={<AddCategory/>}/>
                <Route path='/admin/dashboard/all-blog-category' element={<AllCategories/>}/>
                <Route path='/admin/dashboard/update-blog/:id' element={<EditBlog/>} />
              </Route>
              {/* Testing route */}
              <Route path='/admin/dev-dashboard' element={<Dashboard />} />

            </Route>

            {/* Catch-all route for undefined paths */}
            <Route path="*" element={<Error404 />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>

    </>
  )
}

export default App