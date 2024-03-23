import navbarLogo from '../assets/navbarLogo.png';
import { useEffect, useState } from 'react';
import { FaBars } from "react-icons/fa";

import HomeDiv from './HomeDiv.jsx';
import Skills from './Skills.jsx';
import Services from './Services.jsx';



export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isServices, setIsServices] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [scrolled]);

    useEffect(() => {

        const handleScroll = () => {
            const serviceDiv = document.getElementById("service");
            const isServiceScrolled = window.scrollY > (serviceDiv.offsetHeight - 300);
            setIsServices(isServiceScrolled); // Directly update isServices
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);



    return (
        <>
            <nav className={`navbar navbar-expand-lg sticky-top ${scrolled && 'bg-scroll'}`}>
                <div className="container-fluid px-5">
                    <a className="navbar-brand" href="#">
                        <img src={navbarLogo} alt="" />
                    </a>
                    <button className="navbarToggler btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="togglerIcon">
                            <FaBars className='toggler' />
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-5 nav nav-pills pe-4">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">
                                    Home
                                    <span id="line"></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">
                                    skills
                                    <span id="line"></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#service">
                                    service
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">
                                    portfolio
                                    <span id="line"></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">
                                    contact
                                    <span id="line"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary rounded-2" tabIndex="0">
                <HomeDiv />
                <div id='skills' className="section">
                    <Skills scrolled={isServices} />
                </div>
                <div id='service' className="section">
                    <Services scrolled={isServices} />
                </div>
                <div id='portfolio' className="section">
                    <h1>portfolio</h1>
                </div>
                <div id='service' className="section">
                    <h1>Skills</h1>
                </div>
                <div id='contact' className="section">
                    <h1>Contact</h1>
                </div>
            </div>
        </>
    )
};