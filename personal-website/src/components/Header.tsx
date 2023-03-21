import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {BsDownload} from "react-icons/bs";


const Header = () => {

    const [scrolled,setScrolled] = useState(false)

    const changeBg = () => {
      setScrolled(window.scrollY>40)
    }

    useEffect(()=> {
        window.addEventListener('scroll',changeBg)
        return () => window.removeEventListener('scroll',changeBg)
    },[])

    return (
        <div>
            <div onScroll={changeBg} className={"whitespace-nowrap w-full flex justify-between items-center fixed top-0 px-6 py-2 z-50 bg-primary text-secondary "}>
                <NavLink to="/" className="no-underline hover:text-tertiary active:translate-y-2 active:duration-100" >
                    <h1 className='lg:text-3xl sm:text-2xl text-xl'>QUENTIN DESBROUSSES</h1>
                </NavLink>
                <div className="flex justify-between items-center xl:gap-10 gap-6">
                    <h2 className='lg:text-xl lg:block hidden'>UX/UI DESIGNER - FRONTEND WEB DEVELOPER</h2>
                    <a href="../assets/pdf/quentin-desbrousses-cv.pdf" download="quentin-desbrousses-cv.pdf" className="flex items-center gap-4 mr-6 no-underline shadow-3xl p-2 w-100 rounded-lg text-secondary bg-tertiary hover:scale-125 hover:duration-200 active:translate-y-1" >
                        <p className="hidden xl:block">Download my CV</p>
                        <BsDownload className="align-middle"/>
                    </a>
                </div>
            </div>
        </div>

    );
};

export default Header;