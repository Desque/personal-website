import React from 'react';
import {NavLink} from "react-router-dom";
import {BsDownload} from "react-icons/bs";

const Header = () => {
    return (
        <div className="whitespace-nowrap w-full flex justify-between items-center fixed top-0 bg-white shadow-3xl px-6 py-2 z-50">
            <NavLink to="/" className="no-underline text-primary hover:text-tertiary active:translate-y-2 active:duration-100" >
                <h1 className='lg:text-3xl sm:text-2xl text-xl'>QUENTIN DESBROUSSES</h1>
            </NavLink>
            <div className="flex justify-between items-center xl:gap-10 gap-6">
                <h2 className='lg:text-xl lg:block hidden'>UX/UI DESIGNER - FRONTEND WEB DEVELOPER</h2>
                <a href="../assets/pdf/quentin-desbrousses-cv.pdf" download="quentin-desbrousses-cv.pdf" className="flex items-center gap-4 mr-6 no-underline shadow-3xl p-2 w-100 rounded-lg border-2 border-secondary text-primary hover:text-tertiary hover:border-tertiary hover:scale-125 hover:duration-200" >
                    <p className="hidden xl:block">Download my CV</p>
                    <BsDownload className="align-middle"/>
                </a>
            </div>
        </div>
    );
};

export default Header;