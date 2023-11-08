import React, { useState,useEffect } from 'react'
import NavbarTop from '../Shared/NavbarTop'
import person from '../../images/personimage.jpg'
import person2 from '../../images/person2.jpg'
import horizontal from '../../images/horizontal.jpg'
import UpdatedFooter from '../Shared/UpdatedFooter'

const CourseLists = () => {
    const [showFilter, setShowFilter] = useState(window.innerWidth);

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

    const cards = Array.from({ length: 3 }, (_, index) => (
        <div key={index} className="card">
            <div className="card-header">
                <img
                    src={person2}
                    alt="Card Image"
                    className="card-image img-fluid"
                />
            </div>
            <div className="card-content">
                <h4>ডিজিটাল মার্কেটিং</h4>
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: "15px" }}>

                    <p style={{ fontSize: "16px" }}>কোর্সের মূল্য</p>
                    <h5 style={{ color: "#F23460" }}>৳ ৬০০০</h5>
                </div>
            </div>
            <div className="card-content">
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: "3px", marginBottom: "5px" }}>

                    <p style={{ fontSize: "12px" }}>12 Lessons</p>
                    <p style={{ color: "#F23460", fontSize: "12px" }}>2 hr 30 min</p>
                </div>
            </div>
        </div>
    ));

    return (
        <>
            <NavbarTop />

            <div className="app">

                {showFilter>=990 ? (
                    <div className="sidebar">
                        <div className="filter-options">
                            <h2>কোর্সের ধরণ</h2>
                            <label>
                                <input type="checkbox" />
                                <span>সকল কোর্স</span>
                            </label>
                            <label>
                                <input type="checkbox" />
                                <span>ক্যারিয়ার ট্র্যাক প্রোগ্রাম</span>
                            </label>
                            <label>
                                <input type="checkbox" />
                                <span>ফাউন্ডেশন কোর্স</span>
                            </label>
                        </div>
                       
                    </div>
                ) : null}
                <div className="content" style={{ display: "flex", flexDirection: "column" }}>
                    <div className="containerbanner">
                        <div className="image-content">
                            <div className="image-container">
                                <div className="textbanner">
                                    <h2 style={{ color: "black" }}>কমপ্লিট SQA(Manual & Automation ) শিখুন</h2>
                                    <p style={{ minWidth: "200px", maxWidth: "700px", marginTop: "20px", color: "black" }}>SQA এর উপর আকর্ষণীয় ক্যারিয়ার বানানোর জন্য প্রয়োজনীয় থিউরী এবং প্রাক্টিক্যাল স্কিলগুলো শিখুন ৩ মাসের লাইভ ক্লাসের মধ্যে এবং ৫টি প্র্যাকটিক্যাল প্রজেক্টের মাধ্যমে।</p>
                                    <button style={{ marginTop: "20px", backgroundColor: "rgb(234 4 57)" }}>এখনই ভর্তি হোন</button>
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