import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'


import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import { ArrowRight } from '@mui/icons-material';
import NavbarTop from '../Shared/NavbarTop'
import servicebanner from '../../images/servicebanner.png'
import { Slide } from 'react-slideshow-image';
import { Card, CardContent, Grid } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDisplay } from "@fortawesome/free-solid-svg-icons"
import Footer from '../Shared/Footer';

import testrail from '../../images/TestRail.png'
import jira from '../../images/jira.png'
import redmine from '../../images/redmine.png'
import clickup from '../../images/clickup.png'
import jama from '../../images/jama.png'
import Trello from '../../images/Trello.png'
import kanban from '../../images/kanban.png'
import zephyr from '../../images/zephyr.png'
import bugzilla from '../../images/bugzilla.png'
import agile from '../../images/agile.png'
import devops from '../../images/devops.png'

import s1 from '../../images/s1_Healthcare.png'
import s2 from '../../images/s2_EduTech.png'
import s3 from '../../images/S3_Travel.png'
import s4 from '../../images/s4_Business.png'
import s5 from '../../images/s5_ecommerce.png'
import s6 from '../../images/s6_B2B.png'
import s7 from '../../images/s7_Software_Development.png'
const contents = [
    {
        title: "Experience",
        details: "During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries. During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries. During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries."
    },
    {
        title: "Quick Start",
        details: "During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries. During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries. During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries."
    },
    {
        title: "Transparency",
        details: "During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries. During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries. During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries."
    },
    {
        title: "Extensive Infrastructure",
        details: "During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries. During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries. During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries."
    },

    {
        title: "on-demand services",
        details: "During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries. During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries. During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries."
    },
    {
        title: "Flexibility",
        details: "During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries. During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries. During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries."
    },

]

