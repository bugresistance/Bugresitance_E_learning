import React, { useEffect, useLayoutEffect, useState } from 'react'
import Loding from './useHook/Loding';
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
const AdmissionForm = () => {
    const [loading, setLoading] = useState(false)
    const [url, setUrl] = useState('')
    const [placeHolder, setPlaceHolder] = useState('Select your Picture')
    const [studentInfo, setStudentInfo] = useState({
        studentName: "",
        Email: "",
        mobileNumber: "",
        universityName: "",
        transactionId: "",
        facebookId: "",
        batchId: "",
    })
    const [batchName, setBatchName] = useState('')
    const [image, setImage] = useState('')
    const uploadImage = (e) => {
        console.log(e.target.files[0]);
        setImage(e.target.files[0])
        setPlaceHolder(e.target.files[0].name)
    }
    let fieldName
    let value
    const handleValue = (e) => {
        fieldName = e.target.name
        value = e.target.value
        setStudentInfo({ ...studentInfo, [fieldName]: value })
    }

    const getLatestBatch = async () => {
        setLoading(true)
        const res = await fetch(`${process.env.REACT_APP_URL}/getLatestBatch`, {
            method: "GET",
        })
        const data = await res.json()

        if (res.status === 200) {
            setStudentInfo({ ...studentInfo, batchId: data[0]?._id })
            setBatchName(data[0]?.batchName)
            setLoading(false)
        } else {
            setLoading(false)
        }
    }

    const submitForm = () => {
        setLoading(true)
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "insta-clone")
        data.append("cloud_name", "saimomcloud")
        console.log(data);
        fetch("https://api.cloudinary.com/v1_1/saimomcloud/image/upload", {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                setUrl(data.url)
                fetch(`http://localhost:4000/addstudent`, {
                    method: "post",
                    body: JSON.stringify({
                        studentName: studentInfo.studentName,
                        Email: studentInfo.Email,
                        mobileNumber: studentInfo.mobileNumber,
                        universityName: studentInfo.universityName,
                        transactionId: studentInfo.transactionId,
                        facebookId: studentInfo.facebookId,
                        batchId: studentInfo.batchId,
                        formalPic: data.url
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (!data.message) {
                            toast("Added Successfully", {
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                            });

                            setStudentInfo({
                                studentName: "",
                                Email: "",
                                mobileNumber: "",
                                universityName: "",
                                transactionId: "",
                                facebookId: "",
                                batchId: "",
                            })
                            setImage("")
                            setLoading(false)
                        } else {
                            toast(data.message, {
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                            });

                            setImage("")
                            setLoading(false)
                        }

                    })
                    .catch(err => {
                        toast(err, {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                        setLoading(false)
                    })
            })
            .catch(err => {
                console.log(err);
                toast('Fill All the fields', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setLoading(false)
            })
    }
    useLayoutEffect(() => {
        getLatestBatch()
    }, [])

    return (
        <>
            {
                loading ? <Loding /> :
                    <div>
                        <NavbarTop />

                        {/* <!-- inner banner start --> */}
                        <section id="banner-section" class="inner-banner cart contact">
                            <div class="banner-content d-flex align-items-center">
                                <div class="container">
                                    <div class="row d-flex justify-content-start">
                                        <div class="col-lg-12">
                                            <div class="text-area pb-120">
                                                <h1>Admission Form</h1>
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
                                            <div class="" style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>

                                                <div style={{ width: '80%', display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <div class="contact-area">
                                                                <div class="contact-header text-center">
                                                                    <p>Fill up the form</p>
                                                                </div>
                                                                <form enctype="multipart/form-data" method="post" class="form-area text-center" >
                                                                    <div class="input-area">
                                                                        <input type="text" placeholder="Full Name" name="studentName" value={studentInfo.studentName} onChange={(e) => { handleValue(e) }
                                                                        } />
                                                                        <img src={userIcon} alt="image" />
                                                                    </div>
                                                                    <div class="input-area">
                                                                        <input type="text" placeholder="Email Address" name="Email" value={studentInfo.Email} onChange={(e) => { handleValue(e) }
                                                                        } />
                                                                        <img src={emailIcon} alt="image" />
                                                                    </div>
                                                                    <div class="input-area">
                                                                        <input type="text" placeholder="Mobile Number" name="mobileNumber" value={studentInfo.mobileNumber} onChange={(e) => { handleValue(e) }
                                                                        } />
                                                                        <img src={mobileIcon} alt="image" />
                                                                    </div>
                                                                    <div class="input-area">
                                                                        <input type="text" placeholder="University Name" name="universityName" value={studentInfo.universityName} onChange={(e) => { handleValue(e) }
                                                                        } />
                                                                        <img src={companyIcon} alt="image" />
                                                                    </div>
                                                                    <div class="input-area">
                                                                        <input type="text" placeholder="Bkash Transaction ID" name="transactionId" value={studentInfo.transactionId} onChange={(e) => { handleValue(e) }
                                                                        } />
                                                                        <img src={companyIcon} alt="image" />
                                                                    </div>
                                                                    <div class="input-area">
                                                                        <input type="text" placeholder="Facebook Link" name="facebookId" value={studentInfo.facebookId} onChange={(e) => { handleValue(e) }
                                                                        } />
                                                                        <img src={companyIcon} alt="image" />
                                                                    </div>
                                                                    <div class="input-area">
                                                                        <input type="text" placeholder="Batch NO" name="batch" value={batchName} />
                                                                        <img src={companyIcon} alt="image" readOnly={true} />
                                                                    </div>
                                                                    <div class="input-area" style={{ display: 'flex' }}>
                                                                        <input type="text" placeholder={placeHolder} name="Uploa Your Picture" readOnly />
                                                                        <IconButton color="primary" aria-label="upload picture" component="label" sx={{ marginRight: "20px", marginTop: "6px" }} onChange={uploadImage}>
                                                                            <input hidden accept="image/*" type="file" />
                                                                            <PhotoCameraIcon />
                                                                        </IconButton>

                                                                    </div>

                                                                    <Link to='' class="cmn-btn" onClick={submitForm} >Submit</Link>
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
            }
        </>


    )
}

export default AdmissionForm