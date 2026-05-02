import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
} from 'reactstrap';

import logo from '../../image/saimom_62.png'
import { Link } from 'react-router-dom'
import ScrollButton from './ScrollButton';


const NavbarTop = () => {
  const [visible, setVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate()
  const toggle = () => setIsOpen(!isOpen);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };
  const handleNavbarClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const logOut = () => {
    localStorage.removeItem('userData')
    localStorage.removeItem('jwtoken')
    window.location.reload()
  }

  window.addEventListener('scroll', toggleVisible);
  return (
    <>
      {/* <!-- header-section start --> */}
      <header id="header-section" style={{ backgroundColor: '#5c2cc5' }}>
        <div class="overlay">
          <div class="container">
            <div class="row d-flex header-area">

              <Navbar className='navbar p-0' light expand="md">
                <div class="logo-section flex-grow-1 d-flex align-items-center" onClick={handleNavbarClick}>
                  <Link class="site-logo site-title" to='/'><img src={logo} alt="site-logo" /></Link>
                  <h6 style={{ color: "white", marginLeft: "15px" }}>BUG RESISTANCE</h6>
                </div>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="mr-auto navbar-collapsed" navbar style={{width:"100%"}}>
                    <ul class="navbar-nav main-menu ml-auto"  style={{width:"100%"}}>
                      <li className='visible-list' onClick={handleNavbarClick}><Link to="/">Home</Link></li>
                      <li className='visible-list' onClick={handleNavbarClick}><Link to="/services">Services</Link></li>
                      <li className='visible-list' onClick={handleNavbarClick}><Link to="/products">Products</Link></li>
                      <li className='visible-list' onClick={handleNavbarClick}><Link to="/courselists">Courses</Link></li>
                      <li className='visible-list' onClick={handleNavbarClick}><Link to="/contact">Contact</Link></li>

                      {localStorage.getItem('userData') && <li className='visible-list' ><Link to="/addslide">Panel</Link></li>}
                      {localStorage.getItem('userData') && <li className='visible-list' ><Link to="" onClick={() => { logOut() }}>Logout</Link></li>}

                    </ul>
                  </Nav>
                </Collapse>
              </Navbar>

            </div>
          </div>
        </div>
      </header>
      {/* <!-- header-section end --> */}
    </>
  )

}

export default NavbarTop