import React from 'react'
import { Link } from 'react-router-dom'

const BottomSticky = () => {
  return (
    <div className="sticky__bottom">
                 <div className='coures__pricing priceing' >
                 মূল্য:<span style={{display: "contents"}} >৳ ১০০০০</span>
                </div>
                    <div className="coures__pricing admission_now">
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSf_3js_gwletO_svcoqELWm36fx34EaJgrttlwuyu6FBVNiNA/viewform' target={"_blank"} role={"button"}><span>এখনই ভর্তি হোন </span></a>
                    </div>
                    <div className="coures__pricing download__syllabus">
                    <Link to='' role={"button"}> <span>ডাউনলোড সিলেবাস</span></Link>
                    </div>
                </div> 
  )
  
}

export default BottomSticky