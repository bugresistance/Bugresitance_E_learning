import React from 'react'
import { Link } from 'react-router-dom'
import ScrollButton from './ScrollButton'
import logo from '../../images/saimom_62.png'

const Footer = () => {
  return (
    <footer id="footer-section" style={{marginTop:"50px"}}>
      <div class="overlay pt-120">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <div class="section-header pb-120 text-center">
              <h4 class="sub-title-alt">Join</h4>
              <h3 class="title"> Bangladesh Biggest SQA Society</h3>
              <a href="https://www.facebook.com/groups/bangladeshsqasociety" target={'blank'} class="cmn-btn" style={{ textDecoration: "none" }}>Facebook Group</a>
            </div>
          </div>
        </div>
        <div class="bottom-area">
          <div class="row d-flex justify-content-between">
            <div class="col-lg-4 col-md-4 col-sm-4 d-flex align-items-center justify-cen">
              <Link to='/'>
                <img src={logo} alt="logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ScrollButton />
    <div class="footer-bottom">
      <div class="container">
        <div class="main-content">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-8 col-md-8 col-sm-12 d-flex justify-content-start justify-cen">
              <div class="left-area">
                <p>All right reserved to <a href="https://www.facebook.com/groups/bangladeshsqasociety" target={'blank'}> BUG RESISTANCE</a></p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-end justify-cen">
              <div class="right-area">
                <p>Copyright © 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer