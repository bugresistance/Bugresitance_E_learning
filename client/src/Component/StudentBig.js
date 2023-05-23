import React from 'react'

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';

import student from '../images/Latif.jpg'
import invertedcomma from '../images/invertedcomma.png'
import latif from '../images/Latifur Rahman.jpg'

import CardSlider from './CardSlider';


const StudentBig = () => {
    return (
        <div style={{ width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <h3 class="title" style={{ marginTop: "40px" }}> চাকরিপ্রাপ্ত শিক্ষার্থীরা যা বলেন</h3>
            <div style={{ marginBottom: "50px", marginTop: "50px", height: "auto", marginLeft: '40px', marginRight: '40px', maxWidth: "1300px", width: "90%" }}>
                <Card className="student_card" >
                    <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ width: "100%", padding: "20px" }} >
                        <Grid sm={12} md={6} sx={{ paddingLeft: "20px" }}>
                            <img src={student} className='img-fluid' />
                        </Grid>
                        <Grid sm={12} md={6} sx={{ paddingLeft: "20px" }}>
                            <Typography sx={{ color: '#343b6d', fontSize: '20px', lineHeight: '1.6', marginTop: "10px" }} color="text.secondary" gutterBottom >ক্যারিয়ারের শুরুতে আমার SQA সম্পর্কে তেমন কোনো জ্ঞান ছিল না। অনেক ঘাটাঘাটি করে আমি বাগ রেজিস্ট্যান্সের SQA লাইভ কোর্সে ভর্তি হই, যেটি আমার জীবনে সবচেয়ে বেস্ট ডিসিশন ছিল। আমি প্রপার্লি ম্যানুয়াল এবং অটোমেশন টেস্টিং সম্পর্কে খুঁটিনাটি জানতে পারি, যেটা আমার প্রথম জব পাওয়ার ক্ষেত্রে অনেক গুরুত্বপূর্ণ ভূমিকা পালন করে। আমার CV বানানো থেকে শুরু করে আমার প্রথম জব পাওয়া পর্যন্ত তারা যেভাবে আমাকে সাপোর্ট করেছে সেটা সত্যিই অসাধারণ ।</Typography>

                            <CardActions>
                                <Avatar src={latif} />
                                <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Box sx={{ marginLeft: "15px" }}>
                                        <Typography sx={{ color: '#343b6d', fontSize: '16px', lineHeight: '1.6', fontWeight: "700px" }}>Latifur Rahman Lemon::AUST </Typography>
                                        <Typography sx={{ color: '#343b6d', fontSize: '16px', lineHeight: '2', fontWeight: "400px" }}>SQA Engineer, Riseup Labs</Typography>
                                    </Box>
                                    <img src={invertedcomma} style={{ marginRight: "20px" }} />
                                </div>
                            </CardActions>
                        </Grid>

                    </Grid>
                </Card>
                <CardSlider />
            </div>


        </div>


        // </div>
    )
}

export default StudentBig