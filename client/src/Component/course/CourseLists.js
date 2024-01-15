import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import NavbarTop from '../Shared/NavbarTop'
import bug from '../../images/bug.png'
import bug2 from '../../images/bug2.png'
import autothumb from '../../images/automationthumb.png'
import horizontal from '../../images/horizontal.jpg'
import UpdatedFooter from '../Shared/UpdatedFooter'
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';

const CourseLists = () => {
    const googleFormLink = 'https://docs.google.com/forms/d/e/1FAIpQLSf_3js_gwletO_svcoqELWm36fx34EaJgrttlwuyu6FBVNiNA/viewform'
    const [showFilter, setShowFilter] = useState(window.innerWidth);
    const navigate = useNavigate()
    useEffect(() => {
        window.addEventListener('resize', () => {
            setShowFilter(window.innerWidth);
        });
    }, [showFilter])


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // Update showFilter state when the window is resized
    // window.addEventListener('resize', () => {
    //     setShowFilter(window.innerWidth >= 990);
    // });
    const courses = [
        {
            img: bug2,
            courseName: "Manual & Automation Testing",
            coursePrice: "৳ ৬০০০",
            courseLesson: "Next Batch: 8th Jan, 2024",
            courseTime: "3 Months",
            courseNavigate:"/courseadmission"
        },
        {
            img: bug,
            courseName: "Advanced Automation Testing(Selenium)",
            coursePrice: "৳ ১০০০০",
            courseLesson: "Next Batch: 10th February, 2024",
            courseTime: "3 Months",
            courseNavigate:"/courseadmission/2"
        },
    ]

    // const cards = Array.from({ length: 3 }, (_, index) => (
    let cards = courses.map((val, index) => {
        return (
            <div key={index} className="card" style={{cursor:"pointer"}} onClick={()=>{navigate(val.courseNavigate)}}>
                <div className="card-header">
                    <img
                        src={val.img}
                        alt="Card Image"
                        className="card-image img-fluid"
                    />
                </div>
                <div className="card-content">
                    <h4 style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>{val.courseName}</h4>
                    <div style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                        <p style={{ fontSize: "16px" , fontFamily: "'poppins'"}}>কোর্সের মূল্য</p>
                        <h5 style={{ color: "#F23460" }}>{val.coursePrice}</h5>
                    </div>
                </div>
                <div className="card-content">
                    <div style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: "3px", marginBottom: "5px" }}>

                        <div style={{ display: "flex", flexDirection: "row", }}>
                            <LayersOutlinedIcon sx={{ color: "#F23460", marginRight: "5px" }} />
                            <p style={{ fontSize: "14px" }}>{val.courseLesson}</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", }}>
                            <TimerOutlinedIcon sx={{ color: "#F23460", marginRight: "5px", height: "20px" }} />
                            <p style={{ fontSize: "14px" }}>{val.courseTime}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    // ));

    return (
        <>
            <NavbarTop />

            <div className="app">

                {showFilter >= 990 ? (
                    <div className="sidebar">
                        <div className="filter-options">
                            <h2 style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>কোর্সের ধরণ</h2>
                            <label>
                                <input type="checkbox" />
                                <span style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>সকল কোর্স</span>
                            </label>
                            <label>
                                <input type="checkbox" />
                                <span style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>ক্যারিয়ার ট্র্যাক প্রোগ্রাম</span>
                            </label>
                            <label>
                                <input type="checkbox" />
                                <span style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>ফাউন্ডেশন কোর্স</span>
                            </label>
                        </div>

                    </div>
                ) : null}
                <div className="content" style={{ display: "flex", flexDirection: "column" }}>
                    <div className="containerbanner">
                        <div className="image-content">
                            <div className="image-container">
                                <div className="textbanner">
                                    <h2 style={{ color: "white", fontFamily: "'Hind Siliguri', sans-serif", fontWeight: "bold" }}>Bug Resistance এর প্ল্যাটফর্মে করুন Live Career Course</h2>
                                    <p style={{ minWidth: "200px", maxWidth: "700px", marginTop: "20px", color: "white" }}>Software Industry তে আকর্ষণীয় ক্যারিয়ার বানানোর জন্য প্রয়োজনীয় থিউরী এবং প্রাক্টিক্যাল স্কিলগুলো শিখুন  Bug Resistance এর প্ল্যাটফর্মে ।</p>
                                    <button style={{ marginTop: "20px", backgroundColor: "rgb(234 4 57)",borderRadius:"10px" }} onClick={()=>{window.open(googleFormLink,'_blank')}}>এখনই ভর্তি হোন</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="cards">{cards}</div>
                </div>
                {/* {!showFilter ? (
                    <div className="filter-options-mobile">
                        <h2>Filter Options</h2>
                        <label>
                            <input type="checkbox" /> Option 1
                        </label>
                        <label>
                            <input type="checkbox" /> Option 2
                        </label>
                        <label>
                            <input type="checkbox" /> Option 3
                        </label>
                    </div>
                ) : null} */}
            </div>

            <UpdatedFooter />


        </>
    )
}

export default CourseLists