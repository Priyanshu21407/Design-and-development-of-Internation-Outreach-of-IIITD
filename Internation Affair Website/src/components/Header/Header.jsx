import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { Route, Link, Routes, useLocation, Navigate, NavLink } from 'react-router-dom';
import { Contact, HomeDropDown, InternationalAdmissionDropdown, ScholarshipDropdown, VisaAndImmigrationDropdown, StudentsDropdown, PartnersDropdown, CampusDropdown } from "./Dropdown";
import Search from "./Search";
import Chatbot from "../ChatBot";
import HeaderTitles from "./HeaderTitle";
import '../../styles/header.css'


function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [homeOpen, setHomeOpen] = useState(false);
    const [intOpen, setIntOpen] = useState(false);
    const [schOpen, setSchOpen] = useState(false);
    const [visaOpen, setVisaOpen] = useState(false);
    const [partnersOpen, setPartnersOpen] = useState(false);
    const [campusOpen, setCampusOpen] = useState(false);
    const [studOpen, setStudOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    const location = useLocation();
    const {pathname} = location;
    const title = HeaderTitles[pathname] || '';

    console.log("pathname-> ",pathname);
    console.log("title-> ",title);




    const toggleMenu = () => setShowMenu(!showMenu);
    return (
        <header className="header">
    <button onClick={toggleMenu} className="menu-toggle">
        {showMenu ? <GrClose size={24} /> : <GiHamburgerMenu size={24} />}
    </button>
    <div className="logo-and-title">
        <img
            src="https://iiitd.ac.in/sites/default/files/style3colorsmall.png"
            className="logo"
            alt="IIITD Logo"
        />
        <span className="page-title">{title}</span>
    </div>
    <div className="nav-wrapper">
        <nav className={`nav ${showMenu ? 'nav-show' : ''}`}>
            <NavLink to={'/'} onMouseEnter={() => setHomeOpen(false)} onMouseLeave={() => setHomeOpen(false)} className="nav-link">
                Home
                <HomeDropDown isOpen={homeOpen} />
            </NavLink>
            <a href="#" onMouseEnter={() => setIntOpen(true)} onMouseLeave={() => setIntOpen(false)} className="nav-link">
                International Admission
                <InternationalAdmissionDropdown isOpen={intOpen} />
            </a>
            <a href="#" onMouseEnter={() => setSchOpen(true)} onMouseLeave={() => setSchOpen(false)} className="nav-link">
                Scholarship
                <ScholarshipDropdown isOpen={schOpen} />
            </a>
            <NavLink to={'/VisaAndImmigration'} onMouseEnter={() => setVisaOpen(false)} onMouseLeave={() => setVisaOpen(false)} className="nav-link">
                Visa and Immigration
                <VisaAndImmigrationDropdown isOpen={visaOpen} />
            </NavLink>
            <a href="#" onMouseEnter={() => setStudOpen(true)} onMouseLeave={() => setStudOpen(false)} className="nav-link">
                Students
                <StudentsDropdown isOpen={studOpen} />
            </a>
            <NavLink to={'/Partners'} onMouseEnter={() => setPartnersOpen(true)} onMouseLeave={() => setPartnersOpen(false)} className="nav-link">
                Partners
                <PartnersDropdown isOpen={partnersOpen} />
            </NavLink>
            <a href="#" onMouseEnter={() => setCampusOpen(true)} onMouseLeave={() => setCampusOpen(false)} className="nav-link">
                Campus
                <CampusDropdown isOpen={campusOpen} />
            </a>
            <a href="#" onMouseEnter={() => setContactOpen(true)} onMouseLeave={() => setContactOpen(false)} className="nav-link">
                Contact Us
                <Contact isOpen={contactOpen} />
            </a>
        </nav>
    </div>
</header>


    );
}

export default Header;
