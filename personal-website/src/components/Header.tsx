import React from 'react';
import {NavLink} from "react-router-dom";
import {BsDownload} from "react-icons/bs";

const Header = () => {
    return (
        <div className="header">
            <NavLink to="/" className="header-link" >
                <h1>QUENTIN DESBROUSSES</h1>
            </NavLink>
            <div>
                <h2>UX/UI DESIGNER - FRONTEND WEB DEVELOPER</h2>
                <a href="../assets/pdf/quentin-desbrousses-cv.pdf" download="quentin-desbrousses-cv.pdf" className="header-dl" >
                    <BsDownload className="align-icon"/>
                </a>
            </div>
        </div>
    );
};

export default Header;