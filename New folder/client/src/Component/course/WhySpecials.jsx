import React from "react";
import { Html } from "@mui/icons-material";
import LiveTvIcon from '@mui/icons-material/LiveTv';
import CodeIcon from '@mui/icons-material/Code';
import FeedbackIcon from '@mui/icons-material/Feedback';
import AssignmentIcon from '@mui/icons-material/Assignment';
import WorkIcon from '@mui/icons-material/Work';
let contents = [
  {
  heading: "লাইভ ক্লাস",
  content: "যে কোনো স্টুডেন্টের এর জন্য লাইভ ক্লাস করাটা খুবই গুরুত্বপূর্ণ, তার উপরে সেটা যদি হয় সম্পূর্ণ নতুন একটি বিষয় নিয়ে পড়াশোনা । যেটি বিশ্ববিদ্যালইয়ে খুব একটা পড়ানো হয়না। তাই আমাদের এই লাইভ ক্লাস গুলোতে কোর্স টিচারের সাথে সরাসরি কমিউনিকেশন করে শিখাটা আপনার জন্য খুবই গুরুত্বপূর্ন",
  icon: <LiveTvIcon color="white"
  sx={{
    backgroundColor: "#ffffff",
  }} />
},
{
  heading: "প্রবলেম সলভিং ও মেন্টর সাপোর্ট",
  content: "প্রতি ব্যাচে একজন করে ডেডিকেটেড মেন্টর থাকবে যে ক্লাসের সময়ের বাইরেও স্টুডেন্টের  বিভিন্ন সমস্যা ও প্রশ্নের উত্তর দেবে! ফেসবুক গ্রুপের পাশাপাশি একটা মেসেঞ্জার গ্রুপও থাকবে, যেন আপনি ব্যাচের অন্য স্টুডেন্টদের সাথে লার্নিং ম্যাটেরিয়াল নিয়ে সরাসরি আলোচনা করতে পারেন।",
  icon: <CodeIcon  color="white"
  sx={{
    backgroundColor: "#ffffff",
  }}/>
},{
  heading: "প্রজেক্ট অ্যাসেসমেন্ট ও পার্সোনাল ফিডব্যাক",
  content: "পুরো প্রোগ্রামে মোট ৬ টি প্রজেক্ট তো আমরা করে দেখাবো। কিন্তু এর বাইরে আরো ৬টি প্রজেক্ট আপনাকে কমপ্লিট করতে হবে। কমপ্লিট করে সেগুলো আপনি অ্যাসাইনমেন্ট হিসাবে সাবমিট করবেন। ৩ মাসের মধ্যে অ্যাসাইনমেন্টগুলো সাবমিট করলে প্রতিটি অ্যাসাইনমেন্ট আমরা ম্যানুয়ালি অ্যাসেস করবো। প্রতিটির জন্য ইমেইলের মাধ্যমে পার্সোনাল ফিডব্যাক জানিয়ে দেবো আপনাকে। উল্লেখ্য যে, বর্তমান অ্যাসাইনমেন্টগুলোর সাথে আমরা নতুন আরো অ্যাসাইনমেন্ট যোগ করছি।",
  icon: <FeedbackIcon color="white"
  sx={{
    backgroundColor: "#ffffff",
  }} />
},
{
  heading: "সিভি তৈরী",
  content: "আমরা প্রতিটি শিক্ষার্থীর জন্য আলাদা আলাদা সিভি বানানোর প্রক্রিয়া করে থাকি যেনো প্রতিটি সিভির মধ্যে একটা সফটওয়্যার ইন্ডাস্ট্রি যেসব জিনিস আশা করে সেসব জিনিসগুলো বজায় থাকে। প্রতিটি সিভি বানানোর পাশাপাশি আমরা একটি করে কভার লেটার তৈরী করে দিয়ে থাকি যেটি চাকরীতে ইন্টারভিউ কল পাওয়ার জন্য খুবই  সহয়তা করে থাকে ।"
  , icon: <AssignmentIcon color="white"
  sx={{
    backgroundColor: "#ffffff",
  }} />
},
{
  heading: "জব প্লেসমেন্ট সাপোর্ট",
  content: "ব্যাচের বেস্ট পারফর্মিং শিক্ষার্থীদের রেজ্যুমে আমরা আমাদের Hiring Partner-দের সাথে শেয়ার করে রাখবো। তাদের যখন ক্যান্ডিডেট লাগবে, আমাদের শিক্ষার্থীদের তারা বিবেচনা করে দেখবে। যদিও কোর্স শেষে চাকরির গ্যারান্টি দেয়া সম্ভব নয় কারো পক্ষে, আমরা আমাদের সাইড থেকে সর্বোচ্চ চেষ্টা করবো যেন নিয়োগদাতাদের কাছে আমাদের শিক্ষার্থীদের ইনফো পৌঁছে যায়। এছাড়া এক্সপার্ট সেশনগুলো থেকেও জব হান্ট ও অ্যাপ্লিকেশন সম্পর্কিত পরামর্শ পাবেন খুব ভালোভাবে। তাই জব প্লেসমেন্ট সাপোর্ট ঠিকভাবে পেতে ৩ মাসের মধ্যে পুরো ক্যারিয়ার ট্র্যাকের সিলেবাস ঠিকভাবে শেষ করে অ্যাসাইনমেন্টগুলো জমা দিন।",
  icon: <WorkIcon color="white"
  sx={{
    backgroundColor: "#ffffff",
  }}  />
},
]
const WhySpecials = () => {
  return (
    <>
      <div className="why__specials course__description">
        <div>
          <h3>বাগ রেজিস্ট্যান্সের SQA ক্যারিয়ার ট্র্যাক প্রোগ্রাম এতো স্পেশাল কেন?</h3>
        </div>
        <div className="gutter__div"></div>

        <hr />
    <div className="gutter__div"></div>

        <div>
          <p>
          কিছু ‘অস্বাভাবিক’ সুবিধার জন্য এটি স্পেশাল – যেগুলো রেগুলার অফলাইন কোর্সে এত ডেডিকেটেডভাবে দেয়া সম্ভব হয় না। এসব সুবিধা নিশ্চিত করতেই মূলত আমরা SQA Live Course চালু করেছে। নতুন ব্যাচের জন্য সুবিধাগুলো আপডেটও করছি আমরা!
          </p>
        </div>
      </div>
    <div className="gutter__div"></div>

      <hr />
      <div className="gutter__div"></div>

{contents.map((item)=> (
  <>
  <div className="gutter__div">
        <div className="card__s">
          <div className="card__header" style={{padding: "1rem 0"}}>
            {/* <div className="card__img">
              
            </div> */}
            <div className="card__text">
              <h2>{item.heading}</h2>
            </div>
          </div>

          <div className="card__body">
          {item.content}
          </div>
        </div>
      </div>
  </>
))}
      {/* <div className="gutter__div">
        <div className="card__s">
          <div className="card__header">
            <div className="card__img">
              {" "}
              <Html
                color="white"
                sx={{
                  backgroundColor: "#ffffff",
                }}
              />{" "}
            </div>
            <div className="card__text">
              <h2>লাইভ ক্লাস</h2>
            </div>
          </div>

          <div className="card__body">
          যে কোনো স্টুডেন্টের এর জন্য লাইভ ক্লাস করাটা খুবই গুরুত্বপূর্ণ, তার উপরে সেটা যদি হয় সম্পূর্ণ নতুন একটি বিষয় নিয়ে পড়াশোনা । যেটি বিশ্ববিদ্যালইয়ে খুব একটা পড়ানো হয়না। তাই আমাদের এই লাইভ ক্লাস গুলোতে কোর্স টিচারের সাথে সরাসরি কমিউনিকেশন করে শিখাটা আপনার জন্য খুবই গুরুত্বপূর্ন
          </div>
        </div>
      </div>

      <div className="gutter__div">
        <div className="card__s">
          <div className="card__header">
            <div className="card__img">
              {" "}
              <Html
                color="white"
                sx={{
                  backgroundColor: "#ffffff",
                }}
              />{" "}
            </div>
            <div className="card__text">
              <h2>প্রবলেম সলভিং ও মেন্টর সাপোর্ট</h2>
            </div>
          </div>

          <div className="card__body">
          প্রতি ব্যাচে একজন করে ডেডিকেটেড মেন্টর থাকবে যে ক্লাসের সময়ের বাইরেও স্টুডেন্টের  বিভিন্ন সমস্যা ও প্রশ্নের উত্তর দেবে!
ফেসবুক গ্রুপের পাশাপাশি একটা মেসেঞ্জার গ্রুপও থাকবে, যেন আপনি ব্যাচের অন্য স্টুডেন্টদের সাথে লার্নিং ম্যাটেরিয়াল নিয়ে সরাসরি আলোচনা করতে পারেন।

          </div>
        </div>
      </div> */}
    </>
  );
};

export default WhySpecials;
