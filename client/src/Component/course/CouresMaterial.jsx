import React,{useState,useEffect} from 'react'
import VideocamIcon from '@mui/icons-material/Videocam';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCode, faUser, faDiagramProject,faRoad, faBook, faBusinessTime, faTimes, faUserGear, faDisplay, faCertificate, faUserShield, faClock} from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';
import { SupportAgent, Timer } from '@mui/icons-material';


const contents = [
    {
        icon: <VideocamIcon />,
        text: "30+ Live Class"
    },
    {
        icon:  <FontAwesomeIcon icon={faDiagramProject} />,
        text: "6 Real SQA Projects"
    },
    {
        icon:  <FontAwesomeIcon icon={faUserShield}  />,
        text: "Mentor Support"
    }, 
    {
        icon:  <FontAwesomeIcon icon={faRoad} />,
        text: "Beginner to Pro"
    }, 
    {
        icon:  <FontAwesomeIcon icon={faDisplay}/>,
        text: "Automation & Manual"
    }, 
    {
        icon:  <FontAwesomeIcon icon={faBook}/>,
        text: "Assignments & Quiz"
    },
     {
        icon:  <FontAwesomeIcon icon={faCode} />,
        text: "Code"
    }, 
    {
        icon:  <FontAwesomeIcon icon={faCertificate} />,
        text: "Professional Certificate"
    }, 
    {
        icon:  <FontAwesomeIcon icon={faClock}/>,
        text: "Duration 3 months"
    }, 
    {
        icon:  <FontAwesomeIcon icon={faBusinessTime} />,
        text: "2 years of Access"
    }

]
const CouresMaterial = ({time}) => {
    
    return (
        <div className='sticky__sidebar' >
            <div className='sticky__sidebar__wrapper'>
                <h3>এই কোর্সের ভেতরে যা যা রয়েছে</h3>
                <div className='sticky__syllabus__content'>
                            {contents.map((content, ind) => {
                                return (
                                    <div key={ind} className="sticky__content_div" >
                                        <span className='sticky__icon' style={{color: "#F23460"}}>{content.icon}</span>
                                        <span className='sticky__content'>{content.text}</span>
                                    </div>
                                )
                            })}
                </div>
                <div className='coures__pricing'>
                    <div>
                    <span>কোর্সের মূল্য</span>
                    <span className='course__amount'>৳ ৬,০০০</span>
                    
                    </div>
                    <hr style={{border: "1px solid #5C2CC5"}} />
                    <div>
                    {/* <span>দুইটি ইন্সটলমেন্টে কোর্স ফি পরিশোধ করা যাবে</span> */}
                    {/* <span className='course__amount_installment' style={{fontWeight: "700 !important"}}>৳ ৪,০০০</span> */}
                    </div>
                    <div style={{marginTop:"10px"}}>
                    <span>{time}</span>
                    {/* <span className='course__amount_installment' style={{fontWeight: "700 !important"}}>৳ ৪,০০০</span> */}
                    </div>


                </div>
                <div className='sticky__btn row'>
                    <span>
                    <a  href='https://docs.google.com/forms/d/e/1FAIpQLSezM2iqqRIZkDcmKkQWqjwPPtpGwXMx617jdby5319sAE_Phg/viewform' target={"_blank"} class="cmn-btn" style={{ textDecoration: "none", backgroundColor: "#F23460", color: "#ffffff", border: "2px solid #F23460"}}>এখনই ভর্তি হোন</a>
                    </span>
                    <span >
                    <a href='https://drive.google.com/file/d/1YGrnROqvRlOEbJNXR61ITkPVlf02EerL/view?usp=sharing' download target={"_blank"} class="cmn-btn" style={{ textDecoration: "none", backgroundColor: "transparent",border: "2px solid #F23460", color: "#ffffff" }} role={"button"}>ডাউনলোড সিলেবাস</a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CouresMaterial;