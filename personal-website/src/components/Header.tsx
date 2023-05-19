import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {BsDownload} from "react-icons/bs";
import DSParagraph from "../design-system/components/Elements/DSParagraph/DSParagraph";
import {TextAlignType, TextSizeType} from "../design-system/utils/EnumStyle";


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
        <>
            <div onScroll={changeBg} className={"min-h-[8vh] px-[2vw] whitespace-nowrap overflow-hidden w-[100vw] flex flex-row items-center justify-between fixed top-0 z-50 bg-primary text-secondary "}>

                <NavLink to="/" className="no-underline hover:text-tertiary active:translate-y-[1vh] active:duration-100" >
                    <DSParagraph textAlign={TextAlignType.LEFT} textSize={TextSizeType.TITLE_2}>QUENTIN DESBROUSSES</DSParagraph>
                </NavLink>
                <div className="flex flex-row justify-between items-center gap-[2vw]">
                    <div className='lg:text-xl md:block hidden'>
                        <DSParagraph textSize={TextSizeType.SUBTITLE}>UX/UI DESIGNER - FRONTEND WEB DEVELOPER</DSParagraph>
                    </div>
                    <a href="../assets/pdf/quentin-desbrousses-cv.pdf" download="quentin-desbrousses-cv.pdf" className="flex items-center gap-[1vw] mr-[1vw] no-underline shadow-3xl p-1 w-full rounded-lg text-secondary bg-tertiary hover:scale-125 hover:duration-200 active:translate-y-1" >
                        <DSParagraph textSize={TextSizeType.SUBTITLE}>Download CV</DSParagraph>
                        <div className="hidden xl:block">
                            <BsDownload className="align-middle"/>
                        </div>

                    </a>
                </div>
            </div>
        </>

    );
};

export default Header;