import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  DropdownToggle,
  DropdownMenu,
  Dropdown
} from 'reactstrap';
import { useTheme } from '@mui/material/styles';

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Paper, styled, Grid } from '@mui/material';
import logo from '../../images/saimom_62.png'
import { Link } from 'react-router-dom'
import BugReportIcon from '@mui/icons-material/BugReport';

// import { Dropdown } from 'bootstrap';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  
}));



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3,  }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
const NavbarTop = () => {
  const [visible, setVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [value, setValue] = React.useState(0);
  const theme = useTheme();


  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ padding: "1rem 0" , display: "flex", justifyContent: "space-around", alignItems: "center", '@media (max-width: 768px)': {padding: "4rem 0"}}}>
            <Box>{children}</Box>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
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


  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
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
                <div class="logo-section flex-grow-1 d-flex align-items-center">
                  <Link class="site-logo site-title" to='/'><img src={logo} alt="site-logo" /></Link>
                  <h6 style={{ color: "white", marginLeft: "15px" }}>BUG RESISTANCE</h6>
                </div>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="mr-auto navbar-collapsed"  navbar>
                    <ul class="navbar-nav main-menu ml-auto" >
                      <li className='visible-list' ><Link to="/">Home</Link></li>
                      {/* <li className='visible-list' ><Link to="/Bug_resistance_eLearning/">About</Link></li> */}
                      <li className='visible-list' ><Link to="/courseadmission">Course Admission</Link></li>
                      {/* <li className='visible-list' ><Link to="/Bug_resistance_eLearning/" >Career-Blog</Link></li> */}
                      {/* <li className='visible-list'> */}
                      <Dropdown className='visible-list' nav inNavbar isOpen={dropdownOpen}   toggle={toggleDropdown} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                      {/* <Dropdown nav inNavbar isOpen={dropdownOpen} toggle={toggleDropdown} onClick={toggleDropdown}> */}

                        <DropdownToggle nav>
                          Services
                        </DropdownToggle>
                        <DropdownMenu right style={{ top: "100%",   }}  className="custom-dropdown-menu" id='c_d_m'>
                          <div className="triangle"></div> 
                          <Box sx={{ 
                            bgcolor: 'background.paper', width: 700, 
                            '@media (max-width: 991px) ': {width: 500,} ,
                            '@media (max-width: 768px)': {width: "100%", height: "400px", overflow: "scroll", overflowX: "hidden",},
                            
                            }} className='nav__box' >
                            <AppBar position="static" className='appbar_link' sx={{
                              '@media (max-width: 768px)': {
                                position: "fixed",
                                
                                zIndex: 100
                              }
                            }}>
                              <Tabs
                                style={{ backgroundColor: "white", color: "black" }}
                                value={value}
                                onChange={handleChange}
                                TabIndicatorProps={{
                                  sx: { height: 2, backgroundColor: "#F23460", }
                                }}
                                sx={{
                                  "& button.Mui-selected": { color: "#F23460" },
                                  ".MuiButtonBase-root": {fontSize: "16px", fontWeight: "500", fontFamily: "Poppins", lineHeight: "24px", color: "#15033E"}
                                }}
                                textColor="inherit"
                                variant="fullWidth"
                                aria-label="full width tabs example"
                              >
                                <Tab className='tab__header_name' sx={{".MuiButtonBase-root": {fontSize: "16px"}}} label="Standard QA Services" {...a11yProps(0)} />
                                <Tab label="Specialized QA Services" {...a11yProps(1)} />
                              </Tabs>
                            </AppBar>
 {/* tab panel one */}
                            <TabPanel value={value} index={0} dir={theme.direction}  >
                              <Grid container  sx={{"@media (max-width:768px)": {".MuiGrid-spacing-xs-2": {},} }} className='grid__link' >
                                <Grid xs={12} sm={6} className='left__grid_1' sx={{"@media (max-width:768px)": {display: "flex", flexDirection: "column"}}} >
                                  {/* <p className='dropdown__services__header' style={{ color: "#F23460" }}>Manual Testing Services</p> */}
                                  <Item elevation={'0'} sx={{ textAlign: "left" , '@media (max-width: 768px)': {display: "flex", justifyContent: "center"}}}  >
                                    <ul className='qa_services_left' style={{ color: "black" }} >
                                      <li className='item' >
                                        <span><BugReportIcon sx={{ color: "#F23460" }} /></span>
                                        <Link to='/service' className='grid__link_item' id='grid__link__item' style={{ color: "black" }}  >Manual Testing Services</Link>
                                      </li>
                                      <li className='item' >
                                        <span><BugReportIcon sx={{ color: "#F23460" }} /></span>
                                        <Link to='/service' className='grid__link_item' style={{ color: "black" }}  >Functional Testing Services</Link>
                                      </li>
                                      <li className='item' >
                                        <span><BugReportIcon sx={{ color: "#F23460" }} /></span>
                                        <Link to='/service' className='grid__link_item' style={{ color: "black" }}>Compatibility Testing Services</Link>
                                      </li>
                                      <li className='item' >
                                        <span><BugReportIcon sx={{ color: "#F23460" }} /></span>
                                        <Link to='/service' className='grid__link_item' style={{ color: "black" }}>User Acceptance Testing Services</Link>
                                      </li>
                                    </ul>
                                  </Item>
                                </Grid>
                                <Grid xs={12} sm={6} className='right__grid_1'  >
                                  {/* <div>Manual Testing</div> */}
                                  <Item elevation={'0'} sx={{ textAlign: "left", '@media (max-width: 768px)': {display: "flex", justifyContent: "center"} }} >
                                    <ul className='qa_services_right'>
                                      <li className='item' >
                                        <span><BugReportIcon sx={{ color: "#F23460" }} /></span>

                                        <Link to='/service' className='grid__link_item' style={{ color: "black" }}>Mobile Testing Services</Link>
                                      </li >
                                      <li className='item' >
                                        <span><BugReportIcon sx={{ color: "#F23460" }} /></span>

                                        <Link to='/service' className='grid__link_item' style={{ color: "black" }}>Web Testing Services</Link>
                                      </li>
                                      <li className='item' >
                                        <span><BugReportIcon sx={{ color: "#F23460" }} /></span>

                                        <Link to='/service' className='grid__link_item' style={{ color: "black" }}>Game Testing Services</Link>
                                      </li>
                                      <li className='item' >
                                        <span><BugReportIcon sx={{ color: "#F23460" }} /></span>

                                        <Link to='/service' className='grid__link_item' style={{ color: "black" }}>Regression Testing Services</Link>
                                      </li>

                                      <li className='item' >
                                        <span><BugReportIcon sx={{ color: "#F23460" }} /></span>

                                        <Link to='/service' className='grid__link_item' style={{ color: "black" }}>Usability Testing Services</Link>
                                      </li>
                                    </ul>
                                  </Item>
                                </Grid>


                              </Grid>
                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction}>
                              <Grid container  className='grid__link'>
                                <Grid xs={12} sm={6} className='left__grid_1' >
                                  <Item elevation={'0'} sx={{ textAlign: "left", '@media (max-width: 768px)': {display: "flex", justifyContent: "center"} }} >
                                    <ul className='qa_services_left' style={{ color: "black" }} >
                                      <li className='item' >
                                        <span><BugReportIcon sx={{ color: "#F23460" }} /></span>
                                        <Link to='/service' className='grid__link_item' style={{ color: "black" }}  >Automation Testing Services</Link>
                                      </li>
                                      <li className='item' >
                                        <span><BugReportIcon sx={{ color: "#F23460" }} /></span>
                                        <Link to='/service' className='grid__link_item' style={{ color: "black" }}  >Mobile Test Automation Services</Link>
                                      </li>
                                      <li className='item' >
                                        <span><BugReportIcon sx={{ color: "#F23460" }} /></span>
                                        <Link to='/service' className='grid__link_item' style={{ color: "black" }}>Web Test Automation Services</Link>
                                      </li>
                                      <li className='item' >
                                        <span><BugReportIcon sx={{ color: "#F23460" }} /></span>
                                        <Link to='/service' className='grid__link_item' style={{ color: "black" }}>Selenium Testing Service</Link>
                                      </li>
                                      <li className='item' >
                                        <span><BugReportIcon sx={{ color: "#F23460" }} /></span>
                                        <Link to='/service' className='grid__link_item' style={{ color: "black" }}>Security Testing Services</Link>
                                      </li>
                                      <li className='item' >
                                        <span><BugReportIcon sx={{ color: "#F23460" }} /></span>
                                        <Link to='/service' className='grid__link_item' style={{ color: "black" }}>Big Data Testing Services</Link>
                                      </li>
                                      <li className='item' >
                                        <span><BugReportIcon sx={{ color: "#F23460" }} /></span>
                                        <Link to='/service' className='grid__link_item' style={{ color: "black" }}>Cloud Testing Services</Link>
                                      </li>
                                      <li className='item' >
                                        <span><BugReportIcon sx={{ color: "#F23460" }} /></span>
                                        <Link to='/service' className='grid__link_item' style={{ color: "black" }}>Agile And DevOps Testing Services</Link>
                                      </li>
                                      <li className='item' >
                                        <span><BugReportIcon sx={{ color: "#F23460" }} /></span>
                                        <Link to='/service' className='grid__link_item' style={{ color: "black" }}>Compliance With GDPR</Link>
                                      </li>
                                    </ul>
                                  </Item>
                                  

                                </Grid>
                                <Grid xs={12} sm={6} className='right__grid_1'>
                                  {/* <div>Manual Testing</div> */}
                                  <Item elevation={'0'} sx={{ textAlign: "left", '@media (max-width: 768px)': {display: "flex", justifyContent: "center"}}} >
                                  <ul className='qa_services_right qa_2' style={{ color: "black" }} >
                                      <li className='item' >
                                        <span><BugReportIcon sx={{ color: "#F23460" }} /></span>
                                        <Link to='/service' className='grid__link_item' style={{ color: "black" }}  >ERP Testing Services</Link>
                                      </li>
                                      <li className='item' >
                                        <span><BugReportIcon sx={{ color: "#F23460" }} /></span>
                                        <Link to='/service' className='grid__link_item' style={{ color: "black" }}  >CRM Testing Services</Link>
                                      </li>
                                      <li className='item' >
                                        <span><BugReportIcon sx={{ color: "#F23460" }} /></span>
                                        <Link to='/service' className='grid__link_item' style={{ color: "black" }}>SAP Testing Services</Link>
                                      </li>
                                      <li className='item' >
                                        <span><BugReportIcon sx={{ color: "#F23460" }} /></span>
                                        <Link to='/service' className='grid__link_item' style={{ color: "black" }}>Performance Testing Services</Link>
                                      </li>
                                      <li className='item' >
                                        <span><BugReportIcon sx={{ color: "#F23460" }} /></span>
                                        <Link to='/service' className='grid__link_item' style={{ color: "black" }}>Jmeter Testing</Link>
                                      </li>
                                      <li className='item' >
                                        <span><BugReportIcon sx={{ color: "#F23460" }} /></span>
                                        <Link to='/service' className='grid__link_item' style={{ color: "black" }}>IoT Testing Services</Link>
                                      </li>
                                      <li className='item' >
                                        <span><BugReportIcon sx={{ color: "#F23460" }} /></span>
                                        <Link to='/service' className='grid__link_item' style={{ color: "black" }}>Salesforce Testing Services</Link>
                                      </li>
                                      <li className='item' >
                                        <span><BugReportIcon sx={{ color: "#F23460" }} /></span>
                                        <Link to='/service' className='grid__link_item' style={{ color: "black" }}>Blockchain Testing Services</Link>
                                      </li>
                                      <li className='item' >
                                        <span><BugReportIcon sx={{ color: "#F23460" }} /></span>
                                        <Link to='/service' className='grid__link_item' style={{ color: "black" }}>AI & ML Testing Services</Link>
                                      </li>
                                    </ul>
                                  </Item>
                                </Grid>


                              </Grid>
                            </TabPanel>

                          </Box>
                        </DropdownMenu>
                      </Dropdown>

                      {/* </li> */}


                      <li className='visible-list' ><Link to="/contact">Contact</Link></li>
                      <li className='visible-list' ><Link to="/form">Admission Form</Link></li>
                    
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