import React from 'react'
import { Slide } from 'react-slideshow-image';
import { Card, CardContent, Grid } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDisplay } from "@fortawesome/free-solid-svg-icons"

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import { ArrowRight } from '@mui/icons-material';

// import testrail from '../../image/TestRail.png'
// import jira from '../../image/jira.png'
// import clickup from '../../image/clickup.png'
// import jama from '../../image/jama.png'
// import Trello from '../../image/Trello.png'
// import kanban from '../../image/kanban.png'
// import zephyr from '../../image/zephyr.png'
// import bugzilla from '../../image/bugzilla.png'
// import agile from '../../image/agile.png'
// import devops from '../../image/devops.png'

import s1 from '../../image/s1_Healthcare.png'
import s2 from '../../image/s2_EduTech.png'
import s3 from '../../image/S3_Travel.png'
import s4 from '../../image/s4_Business.png'
import s5 from '../../image/s5_ecommerce.png'
import s6 from '../../image/s6_B2B.png'
import s7 from '../../image/s7_Software_Development.png'

import tick from '../../image/tick.png'

import testrail from '../../images/TestRail.png'
import jira from '../../images/jira.png'
import clickup from '../../images/clickup.png'
import jama from '../../images/jama.png'
import Trello from '../../images/q6. Trello.png'
import kanban from '../../images/kanban.png'
import zephyr from '../../images/zephyr.png'
import bugzilla from '../../images/bugzilla.png'
import agile from '../../images/agile.png'
import devops from '../../images/devops.png'


// import tick from '../../image/tick.png'


