import React from 'react'
import { Routes, Route } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'
import './css/admin.css'
import './css/animate.css'
import './css/course.css'
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
import MobileTesting from './Component/Services/StandardSQA/MobileTesting'
import ManualTesting from './Component/Services/StandardSQA/ManualTesting'
import WebAppTesting from './Component/Services/StandardSQA/WebAppTesting'
import RegressionTesting from './Component/Services/StandardSQA/RegressionTesting'
import UsabilityTesting from './Component/Services/StandardSQA/UsabilityTesting'
import DesktopAppTesting from './Component/Services/StandardSQA/DesktopAppTesting'
import DatabaseTesting from './Component/Services/StandardSQA/DatabaseTesting'
import ApiTesting from './Component/Services/StandardSQA/ApiTesting'

import LoadTesting from './Component/Services/SpecializedSQA/LoadTesting'
import AutomationTesting from './Component/Services/SpecializedSQA/AutomationTesting'
import SecurityTesting from './Component/Services/SpecializedSQA/SecurityTesting'
import BigdataTesting from './Component/Services/SpecializedSQA/BigdataTesting'
import CloudTesting from './Component/Services/SpecializedSQA/CloudTesting'
import ErpTesting from './Component/Services/SpecializedSQA/ErpTesting'
import IotTesting from './Component/Services/SpecializedSQA/IotTesting'
import BlockChainTesting from './Component/Services/SpecializedSQA/BlockChainTesting'
import AlTesting from './Component/Services/SpecializedSQA/AlTesting'
import GlobalizationTesting from './Component/Services/SpecializedSQA/GlobalizationTesting'
import CourseLists from './Component/course/CourseLists'
import CourseTwo from './Component/course/course2/Main'

const App = () => {
  const StandardSQA = () => {
    return (
      <>
        {/* <Route path='/blog' exact element={<Blog />} /> */}
        <Route path='/service/mobiletesting' exact element={<MobileTesting />} />
        <Route path='/service/manualtesting' exact element={<ManualTesting />} />
        <Route path='/service/webtesting' exact element={<WebAppTesting />} />
        <Route path='/service/regressiontesting' exact element={<RegressionTesting />} />
        <Route path='/service/apitesting' exact element={<ApiTesting />} />
        <Route path='/service/databasetesting' exact element={<DatabaseTesting />} />
        <Route path='/service/desktoptesting' exact element={<DesktopAppTesting />} />
        <Route path='/service/usabilitytesting' exact element={<UsabilityTesting />} />
      </>
    )
  }

  const SpecializedSQA = () => {
    return (
      <>
        <Route path='/service/loadtesting' exact element={<LoadTesting />} />
        <Route path='/service/automationtesting' exact element={<AutomationTesting />} />
        <Route path='/service/securitytesting' exact element={<SecurityTesting />} />
        <Route path='/service/bigdatatesting' exact element={<BigdataTesting />} />
        <Route path='/service/cloudtesting' exact element={<CloudTesting />} />
        <Route path='/service/erptesting' exact element={<ErpTesting />} />
        <Route path='/service/iottesting' exact element={<IotTesting />} />
        <Route path='/service/blockchaintesting' exact element={<BlockChainTesting />} />
        <Route path='/service/altesting' exact element={<AlTesting />} />
        <Route path='/service/globalizationtesting' exact element={<GlobalizationTesting />} />
      </>
    )
  }
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/student" exact element={<CardSlider />} />
        <Route path='/courseadmission' exact element={<Main />} />
        <Route path='/courseadmission/2' exact element={<CourseTwo />} />
        {
          StandardSQA()
        }
        {
          SpecializedSQA()
        }
        <Route path='/addslide' exact element={<UserProtected><JobSlide /></UserProtected>} />
        <Route path='/adminlogin' exact element={<Login />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path='form' element={<AdmissionForm />} />
        <Route path='/adminpanelstudentdetail' exact element={<UserProtected><StudentDetails /></UserProtected>} />
        <Route path='/courselists' exact element={<CourseLists />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
