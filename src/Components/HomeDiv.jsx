import React from 'react';
import { TypeAnimation } from 'react-type-animation'


import bannerImg2 from '../assets/bannerImg2.svg';
import manUsingLaptop from "../assets/man-using-laptop.png";
import htmlIcon from "../assets/html-icon.png";
import cssIcon from "../assets/css-icon.png";
import jsIcon from "../assets/js-icon.png";
import bootstrapIcon from "../assets/bootstrap-5-logo-icon.webp";

function HomeDiv() {
    return (
        <div id='home' className="homeDiv">
            <div className="bubble2"></div>
            <div className="bubble1"></div>
            <div className="bubble3"></div>
            <div className="bubble4"></div>
            <div className="bubble5"></div>
            <div className='txtDivOfHome p-5'>
                <h1>
                    <div>Hey there!</div>
                    I'm <span className='spanOfFrelancer'>
                        <TypeAnimation
                            sequence={[
                                'Zain',
                                2000,
                                'freelancer',
                                2000,
                                'Frontend Developer',
                                2000,
                                'MERN Stack Devloper',
                                2000,
                            ]}
                            repeat={Infinity} />
                    </span>
                </h1>
                <h3 className='CreateThousandOfWebsites mb-5'>I CREATE THOUSAND OFF WEBSITE</h3>
                <button className='btnOfHireMe fs-4 px-5 py-2'>Hire Me</button>
            </div>
            <img src={bannerImg2} alt="" className='homeImg' />

            <img className='htmlIcon' src={htmlIcon} alt="" srcSet="" />
            <img className='cssIcon' src={cssIcon} alt="" srcSet="" />
            <img className='jsIcon' src={jsIcon} alt="" srcSet="" />
            <img className='bootstrapIcon' src={bootstrapIcon} alt="" srcSet="" />


            <img src={manUsingLaptop} alt="" className='ManUsingLaptop' />
        </div>
    )
}

export default HomeDiv;