const contents = [
    {
        title: "Experience",
        details: "During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries. During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries. During our 15+ years in the QA field, we have accomplished 3000+ projects for various industries."
    },
    {
        title: "Quick Start",
        details: "Most of our projects start with just a few day’s advance notice; 30% of projects begin within one day after signing the documents."
    },
    {
        title: "Transparency",
        details: "Before the project begins, we can provide you with estimates of time and money to be spent on testing. You can also choose and interview testers for your project."
    },
    {
        title: "Extensive Infrastructure",
        details: "We have a large pool of 350+ real testing devices and experience in working with 40+ testing tools."
    },

    {
        title: "on-demand services",
        details: "The requested number of our 250+ QA engineers are ready to join your project at any phase of the software development life cycle, testing only what you need and when you need it."
    },
    {
        title: "Flexibility",
        details: "We have different cooperation models suitable for projects of any scale and complexity."
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

const SharedService = ({size,handleChange,expanded}) => {
    return (
        <>
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
                                {/* <FontAwesomeIcon icon={faDisplay} size="4x" /> */}
                                <img src={tick} style={{ height: "40px", width: "40px" }} />
                                <p style={{ marginLeft: "15px" }}>Websites </p>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
                            <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                {/* <FontAwesomeIcon icon={faDisplay} size="4x" /> */}
                                <img src={tick} style={{ height: "40px", width: "40px" }} />
                                <p style={{ marginLeft: "15px" }}>Web and Mobile Applications</p>
                            </div>

                        </Grid>

                        <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
                            <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                {/* <FontAwesomeIcon icon={faDisplay} size="4x" /> */}
                                <img src={tick} style={{ height: "40px", width: "40px" }} />
                                <p style={{ marginLeft: "15px" }}>Advanced web services and portals</p>
                            </div>

                        </Grid>

                        <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
                            <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                {/* <FontAwesomeIcon icon={faDisplay} size="4x" /> */}
                                <img src={tick} style={{ height: "40px", width: "40px" }} />
                                <p style={{ marginLeft: "15px" }}>Distributed systems</p>
                            </div>

                        </Grid>

                        <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
                            <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                {/* <FontAwesomeIcon icon={faDisplay} size="4x" /> */}
                                <img src={tick} style={{ height: "40px", width: "40px" }} />
                                <p style={{ marginLeft: "15px" }}>Cloud solutions</p>
                            </div>

                        </Grid>

                        <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
                            <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                {/* <FontAwesomeIcon icon={faDisplay} size="4x" /> */}
                                <img src={tick} style={{ height: "40px", width: "40px" }} />
                                <p style={{ marginLeft: "15px" }}>Complex CRM,ERP, and EMS systems</p>
                            </div>

                        </Grid>

                        <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
                            <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                {/* <FontAwesomeIcon icon={faDisplay} size="4x" /> */}
                                <img src={tick} style={{ height: "40px", width: "40px" }} />
                                <p style={{ marginLeft: "15px" }}>Desktop applications</p>
                            </div>

                        </Grid>

                        <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
                            <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                {/* <FontAwesomeIcon icon={faDisplay} size="4x" /> */}
                                <img src={tick} style={{ height: "40px", width: "40px" }} />
                                <p style={{ marginLeft: "15px" }}>CMS and online website creation tools</p>
                            </div>

                        </Grid>

                        <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
                            <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                {/* <FontAwesomeIcon icon={faDisplay} size="4x" /> */}
                                <img src={tick} style={{ height: "40px", width: "40px" }} />
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
                                    <h6 className='border_text_title_red'>Compatibility testing</h6>
                                    <p className='border_text_para'>
                                        We check if a web application works correctly in different browsers, on different devices, and other platforms.
                                    </p>
                                </div>
                            </div>

                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                            <div style={{ display: "flex" }}>
                                <div className='border_line_red'>
                                </div>
                                <div className='border_text_body'>
                                    <h6 className='border_text_title_red'>Usability testing</h6>
                                    <p className='border_text_para'>
                                        We check if a web application is convenient, easy to use, and user-friendly.
                                    </p>
                                </div>
                            </div>
                        </Grid>


                        <Grid item xs={12} sm={6} md={6}>
                            <div style={{ display: "flex" }}>
                                <div className='border_line_purple'>
                                </div>
                                <div className='border_text_body'>
                                    <h6 className='border_text_title_purple'>Security testing</h6>
                                    <p className='border_text_para'>
                                        We assess a web app’s security, the possibilities of unauthorized access and data breaches.
                                    </p>
                                </div>
                            </div>

                        </Grid>


                        <Grid item xs={12} sm={6} md={6}>
                            <div style={{ display: "flex" }}>
                                <div className='border_line_purple'>
                                </div>
                                <div className='border_text_body'>
                                    <h6 className='border_text_title_purple'>Integration testing</h6>
                                    <p className='border_text_para'>
                                        We test integration between different parts of a web app and between a web application and third-party solutions.
                                    </p>
                                </div>
                            </div>

                        </Grid>


                        <Grid item xs={12} sm={6} md={6}>
                            <div style={{ display: "flex" }}>
                                <div className='border_line_red'>
                                </div>
                                <div className='border_text_body'>
                                    <h6 className='border_text_title_red'>Data testing</h6>
                                    <p className='border_text_para'>
                                        We check if there are any issues with the data that are entered into and processed in a web application.
                                    </p>
                                </div>
                            </div>

                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                            <div style={{ display: "flex" }}>
                                <div className='border_line_red'>
                                </div>
                                <div className='border_text_body'>
                                    <h6 className='border_text_title_red'>API testing</h6>
                                    <p className='border_text_para'>
                                        We check whether a web app works correctly with third-party APIs. If a web application has its own API, we evaluate its work as well.
                                    </p>
                                </div>
                            </div>

                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                            <div style={{ display: "flex" }}>
                                <div className='border_line_purple'>
                                </div>
                                <div className='border_text_body'>
                                    <h6 className='border_text_title_purple'>Regression testing</h6>
                                    <p className='border_text_para'>
                                        We check whether the recent bug fixes and changes in a web app caused any disruptions in its work.
                                    </p>
                                </div>
                            </div>

                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                            <div style={{ display: "flex" }}>
                                <div className='border_line_purple'>
                                </div>
                                <div className='border_text_body'>
                                    <h6 className='border_text_title_purple'>Performance testing</h6>
                                    <p className='border_text_para'>
                                        We assess a web app’s performance (speed, load, resource consumption, etc.).
                                    </p>
                                </div>
                            </div>

                        </Grid>


                        <Grid item xs={12} sm={6} md={6}>
                            <div style={{ display: "flex" }}>
                                <div className='border_line_red'>
                                </div>
                                <div className='border_text_body'>
                                    <h6 className='border_text_title_red'>Accessibility testing</h6>
                                    <p className='border_text_para'>
                                        We assess if people with disabilities can use a web app easily.
                                    </p>
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
            <div className='test_section' style={{ backgroundColor: "white" }}>
                <h3 className='text-center header-title'>Project Management Tools</h3>
                <div className='test_web_body'>
                    <Grid container spacing={{ xs: 2, sm: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>

                        <Grid item xs={12} sm={6} md={4}>
                            <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Card sx={{ height: "170px"}}>
                                    <CardContent className='card_content'>
                                        <img src={testrail} className='img-fluid text-center' />
                                    </CardContent>
                                </Card>
                            </div>

                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Card sx={{ height: "170px" }}>
                                    <CardContent className='card_content'>
                                        <img src={jira} className='img-fluid'  />
                                    </CardContent>
                                </Card>
                            </div>

                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Card sx={{ height: "170px" }}>
                                    <CardContent className='card_content'>
                                        <img src={kanban} className='img-fluid'  />
                                    </CardContent>
                                </Card>
                            </div>

                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Card sx={{ height: "170px" }}>
                                    <CardContent className='card_content'>
                                        <img src={clickup} className='img-fluid' />
                                    </CardContent>
                                </Card>
                            </div>

                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Card sx={{ height: "170px" }}>
                                    <CardContent className='card_content'>
                                        <img src={jama} className='img-fluid' />
                                    </CardContent>
                                </Card>
                            </div>

                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Card sx={{ height: "170px" }}>
                                    <CardContent className='card_content'>
                                        <img src={Trello} className='img-fluid' />
                                    </CardContent>
                                </Card>
                            </div>

                        </Grid>
                    </Grid>
                </div>

            </div>

            {/* Test Case Management Tools */}
            <div className='test_section' style={{ backgroundColor: "white" }}>
                <h3 className='text-center header-title'>Test Case Management Tools</h3>
                <div className='test_web_body'>
                    <Grid container spacing={{ xs: 2, sm: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>

                        <Grid item xs={12} sm={6} md={4}>
                            <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Card sx={{ height: "170px" }}>
                                    <CardContent className='card_content'>
                                        <img src={zephyr} className='img-fluid' />
                                    </CardContent>
                                </Card>
                            </div>

                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Card sx={{ height: "170px" }}>
                                    <CardContent className='card_content'>
                                        <img src={testrail} className='img-fluid'/>
                                    </CardContent>
                                </Card>
                            </div>

                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Card sx={{ height: "170px" }}>
                                    <CardContent className='card_content'>
                                        <img src={bugzilla} className='img-fluid'  />
                                    </CardContent>
                                </Card>
                            </div>

                        </Grid>

                    </Grid>
                </div>

            </div>


            {/* Software Development Methedology */}
            <div className='test_section' style={{ backgroundColor: "white" }}>
                <h3 className='text-center header-title'>Software Development Methedology</h3>
                <div className='test_web_body'>
                    <Grid container spacing={{ xs: 2, sm: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>

                        <Grid item xs={12} sm={6} md={4}>
                            <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Card sx={{ height: "170px" }}>
                                    <CardContent className='card_content'>
                                        <img src={agile} className='img-fluid' />
                                    </CardContent>
                                </Card>
                            </div>

                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Card sx={{ height: "170px" }}>
                                    <CardContent className='card_content'>
                                        <img src={kanban} className='img-fluid'/>
                                    </CardContent>
                                </Card>
                            </div>

                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <div className='client-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Card sx={{ height: "170px" }}>
                                    <CardContent className='card_content'>
                                        <img src={devops} className='img-fluid' />
                                    </CardContent>
                                </Card>
                            </div>

                        </Grid>

                    </Grid>
                </div>

            </div>
        </>
    )
}

export default SharedService