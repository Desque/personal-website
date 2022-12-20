import React from 'react';
import {NavLink} from "react-router-dom";
import {
    BsFillCollectionFill,
    BsFillPersonLinesFill,
    BsPeopleFill,
    BsSearch,
    BsTerminalFill
} from "react-icons/bs";

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink to="/searching" className="color-2 bc-3"><BsSearch className="align-icon"/><p className="btn-description">Search</p></NavLink>
            <NavLink to="/bio"><BsFillPersonLinesFill className="align-icon"/><p className="btn-description">Biography</p></NavLink>
            <NavLink to="/soft-skills"><BsPeopleFill className="align-icon"/><p className="btn-description">Soft Skills</p></NavLink>
            <NavLink to="/hard-skills"><BsTerminalFill className="align-icon"/><p className="btn-description">Hard Skills</p></NavLink>
            <NavLink to="/projects"><BsFillCollectionFill className="align-icon"/><p className="btn-description">Projects</p></NavLink>
        </div>
    );
};

export default Navigation;