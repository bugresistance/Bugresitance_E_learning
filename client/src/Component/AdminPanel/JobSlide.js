import { Box, Button, Grid, Input, TextField } from '@mui/material'
import React, { useState } from 'react'
import NavbarTop from '../Shared/NavbarTop'
import Loding from '../useHook/Loding'
import { toast } from 'react-toastify';
import Batch from './Batch';
import { useNavigate } from 'react-router-dom';
const JobSlide = () => {
    const [image, setImage] = useState('')
    const [url, setUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const [info, setInfo] = useState({
        say: "",
        name: "",
        job: ""
    })
    const [courseDate, setCourseDate] = useState('')
    const uploadImage = (e) => {
        setImage(e.target.files[0])
    }
    const navigate = useNavigate()

    const submitImage = () => {
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
                fetch(`${process.env.REACT_APP_URL}/addslider`, {
                    method: "post",
                    body: JSON.stringify({
                        say: info.say,
                        job: info.job,
                        name: info.name,
                        url: data.url
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
                            setInfo({
                                say: "",
                                name: "",
                                job: ""
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
                            setInfo({
                                say: "",
                                name: "",
                                job: ""
                            })
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

    const addCourseTime = async () => {
        setLoading(true)
        const res = await fetch(`${process.env.REACT_APP_URL}/addcoursedate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                time: courseDate
            })
        })
        const data = await res.json()
        if (res.status === 200) {
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
            setCourseDate('')
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
            setLoading(false)
        }
    }
    return (
        <>
            {loading ? <Loding /> :
                <>
                    <NavbarTop />
                    <div className='admin_page_wrapper'>
                        <div className='add_student_slide'>
                            <h3>Add Employeed Student's Say</h3>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                <Grid item xs={2} sm={4} md={4} >
                                    <TextField
                                        id="outlined-textarea"
                                        label="Student'Say"
                                        placeholder="Paste the text"
                                        sx={{ width: '100%' }}
                                        onChange={(e) => { setInfo({ ...info, say: e.target.value }) }}
                                    />
                                </Grid>
                                <Grid item xs={2} sm={4} md={4} >
                                    <TextField id="outlined-basic" sx={{ width: '100%' }} label="Name" variant="outlined"
                                        onChange={(e) => { setInfo({ ...info, name: e.target.value }) }}
                                    />

                                </Grid>
                                <Grid item xs={2} sm={4} md={4} >
                                    <TextField id="outlined-basic" label="Job" sx={{ width: '100%' }} variant="outlined" onChange={(e) => { setInfo({ ...info, job: e.target.value }) }} />
                                </Grid>
                            </Grid>
                            <Button variant="contained" component="label" sx={{ marginTop: "50px" }}>
                                Select Image
                                <input hidden accept="image/*" type="file" onChange={uploadImage} />
                            </Button>
                            <Button variant="contained" component="label" sx={{ marginTop: "50px" }} onClick={submitImage}>
                                Upload
                            </Button>
                        </div>

                        <div className='course_date'>
                            <h3>Add Course Date And Time</h3>
                            <TextField
                                id="outlined-textarea"
                                label="Course Date And Time"
                                placeholder="Date And Time"
                                sx={{ width: '50%' }}
                                onChange={(e) => { setCourseDate(e.target.value) }}
                            />
                            <Button variant="contained" component="label" sx={{ marginTop: "50px" }} onClick={addCourseTime}>
                                Add Time
                            </Button>
                        </div>

                        <Batch setLoading={setLoading} />

                        <div className='course_date' style={{marginBottom:"50px"}}>
                            <Button variant="contained" component="label" sx={{ marginTop: "50px" }} onClick={()=>{navigate('/adminpanelstudentdetail')}}>
                                Go To Student's Details
                            </Button>
                        </div>
                    </div>
                </>
            }

        </>

    )
}

export default JobSlide