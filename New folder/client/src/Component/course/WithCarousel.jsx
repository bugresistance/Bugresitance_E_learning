import React from 'react'

import Slider from "react-slick";
import userImg from "../../images/userimg.jpg"
import dibya from "../../images/Dibya_Nath.jpg"
import malik from "../../images/Mallik_Galib_Shahriar.jpg"
import partho from "../../images/Partho_Debnath.jpg"
import rafi from "../../images/Rafi_SH.jpg"
import girl from "../../images/Girl_Common.jpg"


import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Avatar } from '@mui/material';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

const commentsData = [
  {
    profileImgSrc: partho,
    userName: "পার্থ দেবনাথ",
    comment: "আমি মনে করি যারা SQA সেক্টরে একটি ভাল ক্যারিয়ার শুরু  করতে চান তাদের জন্য এটি শেখার সেরা প্ল্যাটফর্ম। যে কেউ এখান থেকে ম্যানুয়াল এবং অটোমেশন টেস্টিং শিখতে পারে কারণ তাদের শেখানোর পদ্ধতি,নির্দেশিকা এবং নির্দেশনা খুবই ভাল। তাই যারা SQA শেখার জন্য কোন লার্নিং প্ল্যাটফর্মটি ভাল তা নিয়ে  অনুসন্ধান করছেন এবং বিভ্রান্ত হয়েছেন, তাদের আমি সুপারিশ করব, আপনার উচিত বাগ রেজিস্ট্যান্সের লাইভ কোর্সটি বাছাই করা।"

  },
  {
    profileImgSrc: rafi,
    userName: "রাফি",
    comment: "যারা SQA ইঞ্জিনিয়ার হিসাবে তাদের কর্মজীবন শুরু করতে চান তাদের জন্য বাগ রেজিস্ট্যান্স হল সবচেয়ে ব্যবহারিক এবং কার্যকর পরিবেশ। প্রশিক্ষকরা তাদের ক্ষেত্রে অত্যন্ত দক্ষ এবং বিভিন্ন সফটওয়্যার টেস্টিং এর সরঞ্জাম এবং কৌশলগুলির স্পষ্ট ব্যাখ্যা উপস্থাপন করেন। উপরন্তু, প্রোগ্রামটি গ্রুপ অ্যাসাইনমেন্ট এবং প্রকল্পগুলি সহ বাস্তব অভিজ্ঞতা প্রদান করে যা শিক্ষার্থীদের বাস্তব-বিশ্বের পরিস্থিতিতে তারা যা শেখে তা প্রয়োগ করতে সহায়তা করে।",

  },
  {
    profileImgSrc: girl,
    userName: "নাদিয়া গোলাম",
    comment: "একজন QA হিসাবে আপনার যাত্রা শুরু করার জন্য সেরা অনলাইন শিক্ষা প্রতিষ্ঠান বাগ রেজিস্ট্যান্স। আপনি ম্যানুয়াল এবং অটোমেশন টেস্টিং উভয়ই শিখবেন এবং SQA সম্পর্কে আপনার স্পষ্ট জ্ঞান থাকবে। প্রশিক্ষকরা খুবই সহায়ক এবং বন্ধুত্বপূর্ণ এবং তারা SQA বিশ্বে চাকরি পাওয়ার জন্য আপনাকে গাইড করবে। যে কেউ SQA হিসেবে ক্যারিয়ার গড়তে চায়, এই কোর্সটি অত্যন্ত সুপারিশ যোগ্য। SQA ইন্ডাস্ট্রীতে আরও ভাল ক্যারিয়ার গড়তে আমি সবাইকে বাগ রেজিস্ট্যান্সের লাইভ কোর্সটি করার জন্য সুপারিশ করছি।",

  },
  {
    profileImgSrc: dibya,
    userName: "দিব্য নাথ",
    comment: "SQA শিক্ষানবিসদের জন্য, এটি সবচেয়ে দক্ষ এবং কার্যকরী প্ল্যাটফর্ম। আমি বলব ম্যানুয়াল এবং অটোমেশন টেস্টিং এর জন্য সেরা প্ল্যাটফর্ম। এই কোর্সটি যে কাউকে একজন ভালো SQA ইঞ্জিনিয়ার হতে সাহায্য করবে। পরামর্শদাতারা সহায়ক এবং বাস্তব জীবনের পরিস্থিতি প্রদান করে,  যাতে একজন ব্যক্তি থিউরী থেকে প্রাকটিক্যালী বুঝতে এবং শিখতে পারে। যারা SQA তে ক্যারিয়ার গড়তে চান আমি এই কোর্সটি করার পরামর্শ দেব।",

  },
  {
    profileImgSrc: malik,
    userName: "মালিক গালিব শাহরিয়ার",
    comment: "সামগ্রিকভাবে, বাগ রেজিস্ট্যান্স SQA কোর্সের সাথে আমার একটি ইতিবাচক অভিজ্ঞতা হয়েছে। ইন্সট্রাকটররা,  বিষয়বস্তুতে খুবই জ্ঞানী ছিলেন এবং বিভিন্ন সফটওয়্যার টেস্টিং পদ্ধতি এবং সরঞ্জামগুলির স্পষ্ট ব্যাখ্যা প্রদান করেছিলেন। কোর্সটি গ্রুপ প্রজেক্ট এবং অ্যাসাইনমেন্টের মাধ্যমে হ্যান্ডস-অন অভিজ্ঞতা প্রদান করেছে, যা আমাকে ব্যবহারিক প্রয়োগ করতে সাহায্য করেছে। কোর্সের উপকরণগুলি সুসংগঠিত এবং আপ-টু-ডেট ছিল।",

  },
  
  {
    profileImgSrc: girl,
    userName: "সানজিদা আকতার মুমু",
    comment: "বাগ রেজিস্ট্যান্স SQA কোর্সে প্রদত্ত অসামান্য লেকচার এবং কোর্স উপকরণগুলির জন্য আমার আন্তরিক কৃতজ্ঞতা । ক্লাসের প্রতিটি টপিক এত ভালভাবে গোছানো ছিল যে, এটি আমাকে পরিকল্পনা মাফিক পড়াশোনা করতে অনেক সাহায্য করেছে। প্রতিটি থিউরীটিকাল বিষয়  ভাইয়ারা অনেক ডেপথলি বোঝানোর চেষ্টা করেছে।  বাগ রেজিস্ট্যান্সের SQA কোর্সটি আপনি যদি শুরু করতে চান, আমি বলবো আপনি নিসন্দেহে কোর্সটি শুরু করতে পারেন।",
  },
]
const settings = {
  dots: true,
      // infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
      pauseOnDotsHover:"true", 
      pauseOnFocus: "true",
      autoplay:'true',
      adaptiveHeight:"true",
      useCSS: 'true',
      useTransform: 'true',
      appendDots: dots => (
        <div
          style={{
            padding: "2px",
            backgroundColor: "#ffffff",
            borderRadius: "5px"
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          style={{
            width: "30px",
            height: "30px",
            fontSize:"1rem",
            color: "gray",
          }}
        >
          <HorizontalRuleIcon />
        </div>
      )
      


}
const WithCarousel = () => {
  return (
    <div className='carosol' style={{marginTop: "30px"}}>
      <Slider {...settings} className='cro'  >
    {commentsData.map((comment)=> {
      return(

    <div className='carosel__div'>
      <div className='carosel__div__top'>
        <FormatQuoteIcon sx={{
          rotate: "180deg",
          color: "#F23460" ,
          fontSize: "3rem",
          // fontWeight: "700"
        }}  />
      </div>
      <div className='carosel__div__middle'>
        <p>
          {comment.comment}
        </p>
      </div>
      <div className='carosel__div__bottom' style={{marginBottom: "0"}}>
        <div className='user__profile__img'>
          {/* <img alt={'user img'} src={comment.profileImgSrc} /> */}
          <Avatar src={comment.profileImgSrc} sx={{ width: 100, height: 100 }} />
        </div>
        <div className='user__profile__name' style={{textAlign: "center"}} >
          <span>{comment.userName}</span>
        </div>
      </div>
    </div>

)
})}
</Slider>
    </div>
  )
}

export default WithCarousel