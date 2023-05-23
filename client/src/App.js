import React from 'react'
import { Routes, Route } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'
import './css/admin.css'
import './css/animate.css'
// import './css/bootstrap.min.css'
import './css/nice-select.css'
import './css/slick.css'
import './css/xzoom.css'
import './css/owl.carousel.min.css'
import './css/owl.theme.default.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/service.css'
import 'react-slideshow-image/dist/styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Component/Home'
import CardSlider from './Component/CardSlider'
import Main from './Component/course/Main'
import Blog from './Component/Blog'
import Service from './Component/Services/Service'
import JobSlide from './Component/AdminPanel/JobSlide'
import Login from './Component/AdminPanel/Login'
import UserProtected from './Component/Protected Router/UserProtected'
import Contact from './Component/Contact'
import AdmissionForm from './Component/AdmissionForm'
import StudentDetails from './Component/AdminPanel/StudentDetails'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/student" exact element={<CardSlider/>}/>
        <Route path='/courseadmission' exact element={<Main/>}/>
        <Route path='/blog' exact element={<Blog/>}/>
        <Route path='/service' exact element={<Service/>}/>
        <Route path='/addslide' exact element={<UserProtected><JobSlide/></UserProtected>}/>
        <Route path='/adminlogin' exact element={<Login/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
        <Route path='form' element={<AdmissionForm/>}/>
        <Route path='/adminpanelstudentdetail' exact element={<UserProtected><StudentDetails/></UserProtected>}/>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
