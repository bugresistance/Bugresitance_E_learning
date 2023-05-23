import React, { useContext, useState, useEffect } from 'react'


// Importing Images
import banner from '../images/banner-circle.png'
import downloadCV from '../images/download-Icon.png'
import specializingIcon1 from '../images/specilizing-icon1.png'
import specializingIcon2 from '../images/specilizing-icon2.png'
import specializingIcon3 from '../images/specilizing-icon3.png'
import specializingIcon4 from '../images/specilizing-icon4.png'
import turn from '../images/now-your-turn-right.png'
import monkeytest from '../images/Monkey Testing.png'
import regressiontesting from '../images/regression testing.png'
import selenium from '../images/selenium.png'
import smoketesting from '../images/Smoke testing.png'

import StudentBig from './StudentBig'
import Footer from './Shared/Footer'
import NavbarTop from './Shared/NavbarTop'
const Home = () => {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      {/* <!-- start preloader --> */}
      {/* <div class="preloader" id="preloader"></div> */}
      {/* <!-- end preloader --> */}

      {/* <a href="#" class="scrollToTop"><i class="fas fa-angle-double-up"></i></a> */}

      <NavbarTop />

      {/* <!-- banner-section start --> */}
      <section id="banner-section">
        <div class="banner-content d-flex align-items-center pb-120">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-10">
                <div class="main-content">
                  <div class="item one wow fadeInDown">
                    <img src={regressiontesting} alt="image" />
                    <h5>Regression Testing</h5>
                  </div>
                  <div class="item two wow fadeInDown">
                    <img src={monkeytest} alt="image" />
                    <h5>Monkey Testing</h5>
                  </div>
                  <div class="item three wow fadeInDown">
                    <img src={selenium} alt="image" />
                    <h5>Selenium</h5>
                  </div>
                  <div class="item four wow fadeInDown">
                    <img src={smoketesting} alt="image" />
                    <h5>Smoke Testing</h5>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-lg-6">
                      <div class="right-area text-center">
                        <img src={banner} class="right-img" alt="banner-circle" />
                        <div class="download-area">
                          <span href="#" class="download" style={{ textDecoration: "none" }}>SQA Engineer
                            {/* <img src={downloadCV} alt="image" /> */}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-lg-7 d-flex align-items-center">
                <div class="text-area text-center">
                  {/* <h5>HI THERE, I'M JAMES</h5> */}    
                  <h2>SQA <span>Live</span> Course Platform</h2>
                  <div class="btn-area d-flex align-items-center justify-content-center">
                    <a  class="cmn-btn" style={{ textDecoration: "none" }}>Quality Begets Quality</a>
                    {/* <a href="portfolio.html" class="cmn-btn-second" style={{ textDecoration: "none" }}>View Project
                      <span class="btn-icon"></span>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- banner-section end -->

      <!-- Specilizing In start --> */}
      <section id="specilizing-section" >
        <div class="overlay pt-120 pb-120">
          <div class="container wow fadeInUp">
            <div class="row justify-content-center text-center">
              <div class="col-lg-6" >
                <div class="section-header">
                  <h4 class="sub-title">What We Do</h4>
                  <h3 class="title">Specializing In</h3>
                 
                </div>
              </div>
            </div>
            <div class="row" >
              <div class="col-lg-3 col-md-6">
                <div class="single-item">
                  <img src={specializingIcon1} alt="image" />
                 <h2> Manual Testing</h2>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="single-item">
                  <img src={specializingIcon2} alt="image" />
                  <h2> API Testing</h2>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="single-item">
                  <img src={specializingIcon3} alt="image" />
                  <h2>Load Testing</h2>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="single-item">
                  <img src={specializingIcon4} alt="image" />
                 <h2>Automation Testing</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Specilizing In end --> */}
      {/* <!-- Now Your Turn start --> */}
      <section id="now-your-turn">
        <div class="overlay pt-120 pb-120">
          <div class="container wow fadeInUp">
            <div class="row">
              <div class="col-lg-7">
                <div class="section-header">
                  {/* <h4 class="sub-title-alt">Now Your Turn</h4> */}
                  <h3 class="title">Interested in Building a Career in SQA?</h3>
                  <p>Software quality assurance (SQA) is a process that assures that all software engineering processes, methods, activities, and work items are monitored and comply with the defined standards.</p>
                  <a class="cmn-btn" style={{ textDecoration: "none" }}>Quality Begets Quality</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right-area">
          <img src={turn} alt="image" />
        </div>
      
      </section>
      {/* <!-- Now Your Turn end --> */}
      <StudentBig/>
      {/* What Student Say */}
      {/* <section id="what_student_say">
        <CardSlider />
      </section> */}


      {/* <!-- footer-section start --> */}

      
     <Footer/>
    </>

  )
}

export default Home