import React from "react";
import projectImg from "../../../image/Project Icon.png";

import ModalImage from "react-modal-image";


const contents = [
    {
        title: "Functional Automation",
        imgsrc: ""
    },
    {
        title: "UI Automation",
        imgsrc: ""
    },
    {
        title: "POM Model Design",
        imgsrc: ""
    },
    {
        title: "Dynamic Element Handle",
        imgsrc: ""
    },
    {
        title: "Complex Login Automation",
        imgsrc: ""
    },
    {
        title: "CI/CD Pipeline",
        imgsrc: ""
    },
    
]

const ProjectAssignments = () => {
    return (
        <div className="course__description__main" style={{
            overflowX: "hidden",

        }}>
            <div className="course__description">
                <div>
                    <h3>কী কী প্রোজেক্ট ও অ্যাসাইনমেন্ট করা হবে এই প্রোগ্রামে?</h3>
                </div>
    <div className="gutter__div"></div>

                <hr />
                <div className="gutter__div"></div>

                <div>
                    <p>
                    ৬টি প্রজেক্ট আমরা কোর্সের ভিতর করে দেখাবো; এবং কাছাকাছি ধরনের আরও ৬টি প্রজেক্ট আপনাদেরকে এসাইনমেন্ট হিসেবে সাবমিট করতে হবে, যেগুলো আপনারা নিজেরা ডেভেলপ করবেন। সেই এসাইনমেন্টগুলো আমরা রিভিউ করে স্কোর করবো এবং প্রয়োজনমত ফীডব্যাক দিবো! সাথে  থাকবে ৭টি  SQA exam দেওয়ার সুযোগ।
                    </p>
                </div>
            </div>
            <div className="gutter__div"></div>

            <hr />

                <div className="gutter__div"></div>
            <div className="project__assignment_lists">
                {contents.map(c=> {
                    return(<>
                    
                    <div className="card__s">
                    <div className="card__top">
                        <div>
                            <span>Project</span>
                        </div>
                        <div>
                            <span>Assignment</span>
                        </div>
                    </div>
                    <div className="card__middle">
                        <ModalImage
                            small={projectImg}
                            large={projectImg}
                            hideDownload={true}
                            hideZoom={true}
                        />
                        {/* <img src={projectImg} alt="bookimg" /> */}
                    </div>

                    <div className="card__bottom" style={{wordWrap: "break-word"}}>{c.title}</div>
                </div>
                    </>)
                })}
               
            </div>

        </div>
    );
};

export default ProjectAssignments;
