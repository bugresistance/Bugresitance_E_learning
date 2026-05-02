import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ScrollButton from './ScrollButton';
import { Link } from 'react-router-dom';

const UpdatedFooter = () => {
    const facebookLink = 'https://www.facebook.com/bugresistance'
    const linkedInLink = 'https://www.linkedin.com/company/bug-resistance/'
    return (
        <>
            <footer className="modern-footer">
                <div className="container">
                    <div className="row">
                        {/* Brand Column */}
                        <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
                            <h5 style={{ color: '#F23460', fontSize: '22px', marginBottom: '16px' }}>BUG RESISTANCE</h5>
                            <p className="footer-brand-text">
                                Your trusted partner in software development and quality assurance. We build, test, and deliver exceptional digital solutions.
                            </p>
                            <div className="footer-social-icons">
                                <a href={facebookLink} target="_blank" rel="noreferrer"><FacebookIcon style={{ fontSize: '18px' }} /></a>
                                <a href="#" rel="noreferrer"><InstagramIcon style={{ fontSize: '18px' }} /></a>
                                <a href={linkedInLink} target="_blank" rel="noreferrer"><LinkedInIcon style={{ fontSize: '18px' }} /></a>
                            </div>
                            <div style={{ marginTop: '20px' }}>
                                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>info@bugresistance.com</p>
                                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>+8801605150545</p>
                            </div>
                        </div>

                        {/* Solutions Column */}
                        <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
                            <h5>Solutions</h5>
                            <p>Web Application Development</p>
                            <p>Mobile App Development</p>
                            <p>Custom Software Solutions</p>
                            <p>QA & Testing Services</p>
                            <p><Link to="/products" style={{ color: 'rgba(255,255,255,0.6)' }}>Document Scanner (OCR)</Link></p>
                        </div>

                        {/* Company Column */}
                        <div className="col-lg-2 col-md-6" style={{ marginBottom: '30px' }}>
                            <h5>Company</h5>
                            <p>Why Bug Resistance?</p>
                            <p>How it works?</p>
                            <p>Our mission</p>
                            <p><Link to="/products" style={{ color: 'rgba(255,255,255,0.6)' }}>Our Products</Link></p>
                            <p>Careers</p>
                        </div>

                        {/* Help Column */}
                        <div className="col-lg-2 col-md-6" style={{ marginBottom: '30px' }}>
                            <h5>Help</h5>
                            <p><Link to="/contact" style={{ color: 'rgba(255,255,255,0.6)' }}>Contact us</Link></p>
                            <p>Help center</p>
                            <p>Terms of service</p>
                            <p>Privacy policy</p>
                        </div>

                        {/* Community Column */}
                        <div className="col-lg-2 col-md-6" style={{ marginBottom: '30px' }}>
                            <h5>Community</h5>
                            <p><a href={facebookLink} target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.6)' }}>Bangladesh SQA Jobs</a></p>
                            <p>Bangladesh Selenium Society</p>
                            <p><Link to="/courselists" style={{ color: 'rgba(255,255,255,0.6)' }}>Course Admission</Link></p>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', margin: 0 }}>
                            © 2025 – Bug Resistance | All Rights Reserved | Serving clients since 2020
                        </p>
                    </div>
                </div>
                <ScrollButton />
            </footer>
        </>
    )
}

export default UpdatedFooter