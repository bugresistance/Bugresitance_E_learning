import React,{useState} from 'react'
import emailjs from 'emailjs-com';
import Footer from './Shared/Footer'
import NavbarTop from './Shared/NavbarTop'
import { Button, IconButton } from '@mui/material'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import userIcon from '../images/user-icon.png'
import emailIcon from '../images/email-icon2.png'
import mobileIcon from '../images/mobile.png'
import companyIcon from '../images/company.png'
import { Link } from 'react-router-dom';
const Contact = () => {

    const sendEmail=(e)=>{
        console.log(email);
        emailjs.send('service_mn6abii', 'template_3mt0t7x', email,'C3e8qnnijH6kNCCgk')
        .then(function() {
            console.log('SUCCESS!');
        }, function(error) {
            console.log('FAILED...', error);
        });
    }
    const [email,setEmail] = useState({
        name:"",
        project_description:"",
        email_address:"",
        mobile_number:"",
        company_name:"",
        file:""
    })
    let fieldName
    let value
    const handleValue =(e)=>{
        fieldName = e.target.name
        value = e.target.value
        setEmail({...email,[fieldName]:value})
    }
    return (
        <div>
            <NavbarTop />

            {/* <!-- inner banner start --> */}
            <section id="banner-section" class="inner-banner cart contact">
                <div class="banner-content d-flex align-items-center">
                    <div class="container">
                        <div class="row d-flex justify-content-start">
                            <div class="col-lg-12">
                                <div class="text-area pb-120">
                                    <h1>Contact Me</h1>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- inner section end --> */}

            {/* <!-- Contact me start --> */}
            <section id="contact-me" class="pb-120">
                <div class="container">
                    <div class="contact-info-area wow fadeInUp">
                        <div class="row pr-15 pl-15">
                            <div class="col-lg-12 contact-bg">
                                <div class="row justify-content-center">
                                    <div class="col-lg-6">
                                        <div class="section-header text-center pt-120">
                                            <h4 class="sub-title">Say hello</h4>
                                            <h3 class="title">Let's Work Together</h3>
                                            <p>I’d love to meet up with you to discuss your venture,
                                                and potential collaborations.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="" style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                    {/* <div class="col-lg-4 offset-1">
                                <div class="contact-info">
                                    <a href="https://pixner.net/cdn-cgi/l/email-protection#670f020b0b08271508050215130302140e00094904080a">
                                        <img src="images/email-icon.png" alt="image"/>
                                        <span class="__cf_email__" data-cfemail="3058555c5c5f70425f5255424454554359575e1e535f5d">[email&#160;protected]</span></a>
                                    <a href="tel:61042232211">
                                        <img src="images/phone-icon.png" alt="image"/>
                                        +61 0422 322 11(3)</a>
                                </div>
                                <div class="social-area">
                                    <h4>Follow Me on</h4>
                                    <div class="social d-flex">
                                        <a href="#" class="single-icon behance"><img src="images/social-Icon4.png" alt="social"/></a>
                                        <a href="#" class="single-icon instagram"><img src="images/social-Icon5.png" alt="social"/></a>
                                        <a href="#" class="single-icon dribbble"><img src="images/social-Icon6.png" alt="social"/></a>
                                        <a href="#" class="single-icon linkedin"><img src="images/social-Icon7.png" alt="social"/></a>
                                    </div>
                                </div>
                            </div> */}
                                    <div style={{ width: '80%', display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="contact-area">
                                                    <div class="contact-header text-center">
                                                        <p>Send us email</p>
                                                    </div>
                                                    <form enctype="multipart/form-data" method="post" class="form-area text-center" onSubmit={sendEmail}>
                                                        <div class="input-area">
                                                            <input type="text" placeholder="Full Name" name="name" value={email.name} onChange={(e)=>{handleValue(e)}
                                                            }/>
                                                            <img src={userIcon} alt="image" />
                                                        </div>
                                                        <div class="input-area">
                                                            <input type="text" placeholder="Email Address" name="email_address" value={email.email_address} onChange={(e)=>{handleValue(e)}
                                                            }/>
                                                            <img src={emailIcon} alt="image" />
                                                        </div>
                                                        <div class="input-area">
                                                            <input type="text" placeholder="Mobile Number" name="mobile_number" value={email.mobile_number} onChange={(e)=>{handleValue(e)}
                                                            }/>
                                                            <img src={mobileIcon} alt="image" />
                                                        </div>
                                                        <div class="input-area">
                                                            <input type="text" placeholder="Company Name" name="company_name" value={email.company_name} onChange={(e)=>{handleValue(e)}
                                                            }/>
                                                            <img src={companyIcon} alt="image" />
                                                        </div>
                                                        <div class="input-area" style={{display:'flex'}}>
                                                            <input type="text" placeholder="Project Description" name="project_description" value={email.project_description} onChange={(e)=>{handleValue(e)}
                                                            }/>
                                                            <IconButton color="primary" aria-label="upload picture" component="label" sx={{marginRight:"20px",marginTop:"6px"}}>
                                                                <input hidden accept="xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf" type="file" onChange={(e)=>{setEmail({...email,file:e.target.files[0]})}}/>
                                                                <PhotoCameraIcon />
                                                            </IconButton>

                                                        </div>

                                                        <Link to='' class="cmn-btn" onClick={sendEmail}>Let's Work Together</Link>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Contact me end --> */}
            <Footer />

        </div>
    )
}

export default Contact