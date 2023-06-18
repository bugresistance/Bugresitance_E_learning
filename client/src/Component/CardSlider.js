import React, { useState } from 'react'
import Slider from "react-slick";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import student from '../image/student.png'
import invertedcomma from '../image/invertedcomma.png'
import xin from '../image/Xin Akib Siddiquee.jpg'
import saad from '../image/Saad Chowdhury.jpg'
import nafiz from '../image/Nafiz Khan.jpg'
import latif from '../image/Latifur Rahman.jpg'
import hijab from '../image/Hijab.jpg'

import { Avatar } from '@mui/material';
import { useEffect } from 'react';
import Loding from './useHook/Loding';

const CardSlider = () => {
    const [sliderData, setSliderData] = useState([])
    const [loading, setLoading] = useState(false)
    var settings = {
        className: "auto_slider",
        dotsClass: "slick-dots",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        appendDots: dots => (

            <ul style={{ margin: "0 0 -30px 0" }}> {dots} </ul>
        ),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    const getData = async () => {
        setLoading(true)
        const res = await fetch(`${process.env.REACT_APP_URL}/getdata`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        if (res.status === 200) {
            setSliderData(data)
            setLoading(false)
        } else {
            setLoading(false)
        }

    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            {loading ? <Loding /> :
                <>
                    <div style={{ maxHeight: "80vh", maxWidth: "1300px", marginTop: "60px", width: "100%", }}>
                        <Slider  {...settings} >
                            {
                                sliderData.map((val, ind) => {
                                    return (
                                        <Card className='student_cards' sx={{ backgroundColor: "#FFFFF", border: "2px solid whitesmoke" }}>
                                            <CardContent>
                                                <Typography sx={{ color: '#343b6d', fontSize: '20px', lineHeight: '1.6' }} color="text.secondary" gutterBottom>
                                                    {val.say}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Avatar src={val.url} />
                                                <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                    <Box>
                                                        <Typography sx={{ color: '#343b6d', fontSize: '16px', lineHeight: '1.6', fontWeight: "700px" }}>{val.name}</Typography>
                                                        <Typography sx={{ color: '#343b6d', fontSize: '16px', lineHeight: '2', fontWeight: "400px" }}>{val.job}</Typography>
                                                    </Box>
                                                    <img src={invertedcomma} />
                                                </div>
                                            </CardActions>
                                        </Card>
                                    )

                                })
                            }
                        </Slider>

                    </div>
                </>

            }
        </>


    )
}

export default CardSlider