import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ScrollButton from './ScrollButton';
const UpdatedFooter = () => {
    const facebookLink = 'https://www.facebook.com/bugresistance'
    const linkedInLink = 'https://www.linkedin.com/company/bug-resistance/'
    return (
        <>
            <div className="footerall">
                <h6 style={{ color: "#F23460", marginBottom: "20px", marginLeft: "25px",fontSize:"20px" }}>BUG RESISTANCE</h6>
                <div className='footer'>
                    <div className="column">
                        {/* <p style={{ color: "white" }}>Subscribe for the latest News</p> */}
                        {/* <div className="search-box" style={{ marginTop: "15px" }}>
                            <input type="text" placeholder="Search" />
                            <i className="fas fa-paper-plane"style={{border:"2px solid red"}}></i>
                        </div> */}
                        <h5 style={{ color: "white", marginTop: "15px" }}>Email:</h5>
                        <p style={{ color: "white", marginTop: "5px" }}>info@bugresistance.com</p>
                        <h5 style={{ color: "white", marginTop: "15px" }}>Call:</h5>
                        <p style={{ color: "white", marginTop: "5px" }}>+8801605150545</p>
                    </div>
                    <div className="column">
                        <h3 style={{ color: "white" }}>Solutions</h3>
                        <p style={{ color: "white", marginTop: "20px", fontSize: "14px" }}>Web Application Testing</p>
                        <p style={{ color: "white", marginTop: "10px", fontSize: "14px" }}>Mobile Application Testing</p>
                        <p style={{ color: "white", marginTop: "10px", fontSize: "14px" }}>IoT Testing</p>
                        <p style={{ color: "white", marginTop: "10px", fontSize: "14px" }}>Cloud Solution Testing</p>
                        <p style={{ color: "white", marginTop: "10px", fontSize: "14px" }}>Desktop App Testing</p>
                    </div>
                    <div className="column">
                        <h3 style={{ color: "white" }}>Company</h3>
                        <p style={{ color: "white", marginTop: "20px", fontSize: "14px" }}>Why Bug Resistance?</p>
                        <p style={{ color: "white", marginTop: "10px", fontSize: "14px" }}>How it works?</p>
                        <p style={{ color: "white", marginTop: "10px", fontSize: "14px" }}>Our mission</p>
                        <p style={{ color: "white", marginTop: "10px", fontSize: "14px" }}>Careers</p>
                        {/* <p style={{ color: "white", marginTop: "10px", fontSize: "14px" }}>Rug Resistance for good</p> */}
                    </div>
                    <div className="column">
                        <h3 style={{ color: "white" }}>Help</h3>
                        
                        <p style={{ color: "white", marginTop: "20px", fontSize: "14px" }}>Contact us</p>
                        <p style={{ color: "white", marginTop: "10px", fontSize: "14px" }}>Help center</p>
                        <p style={{ color: "white", marginTop: "10px", fontSize: "14px" }}>Terms of service</p>
                        <p style={{ color: "white", marginTop: "10px", fontSize: "14px" }}>Privacy policy</p>
                    </div>
                    <div className="column">
                        <h3 style={{ color: "white" }}>Follow Us</h3>
                        <div style={{display:"flex",justifyContent:"space-between",width:"130px",marginTop: "20px",}}>
                        <FacebookIcon style={{cursor:"pointer"}} onClick={()=>{window.open(facebookLink,'_blank')}}/>
                        <InstagramIcon style={{cursor:"pointer"}}/>
                        <LinkedInIcon style={{cursor:"pointer"}} onClick={()=>{window.open(linkedInLink,'_blank')}}/>
                        </div>
                        <p style={{ color: "white", marginTop: "10px", fontSize: "14px" }}>Bangladesh SQA Jobs</p>
                        <p style={{ color: "white", marginTop: "10px", fontSize: "14px" }}>Bangladesh Selenium
                            Society</p>

                    </div>
                </div>
                <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"15px"}}>
                    <div className="footer_divider" style={{width:"50%",border:"1px solid white"}}></div>
                    <p style={{marginTop:"30px",color:"white"}}>© 2023 – Bug Resistance | All Rights Reserved | Serving clients since 2020</p>
                </div>
                <ScrollButton/>
            </div>
        </>
    )
}

export default UpdatedFooter