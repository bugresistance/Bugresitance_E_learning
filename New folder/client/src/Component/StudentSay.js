import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import student from '../images/student.png'
import invertedcomma from '../images/invertedcomma.png'
import { Avatar } from '@mui/material';
const StudentSay = () => {

  return (
    <>
    
      {/* <div className='student_card' style={{display:"flex",marginRight:"30px",border:"2px solid red"}}> */}
        <Card className='student_cards' sx={{backgroundColor: "#FFFFF" ,border:"2px solid whitesmoke" }}>
          <CardContent>
            <Typography sx={{ color: '#343b6d',fontSize: '20px',lineHeight: '1.6' }} color="text.secondary" gutterBottom>
            ক্যারিয়ারের শুরুতে আমার SQA সম্পর্কে তেমন কোনো জ্ঞান ছিল না। অনেক ঘাটাঘাটি করে আমি বাগ রেজিস্ট্যান্সের SQA লাইভ কোর্সে ভর্তি হই, যেটি আমার জীবনে সবচেয়ে বেস্ট ডিসিশন ছিল। আমি প্রপার্লি ম্যানুয়াল এবং অটোমেশন টেস্টিং সম্পর্কে খুঁটিনাটি জানতে পারি, যেটা আমার প্রথম জব পাওয়ার ক্ষেত্রে অনেক গুরুত্বপূর্ণ ভূমিকা পালন করে। আমার CV বানানো থেকে শুরু করে আমার প্রথম জব পাওয়া পর্যন্ত তারা যেভাবে আমাকে সাপোর্ট করেছে সেটা সত্যিই অসাধারণ । 
            </Typography>
          </CardContent>
          <CardActions>
            <Avatar src={student} />
            <div style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <Box>
              <Typography sx={{ color:'#343b6d',fontSize: '20px',lineHeight: '1.6',fontWeight:"700px" }}>Latifur Rahman Lemon::AUST </Typography>
              <Typography sx={{ color:'#343b6d',fontSize: '20px',lineHeight: '2',fontWeight:"400px" }}>SQA Engineer, Riseup Labs</Typography>
            </Box>
            <img src={invertedcomma}/>
            </div>           
          </CardActions>
        </Card>
        <Card className='student_cards' sx={{backgroundColor: "#FFFFF" ,border:"2px solid whitesmoke" }}>
          <CardContent>
            <Typography sx={{ color: '#343b6d',fontSize: '20px',lineHeight: '1.6' }} color="text.secondary" gutterBottom>
            আমার বাগ রেজিস্ট্যান্সের SQA লাইভ কোর্সের জার্নি সত্যি অসাধারণ । কারণ তাদের যে কোনো সময় যে কোনো প্রব্লেমে আমাকে সাপোর্ট করেছে। প্রাক্টিকালি তারা যে প্রজেক্ট গুলো আমাদের করিয়েছে সেগুলো বিভিন্ন কোম্পানীতে ইন্টারভিউ দেওয়ার সময় খুবই কাজে দিয়েছে। সবচেয়ে যে জিনিসটি আমার ভাল লেগেছে , সেটি হচ্ছে আমি যে কোনো কোম্পানীতে ইন্টারভিউ দেওয়ার আগের দিন আমাকে স্পেশালভাবে ক্লাস নিয়েছে, যেটি খুবই অসাধারণ । 
            </Typography>
          </CardContent>
          <CardActions>
            <Avatar src={student} />
            <div style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <Box>
              <Typography sx={{ color:'#343b6d',fontSize: '20px',lineHeight: '1.6',fontWeight:"700px" }}>Saad Chowdhury::AUST  </Typography>
              <Typography sx={{ color:'#343b6d',fontSize: '20px',lineHeight: '2',fontWeight:"400px" }}>SQA Engineer, Trainee BJIT Ltd </Typography>
            </Box>
            <img src={invertedcomma}/>
            </div>           
          </CardActions>
        </Card>
        <Card className='student_cards' sx={{backgroundColor: "#FFFFF" ,border:"2px solid whitesmoke" }}>
          <CardContent>
            <Typography sx={{ color: '#343b6d',fontSize: '20px',lineHeight: '1.6' }} color="text.secondary" gutterBottom>
            এটা এমন একটি কোর্স যেটা ম্যানুয়্যাল & অটোমেশন ২ টা টপিকই কভার করবে। SQA এর জন্য সিভি অনেকেই তৈরী করতে না পারলেও আপনার সিভি বানানো থেকে শুরু করে সব কিছুই প্রাকটিক্যালি দেখানো হবে এখানে।সাথে কুইজ & এসাইনমেন্ট & প্রয়োজন অনুযায়ী এক্সট্রা ক্লাস তো থাকছেই। ক্লাসগুলো খুবই  ফ্রেন্ডলি ভাবে নেয়া হয় যাতে আপনি খুব সহজেই আপনার প্রশ্নগুলো করতে পারেন & সত্যি বলতে একটা সময়ে আপনার ক্লাস, ব্যাচমেট & ভাইকে মিস করবেন কিছু সময়ে জন্য হলেও।আর জব এর ব্যাপারে ভাইরা অনেক হেল্পফুল । জব পাবার জন্য আপনাকে যেভাবে গাইড করা প্রয়োজন তারা সেভাবেই গাইড করবে & আপনার কোন পথে গেলে ভালো হবে সেসবের গাইডলাইনও পাবেন ভাইদের নক/ফোন দিলেই।
            </Typography>
          </CardContent>
          <CardActions>
            <Avatar src={student} />
            <div style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <Box>
              <Typography sx={{ color:'#343b6d',fontSize: '20px',lineHeight: '1.6',fontWeight:"700px" }}>Nura Solahin Esha::AIUB </Typography>
              <Typography sx={{ color:'#343b6d',fontSize: '20px',lineHeight: '2',fontWeight:"400px" }}>SQA Engineer,Silicon Orchard LTD</Typography>
            </Box>
            <img src={invertedcomma}/>
            </div>           
          </CardActions>
        </Card>
        <Card className='student_cards' sx={{backgroundColor: "#FFFFF" ,border:"2px solid whitesmoke" }}>
          <CardContent>
            <Typography sx={{ color: '#343b6d',fontSize: '20px',lineHeight: '1.6' }} color="text.secondary" gutterBottom>
            আমি অনেক কনফিউশন ছিলাম, SQA লাইভ কোর্সটিতে ভর্তি হব কিনা, কারণ অনলাইনে জিনিসপত্র আমি বুঝতে পারবো কিনা সেটা নিয়ে সন্দিহান ছিলাম। কিন্তু বাগ রেজিস্ট্যান্সের ইন্সট্রাকটররা এমনভাবে সাপোর্ট করেছে, আমার সব সময় মনে হয়েছে আমি অফলাইনে কোর্স্টি করছি। সত্যি  আমি তাদের প্রতি অনেক কৃতজ্ঞতা প্রকাশ করছি । 
            </Typography>
          </CardContent>
          <CardActions>
            <Avatar src={student} />
            <div style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <Box>
              <Typography sx={{ color:'#343b6d',fontSize: '20px',lineHeight: '1.6',fontWeight:"700px" }}>Nafiz Khan::BUBT  </Typography>
              <Typography sx={{ color:'#343b6d',fontSize: '20px',lineHeight: '2',fontWeight:"400px" }}>Prediction learning Associated ltd</Typography>
            </Box>
            <img src={invertedcomma}/>
            </div>           
          </CardActions>
        </Card>
        <Card className='student_cards' sx={{backgroundColor: "#FFFFF" ,border:"2px solid whitesmoke" }}>
          <CardContent>
            <Typography sx={{ color: '#343b6d',fontSize: '20px',lineHeight: '1.6' }} color="text.secondary" gutterBottom>
            বাগ রেজিস্ট্যান্সের SQA লাইভ কোর্সে যতটুকু এক্সপেক্টেশন নিয়ে এসেছি, তার থেকে অনেক বেশি কিছু পেয়েছি। সম্পূর্ণ নতুন একটি জিনিস কিভাবে শিখবো সেটা নিয়ে অনেক দ্বিধাদ্বন্দতে ছিলাম, কিন্তু কোর্স শেষ করার পর মনে হয়েছে অনেক কিছু নতুন আঙ্গিকে জানতে পেরেছি । সবচেয়ে ভালো লেগেছে উদাহরণ ও গল্পগুলো, যা আমাদের জীবনের সাথে পুরোপুরি ভাবে বাস্তবিক শিক্ষা দেয়। বাগ রেজিস্ট্যান্সকে ধন্যবাদ জানাই কোর্সটি এত প্রাণবন্তভাবে সাজানোর জন্য।
            </Typography>
          </CardContent>
          <CardActions>
            <Avatar src={student} />
            <div style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <Box>
              <Typography sx={{ color:'#343b6d',fontSize: '20px',lineHeight: '1.6',fontWeight:"700px" }}>Xin Akib Siddiquee::IIUC </Typography>
              <Typography sx={{ color:'#343b6d',fontSize: '20px',lineHeight: '2',fontWeight:"400px" }}>Riseup Labs</Typography>
            </Box>
            <img src={invertedcomma}/>
            </div>           
          </CardActions>
        </Card>
        <Card className='student_cards' sx={{backgroundColor: "#FFFFF" ,border:"2px solid whitesmoke" }}>
          <CardContent>
            <Typography sx={{ color: '#343b6d',fontSize: '20px',lineHeight: '1.6' }} color="text.secondary" gutterBottom>
            সত্যি অসাধারণ ছিল তাদের কোর্সটি । তাদের পড়ানোর স্টাইল এবং আন্তরিকরার কোনো ঘাটতি ছিল না। 
            </Typography>
          </CardContent>
          <CardActions>
            <Avatar src={student} />
            <div style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <Box>
              <Typography sx={{ color:'#343b6d',fontSize: '20px',lineHeight: '1.6',fontWeight:"700px" }}>Tasnia Tahsin Nujhat:: CUET  </Typography>
              <Typography sx={{ color:'#343b6d',fontSize: '20px',lineHeight: '2',fontWeight:"400px" }}>Enosis Solutions Ltd</Typography>
            </Box>
            <img src={invertedcomma}/>
            </div>           
          </CardActions>
        </Card>

     
    </>

  )
}

export default StudentSay