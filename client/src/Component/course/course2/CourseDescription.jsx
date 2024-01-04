import React from "react";

import { Html } from "@mui/icons-material";
let contents = [
  {
  heading: "কি শিখবেন এই কোর্সে থেকে?",
  content: "একজন Automation Engineer হবার জন্য আপনাকে একটি সফটয়্যার এর কিছু মৌলিক বিষয়গুলো নিয়ে খুব ভালোভাবে জানতে হবে। তাই পুরো প্রোগ্রামে আপনি কয়েক ধাপে দুই ধরনের টেস্টিং শেখার সুযোগ পাবেন। ক্যারিয়ার ট্র্যাকের যাবতীয় ম্যাটেরিয়াল আমরা বিভিন্ন টেক কোম্পানিতে কর্মরত ইঞ্জিনিয়ারদের দিয়ে রিভিউ করিয়ে নিয়েছি, যেন আপনি ইন্ডাস্ট্রি-স্ট্যান্ডার্ড ট্রেনিং পান।"
},
{
  heading: "সফটওয়্যার টেস্টিং বেসিকস",
  content: "যেকোনো ধরনের টেস্টিং এর জন্য সবচেয়ে বেসিক লেভেলে Manual Testing এর বিষয়গুলো খুব ভালভাবে জানতে হয়। Automation এর জন্য Selenium এর মতো ফ্রেমওয়ার্ক জানা থাকলে সেটা দেয় বাড়তি সুবিধা। এগুলো সম্পর্কে জানা না থাকলে এ কোর্সে জেনে যাবেন।"
},{
  heading: "Automation Testing অ্যাডভান্সড",
  content: "মডার্ন সফটয়্যার গুলো  সাধারণত ডায়নামিক হয়। অর্থাৎ সেগুলোতে ইউজাররা নানা ধরনের ইন্টারঅ্যাকশন করে থাকেন। আবার সেসব ইন্টারঅ্যাকশন নিয়ন্ত্রণ করা হয় একটি সিস্টেম দিয়ে, যেটি গুরুত্বপূর্ণ ডেটা সংগ্রহ ও সংরক্ষণের কাজও করে। তাই এই ডায়নামিক জিনিসের টেস্টিং করতে আপনাকে অ্যাডভান্সড Automation Testing সম্পর্কে জানতে হবে। "
},
{
  heading: "রিয়েল-লাইফ প্রজেক্ট",
  content: "Automation Testing এর জন্য দরকারি টেকনোলজিগুলো নিয়ে আপনি যা কিছু জানবেন, সেগুলো ৬টি রিয়েল-লাইফ প্রজেক্টের মাধ্যমে করে দেখানো হবে। আপনি নিজেও ৬টি প্রজেক্ট করবেন।"
},

]

const courseEndPartContents = [
  {
    heading: "কমপ্লিট ফ্রন্ট এন্ড ডেভেলপমেন্ট",
    content: "যারা দেশী-বিদেশী সফটওয়্যার কোম্পানি ও আইটি ফার্মগুলোতে কিংবা কোনো কোম্পানির প্রোডাক্ট ডেভেলপমেন্ট টিম জয়েন করতে চান। অথবা যারা বিভিন্ন অনলাইন ফ্রিল্যান্সিং মার্কেটপ্লেসে কিংবা ইন্ডিপেন্ডেন্ট টেকনিক্যাল কনসালট্যান্ট হিসাবে কাজ করতে চান।"
},
{
  heading: "কমপ্লিট ফ্রন্ট এন্ড ডেভেলপমেন্ট",
  content: "যারা দেশী-বিদেশী সফটওয়্যার কোম্পানি ও আইটি ফার্মগুলোতে কিংবা কোনো কোম্পানির প্রোডাক্ট ডেভেলপমেন্ট টিম জয়েন করতে চান। অথবা যারা বিভিন্ন অনলাইন ফ্রিল্যান্সিং মার্কেটপ্লেসে কিংবা ইন্ডিপেন্ডেন্ট টেকনিক্যাল কনসালট্যান্ট হিসাবে কাজ করতে চান।"
}
]
const CourseDescription = () => {
  return (
    <>
    <div className="course__description">
      {contents.map(c=> {
        return(
          <>
        <div>
        <h3>{c.heading}</h3>
      </div>
      <div className="gutter__div"></div>

      <hr />
    <div className="gutter__div"></div>

      <div>
        <p>
         {c.content}
        </p>
      </div>
    <div className="gutter__div"></div>

          </>
        )
      })}
      
    </div>
    {/* <div className="gutter__div"></div> */}
    

    {/********************************************** end part *******************************************************/}

{/* <div>
  {courseEndPartContents.map(c=> {
    return (
      <>
      <div className="course__end__part">
            <div className="course__end__part__left">
              <div className="card__img">
                <Html
                  color="white"
                  sx={{
                    backgroundColor: "#a7174e",
                  }}
                />
              </div>
            </div>
            <div className="course__end__part__right">
            <h3>{c.heading}</h3>
            <div className="gutter__div"></div>
            <p>
             {c.content}
            </p>
            </div>
      </div>
      <div className="gutter__div"></div>
      
      </>
    )
  })}
    
</div> */}
  </>
  )
}

export default CourseDescription