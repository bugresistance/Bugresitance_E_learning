import React, { useState, useEffect } from 'react'
import emailjs from 'emailjs-com';
import Footer from './Shared/Footer'
import NavbarTop from './Shared/NavbarTop'
import { Button, IconButton } from '@mui/material'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import userIcon from '../image/user-icon.png'
import emailIcon from '../image/email-icon2.png'
import mobileIcon from '../image/mobile.png'
import companyIcon from '../image/company.png'
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import UpdatedFooter from './Shared/UpdatedFooter';

const Contact = () => {
    const [isValidate, setIsValidate] = useState(true)
    const commonToast = (field) => {
        toast.dismiss();
        toast(`${field} field is empty`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const middleWare = () => {
        const mobileNumber = email.mobile_number.replace(/\s/g, "");
        const mobileRegex = /^[0-9+]{7,15}$/g
        // /^\+?(88)?0?1[3456789][0-9]{8}\b/g
        const emailRegex = /^[a-z0-9._-]+@([a-z0-9-]+\.)+[a-z]{2,4}$/g
        const nameRegex = /^[A-Za-z.\s]{2,30}$/g

        if (!nameRegex.test(email.name.trim())) {
            toast(`Invalid Name`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return true
        }
        else if (!emailRegex.test(email.email_address.trim())) {
            toast(`Invalid Email Address`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return true
        }
        else if (!mobileRegex.test(mobileNumber.trim())) {
            toast(`Invalid Phone Number`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return true
        }


        return false
    }

    const sendEmail = (e) => {
        // const isValidationError = middleWare()
        // console.log("before",email);
        if (email.name.trim() === '') {
            
            commonToast('Name')
        } else if (email.email_address.trim() === '') {
            commonToast('Email')
        }
        else if (email.mobile_number.trim() === '') {
            commonToast('Mobile Number')
        }
        else if (email.company_name.trim() === '') {
            commonToast('Company Name')
        }
        else {
            if (middleWare()) {
                // console.log("Entered Error");
                return
            } else {
                
                emailjs.send('service_4og0lz8', 'template_qwdecog', email, 'OhnRrYONM1hMebI47')
                    .then(function () {
                        console.log('SUCCESS!');
                        toast('Email Submitted Successfully', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                        setEmail({
                            name: "",
                            project_description: "",
                            email_address: "",
                            mobile_number: "",
                            company_name: "",
                            file: ""
                        })
                    }, function (error) {
                        toast('Email Not Sent', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                        console.log('FAILED...', error);
                    });
            }
        }

    }
    const [email, setEmail] = useState({
        name: "",
        project_description: "",
        email_address: "",
        mobile_number: "",
        company_name: "",
        file: ""
    })
    let fieldName
    let value
    const handleValue = (e) => {
        fieldName = e.target.name
        value = e.target.value
        setEmail({ ...email, [fieldName]: value })
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
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
                                    <h1>Contact Us</h1>

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
                                            <p>We’d love to meet up with you to discuss your venture, and potential collaborations.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="" style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>

                                    <div style={{ width: '80%', display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="contact-area">
                                                    <div class="contact-header text-center">
                                                        <p>Send Us Email</p>
                                                    </div>
                                                    <form enctype="multipart/form-data" method="post" class="form-area text-center" onSubmit={sendEmail}>
                                                        <div class="input-area">
                                                            <input type="text" className='contact_input' placeholder="Full Name *" name="name" value={email.name} onChange={(e) => { handleValue(e) }
                                                            } />
                                                            <img src={userIcon} alt="image" />
                                                        </div>
                                                        <div class="input-area">
                                                            <input className='contact_input' type="text" placeholder="Email Address *" name="email_address" value={email.email_address} onChange={(e) => { handleValue(e) }
                                                            } />
                                                            <img src={emailIcon} alt="image" />
                                                        </div>
                                                        <div class="input-area">
                                                            <input className='contact_input' type="text" placeholder="Mobile Number *" name="mobile_number" value={email.mobile_number} onChange={(e) => { handleValue(e) }
                                                            } />
                                                            <img src={mobileIcon} alt="image" />
                                                        </div>
                                                        <div class="input-area">
                                                            <input className='contact_input' type="text" placeholder="Company Name *" name="company_name" value={email.company_name} onChange={(e) => { handleValue(e) }
                                                            } />
                                                            <img src={companyIcon} alt="image" />
                                                        </div>
                                                        <div class="input-area" style={{ display: 'flex' }}>
                                                            <textarea className='contact_input' type="text" rows="4" cols="50" placeholder="Project Description" name="project_description" value={email.project_description} onChange={(e) => { handleValue(e) }
                                                            } />
                                                            {/* <IconButton color="primary" aria-label="upload picture" component="label" sx={{ marginRight: "20px", marginTop: "6px" }}>
                                                                <input hidden accept="xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf" type="file" onChange={(e) => { setEmail({ ...email, file: e.target.files[0] }) }} />
                                                                <PhotoCameraIcon />
                                                            </IconButton> */}

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
            <UpdatedFooter />

        </div>
    )
}

export default Contact