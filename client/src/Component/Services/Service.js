import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'

import NavbarTop from '../Shared/NavbarTop'
// import servicebanner from '../../image/servicebanner.png'

import Footer from '../Shared/Footer';
import SharedService from './SharedService';
import UpdatedFooter from '../Shared/UpdatedFooter';


const Service = ({title,description,servicebanner}) => {
    const targetRef = useRef(null);
    var width = window.innerWidth
    const [size, setSize] = useState(width);
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    function updateSize() {
        try {
            // console.log("size htted", size);
            setSize(window.innerWidth);
        } catch (e) {
            console.log(e);
        }

    }

    useEffect(() => {

        window.addEventListener('resize', updateSize)

        // return () => window.removeEventListener("resize", updateSize)
        //   width = window.innerWidth
        //   console.log("Width",size);
    }, [size])


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div ref={targetRef}>
            <NavbarTop />
            <div className='full_wrapper'>
                <div className='page-wrapper' style={{ maxWidth: "2100px" }}>

                    <div className='header-para-div'>
                        <h1 className='text-center header-title' style={{ marginBottom: "30px" }}>{title}</h1>
                        <p className='header-para text-center'>{description}</p>
                        <div className='sticky__btn row'>
                            <span style={{ miWidth: '100px', maxWidth: "300px", marginTop: "30px" }}>
                                <a href='https://www.facebook.com/bugresistance' target={"_blank"} class="cmn-btn" style={{ textDecoration: "none", backgroundColor: "#F23460", color: "#ffffff", border: "2px solid #F23460" }}>Contact Us</a>
                            </span>
                        </div>
                    </div>
                    {/* Image Section */}
                    <div className='banner_image_section'>
                        <img src={servicebanner} className="img-fluid banner_image" />
                    </div>
                    <SharedService size={size} handleChange={handleChange} expanded={expanded}/>
                  

                </div>
            </div>

            <UpdatedFooter />
        </div>
    )
}

export default Service