const badgeStyle = {
    "& .MuiBadge-badge": {
        backgroundColor: "#5C2CC5",
        width: '30px',
        height: "30px",
        borderRadius: "50%"
    }
}
const Service = () => {
    const targetRef = useRef(null);
    var width = window.innerWidth
    const [size, setSize] = useState(width);
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    function updateSize() {
        try {
            // console.log("size htted", size);
            setSize(window.innerWidth);
        } catch (e) {
            console.log(e);
        }

    }
    
    useEffect(() => {
        
        window.addEventListener('resize', updateSize)

        // return () => window.removeEventListener("resize", updateSize)
    //   width = window.innerWidth
    //   console.log("Width",size);
    }, [size])

    
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])

    return (
        <div  ref={targetRef}>
            <NavbarTop />
            <div className='full_wrapper'>
                <div className='page-wrapper' style={{ maxWidth: "2100px" }}>

                    <div className='header-para-div'>
                        <h1 className='text-center header-title' style={{ marginBottom: "30px" }}>Web Application Testing</h1>
                        <p className='header-para text-center'>Bug Resistance offers software testing services for web solutions to thoroughly check their quality and, by that, contribute to their improved work and an enhanced customer experience.</p>
                        <div className='sticky__btn row'>
                            <span style={{ miWidth: '100px', maxWidth: "300px", marginTop: "30px" }}>
                                <a href='https://www.facebook.com/bugresistance' target={"_blank"} class="cmn-btn" style={{ textDecoration: "none", backgroundColor: "#F23460", color: "#ffffff", border: "2px solid #F23460" }}>Contact Us</a>
                            </span>
                        </div>
                    </div>
                    {/* Image Section */}
                    <div className='banner_image_section'>
                        <img src={servicebanner} className="img-fluid banner_image" />
                    </div>
                    {/* Industries We work With */}
                    <div className='slider_section'>
                        <h3 className='text-center header-title'>Industries We work With</h3>
                        <div className='slider_container' style={{ width: "80%", marginTop: "30px" }}>
                            <Slide slidesToScroll={1}
                                slidesToShow={size > 800 ? 5 : size > 500 ? 2 : 1}
                            >
                                <div className='client-logo' style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                    <img src={s1} />
                                    <p style={{ marginTop: "5px" }}>Health Care</p>
                                </div>
                                <div className='client-logo' style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                    <img src={s2} />
                                    <p style={{ marginTop: "5px" }}>Edu Tech</p>
                                </div>
                                <div className='client-logo' style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                    <img src={s3} />
                                    <p style={{ marginTop: "5px" }}>Travel</p>
                                </div>
                                <div className='client-logo' style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                    <img src={s4} />
                                    <p style={{ marginTop: "5px" }}>Business</p>
                                </div>
                                <div className='client-logo' style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                    <img src={s5} />
                                    <p style={{ marginTop: "5px" }}>E-Commerce</p>
                                </div>
                                <div className='client-logo' style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                    <img src={s6} />
                                    <p style={{ marginTop: "5px" }}>B2B</p>
                                </div>
                                <div className='client-logo' style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                    <img src={s7} />
                                    <p style={{ marginTop: "5px" }}>Software Development</p>
                                </div>
                            </Slide>
                        </div>

                    </div>
                    {/* Why Bug Resistance */}
                    <div className='explanation_section'>
                        <h3 className='text-center header-title'>Why Bug Resistance?</h3>
                        <div className='accordian_body'>
                            <Grid container spacing={{ xs: 2, sm: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>
                                {contents.map((c, i) => {
                                    return <>
                                        <Grid item xs={12} sm={6} md={6}>
                                            <Accordion
                                                style={{ border: "1px solid #5C2CC5", backgroundColor: "#F2F5F9" }}
                                                disableGutters={"true"} expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
                                                <AccordionSummary
                                                    expandIcon={<ArrowRight style={{ fontWeight: "700", fontSize: "2.2rem", color: "#3F3F3F" }} />}
                                                    aria-controls="panel1bh-content"
                                                    id={`panel${i}bh-header`}

                                                >

                                                    <Typography sx={{ color: '#3F3F3F', border: "none", fontSize: "16px", fontWeight: "600", lineHeight: "24px" }}>{c.title}</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography sx={{ lineHeight: "2rem" }}>
                                                        {c.details}
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        </Grid>

                                    </>
                                })}
                            </Grid>
                        </div>

                    </div>

                    {/* What We Test */}
                    <div className='test_section'>
                        <h3 className='text-center header-title'>What We Test</h3>
                        <div className='test_web_body'>
                            <Grid container spacing={{ xs: 2, sm: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>

                                <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
                                    <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <FontAwesomeIcon icon={faDisplay} size="4x" />
                                        <p style={{ marginLeft: "15px" }}>Websites </p>
                                    </div>

                                </Grid>

                                <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
                                    <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <FontAwesomeIcon icon={faDisplay} size="4x" />
                                        <p style={{ marginLeft: "15px" }}>Web and Mobile Applications</p>
                                    </div>

                                </Grid>

                                <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
                                    <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <FontAwesomeIcon icon={faDisplay} size="4x" />
                                        <p style={{ marginLeft: "15px" }}>Advanced web services and portals</p>
                                    </div>

                                </Grid>

                                <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
                                    <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <FontAwesomeIcon icon={faDisplay} size="4x" />
                                        <p style={{ marginLeft: "15px" }}>Distributed systems</p>
                                    </div>

                                </Grid>

                                <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
                                    <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <FontAwesomeIcon icon={faDisplay} size="4x" />
                                        <p style={{ marginLeft: "15px" }}>Cloud solutions</p>
                                    </div>

                                </Grid>

                                <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
                                    <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <FontAwesomeIcon icon={faDisplay} size="4x" />
                                        <p style={{ marginLeft: "15px" }}>Complex CRM,ERP, and EMS systems</p>
                                    </div>

                                </Grid>

                                <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
                                    <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <FontAwesomeIcon icon={faDisplay} size="4x" />
                                        <p style={{ marginLeft: "15px" }}>Desktop applications</p>
                                    </div>

                                </Grid>

                                <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
                                    <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <FontAwesomeIcon icon={faDisplay} size="4x" />
                                        <p style={{ marginLeft: "15px" }}>CMS and online website creation tools</p>
                                    </div>

                                </Grid>

                                <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
                                    <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <FontAwesomeIcon icon={faDisplay} size="4x" />
                                        <p style={{ marginLeft: "15px" }}>B2B systems</p>
                                    </div>

                                </Grid>


                            </Grid>
                        </div>

                    </div>

                    {/* How We Test Web Apps */}
                    <div className='explanation_section'>
                        <h3 className='text-center header-title'>How We Test Web Apps?</h3>
                        <div className='test_web_body'>
                            <Grid container spacing={{ xs: 2, sm: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>

                                <Grid item xs={12} sm={6} md={6}>
                                    <div style={{ display: "flex" }}>
                                        <div className='border_line_purple'>
                                        </div>
                                        <div className='border_text_body'>
                                            <h6 className='border_text_title_purple'>Functional testing</h6>
                                            <p className='border_text_para'>We evaluate if a web app works correctly according to the requirements.</p>
                                        </div>
                                    </div>

                                </Grid>

                                <Grid item xs={12} sm={6} md={6}>
                                    <div style={{ display: "flex" }}>
                                        <div className='border_line_red'>
                                        </div>
                                        <div className='border_text_body'>
                                            <h6 className='border_text_title_red'>Functional testing</h6>
                                            <p className='border_text_para'>We evaluate if a web app works correctly according to the requirements.</p>
                                        </div>
                                    </div>

                                </Grid>

                                <Grid item xs={12} sm={6} md={6}>
                                    <div style={{ display: "flex" }}>
                                        <div className='border_line_red'>
                                        </div>
                                        <div className='border_text_body'>
                                            <h6 className='border_text_title_red'>Functional testing</h6>
                                            <p className='border_text_para'>We evaluate if a web app works correctly according to the requirements.</p>
                                        </div>
                                    </div>

                                </Grid>


                                <Grid item xs={12} sm={6} md={6}>
                                    <div style={{ display: "flex" }}>
                                        <div className='border_line_purple'>
                                        </div>
                                        <div className='border_text_body'>
                                            <h6 className='border_text_title_purple'>Functional testing</h6>
                                            <p className='border_text_para'>We evaluate if a web app works correctly according to the requirements.</p>
                                        </div>
                                    </div>

                                </Grid>


                                <Grid item xs={12} sm={6} md={6}>
                                    <div style={{ display: "flex" }}>
                                        <div className='border_line_purple'>
                                        </div>
                                        <div className='border_text_body'>
                                            <h6 className='border_text_title_purple'>Functional testing</h6>
                                            <p className='border_text_para'>We evaluate if a web app works correctly according to the requirements.</p>
                                        </div>
                                    </div>

                                </Grid>


                                <Grid item xs={12} sm={6} md={6}>
                                    <div style={{ display: "flex" }}>
                                        <div className='border_line_red'>
                                        </div>
                                        <div className='border_text_body'>
                                            <h6 className='border_text_title_red'>Functional testing</h6>
                                            <p className='border_text_para'>We evaluate if a web app works correctly according to the requirements.</p>
                                        </div>
                                    </div>

                                </Grid>

                                <Grid item xs={12} sm={6} md={6}>
                                    <div style={{ display: "flex" }}>
                                        <div className='border_line_red'>
                                        </div>
                                        <div className='border_text_body'>
                                            <h6 className='border_text_title_red'>Functional testing</h6>
                                            <p className='border_text_para'>We evaluate if a web app works correctly according to the requirements.</p>
                                        </div>
                                    </div>

                                </Grid>

                                <Grid item xs={12} sm={6} md={6}>
                                    <div style={{ display: "flex" }}>
                                        <div className='border_line_purple'>
                                        </div>
                                        <div className='border_text_body'>
                                            <h6 className='border_text_title_purple'>Functional testing</h6>
                                            <p className='border_text_para'>We evaluate if a web app works correctly according to the requirements.</p>
                                        </div>
                                    </div>

                                </Grid>

                                <Grid item xs={12} sm={6} md={6}>
                                    <div style={{ display: "flex" }}>
                                        <div className='border_line_purple'>
                                        </div>
                                        <div className='border_text_body'>
                                            <h6 className='border_text_title_purple'>Functional testing</h6>
                                            <p className='border_text_para'>We evaluate if a web app works correctly according to the requirements.</p>
                                        </div>
                                    </div>

                                </Grid>


                                <Grid item xs={12} sm={6} md={6}>
                                    <div style={{ display: "flex" }}>
                                        <div className='border_line_red'>
                                        </div>
                                        <div className='border_text_body'>
                                            <h6 className='border_text_title_red'>Functional testing</h6>
                                            <p className='border_text_para'>We evaluate if a web app works correctly according to the requirements.</p>
                                        </div>
                                    </div>

                                </Grid>
                            </Grid>
                        </div>

                    </div>

                    {/* Stages Of Testing */}
                    <div className='testing_stage'>
                        <h3 className='text-center header-title'>Stages Of Testing</h3>
                        <div className='test_web_body'>
                            <Grid container spacing={{ xs: 2, sm: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>
                                <Grid item xs={12} sm={4} md={4} >
                                    <Badge sx={badgeStyle} color="secondary" badgeContent={1} anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }} className='badge_box'>
                                        <div className='stage_box_single'>
                                            <h6 className='text-center' style={{ color: "#F23460" }}>Requirement Analysis</h6>
                                        </div>
                                    </Badge>

                                </Grid>
                                <Grid item xs={12} sm={4} md={4} >
                                    <Badge sx={badgeStyle} color="secondary" badgeContent={2} anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }} className='badge_box'>
                                        <div className='stage_box_single'>
                                            <h6 className='text-center' style={{ color: "#F23460" }}>Test Planning</h6>
                                        </div>
                                    </Badge>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4}>
                                    <Badge sx={badgeStyle} color="secondary" badgeContent={3} anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }} className='badge_box'>
                                        <div className='stage_box_single'>
                                            <h6 className='text-center' style={{ color: "#F23460" }}>Development Of Test Doc</h6>
                                        </div>
                                    </Badge>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4}>
                                    <Badge sx={badgeStyle} color="secondary" badgeContent={4} anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }} className='badge_box'>
                                        <div className='stage_box_single'>
                                            <h6 className='text-center' style={{ color: "#F23460" }}>Environment Setup</h6>
                                        </div>
                                    </Badge>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4}>
                                    <Badge sx={badgeStyle} color="secondary" badgeContent={5} anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }} className='badge_box'>
                                        <div className='stage_box_single'>
                                            <h6 className='text-center' style={{ color: "#F23460" }}>Test Execution</h6>
                                        </div>
                                    </Badge>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4}>
                                    <Badge sx={badgeStyle} color="secondary" badgeContent={6} anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                        className='badge_box'
                                    >
                                        <div className='stage_box_single'>
                                            <h6 className='text-center' style={{ color: "#F23460" }}>Test Cycle Closer</h6>
                                        </div>
                                    </Badge>
                                </Grid>



                            </Grid>
                        </div>
                    </div>

                    {/* Project Management Tools */}
                    <div className='test_section' style={{backgroundColor:"white"}}>
                        <h3 className='text-center header-title'>Project Management Tools</h3>
                        <div className='test_web_body'>
                            <Grid container spacing={{ xs: 2, sm: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>

                                <Grid item xs={12} sm={6} md={4}>
                                    <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Card sx={{ height: "170px" }}>
                                            <CardContent>
                                                <img src={testrail} className='img-fluid' />
                                            </CardContent>
                                        </Card>
                                    </div>

                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Card sx={{ height: "170px" }}>
                                            <CardContent>
                                                <img src={jira} className='img-fluid' style={{ width: '512px', height: '200px' }} />
                                            </CardContent>
                                        </Card>
                                    </div>

                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Card sx={{ height: "170px" }}>
                                            <CardContent>
                                                <img src={kanban} className='img-fluid' style={{ width: '512px', height: '200px' }} />
                                            </CardContent>
                                        </Card>
                                    </div>

                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Card sx={{ height: "170px" }}>
                                            <CardContent>
                                                <img src={clickup} className='img-fluid' />
                                            </CardContent>
                                        </Card>
                                    </div>

                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Card sx={{ height: "170px" }}>
                                            <CardContent>
                                                <img src={jama} className='img-fluid' style={{ width: '512px', height: '200px' }} />
                                            </CardContent>
                                        </Card>
                                    </div>

                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Card sx={{ height: "170px" }}>
                                            <CardContent>
                                                <img src={Trello} className='img-fluid' />
                                            </CardContent>
                                        </Card>
                                    </div>

                                </Grid>
                            </Grid>
                        </div>

                    </div>

                    {/* Test Case Management Tools */}
                    <div className='test_section' style={{backgroundColor:"white"}}>
                        <h3 className='text-center header-title'>Test Case Management Tools</h3>
                        <div className='test_web_body'>
                            <Grid container spacing={{ xs: 2, sm: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>

                                <Grid item xs={12} sm={6} md={4}>
                                    <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Card sx={{ height: "170px" }}>
                                            <CardContent>
                                                <img src={zephyr} className='img-fluid' />
                                            </CardContent>
                                        </Card>
                                    </div>

                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Card sx={{ height: "170px" }}>
                                            <CardContent>
                                                <img src={testrail} className='img-fluid' style={{ width: '512px', height: '200px' }} />
                                            </CardContent>
                                        </Card>
                                    </div>

                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Card sx={{ height: "170px" }}>
                                            <CardContent>
                                                <img src={bugzilla} className='img-fluid' style={{ width: '512px', height: '200px' }} />
                                            </CardContent>
                                        </Card>
                                    </div>

                                </Grid>

                            </Grid>
                        </div>

                    </div>

                    

                    {/* Software Development Methedology */}
                    <div className='test_section' style={{backgroundColor:"white"}}>
                        <h3 className='text-center header-title'>Software Development Methedology</h3>
                        <div className='test_web_body'>
                            <Grid container spacing={{ xs: 2, sm: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>

                                <Grid item xs={12} sm={6} md={4}>
                                    <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Card sx={{ height: "170px" }}>
                                            <CardContent>
                                                <img src={agile} className='img-fluid' />
                                            </CardContent>
                                        </Card>
                                    </div>

                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Card sx={{ height: "170px" }}>
                                            <CardContent>
                                                <img src={kanban} className='img-fluid' style={{ width: '512px', height: '200px' }} />
                                            </CardContent>
                                        </Card>
                                    </div>

                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Card sx={{ height: "170px" }}>
                                            <CardContent>
                                                <img src={devops} className='img-fluid' style={{ width: '512px', height: '200px' }} />
                                            </CardContent>
                                        </Card>
                                    </div>

                                </Grid>

                            </Grid>
                        </div>

                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Service