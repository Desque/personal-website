import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <NavLink to="/" className="header-link" >
                <h1>QUENTIN DESBROUSSES</h1>
            </NavLink>
            <h2>UX/UI DESIGNER - FRONTEND WEB DEVELOPER</h2>
        </div>
    );
};

export default Header;