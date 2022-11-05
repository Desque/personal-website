import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink to="/searching">Search</NavLink>
            <NavLink to="/bio">Biography</NavLink>
            <NavLink to="/soft-skills">Soft Skills</NavLink>
            <NavLink to="/hard-skills">Hard Skills</NavLink>
            <NavLink to="/projects">Projects</NavLink>
        </div>
    );
};

export default Navigation;