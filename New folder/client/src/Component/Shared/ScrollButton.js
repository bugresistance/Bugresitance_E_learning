import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { Button } from './Styles';

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div id="scrollToTop"  style={{ display: visible ? 'inline' : 'none' }}>
            <i class="fas fa-angle-double-up" style={{ display: visible ? 'inline' : 'none' }} onClick={scrollToTop}></i>
        </div>
    );
}

export default ScrollButton;
