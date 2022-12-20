import React from 'react';
import {NavLink} from "react-router-dom";
import {
    BsFillCollectionFill,
    BsFillPersonLinesFill,
    BsPeopleFill,
    BsSearch,
    BsTerminalFill
} from "react-icons/bs";

interface NavigationProps {
    activePage : string
}

const MenuButtonStyle = (activePage : string, page : string) : string => {
    let globalStyle : string =
        ' xl:text-xl lg:text-lg md:text-md sm:text-sm' +
        ' xl:px-12 lg:px-8 md:px-4 sm:px-2' +
        ' xl:py-6 lg:py-4 md:py-2' +
        ' rounded-lg flex gap-4 justify-center items-center shadow-3xl'
    let specificStyle = activePage === page ? 'text-secondary bg-tertiary' : 'text-primary bg-white hover:text-tertiary'
    return specificStyle + globalStyle
}

const Navigation = (props : NavigationProps) => {
    return (
        <div className="xl:m-16 lg:m-8 md:m-4 sm:m-2 w-100 flex justify-evenly">
            <NavLink to="/searching" className={MenuButtonStyle(props.activePage,'searching')}><BsSearch className="align-icon"/><p className="btn-description">Search</p></NavLink>
            <NavLink to="/bio" className={MenuButtonStyle(props.activePage,'biography')}><BsFillPersonLinesFill className="align-icon"/><p className="btn-description">Biography</p></NavLink>
            <NavLink to="/soft-skills" className={MenuButtonStyle(props.activePage,'soft-skills')}><BsPeopleFill className="align-icon"/><p className="btn-description">Soft Skills</p></NavLink>
            <NavLink to="/hard-skills" className={MenuButtonStyle(props.activePage,'hard-skills')}><BsTerminalFill className="align-icon"/><p className="btn-description">Hard Skills</p></NavLink>
            <NavLink to="/projects" className={MenuButtonStyle(props.activePage,'projects')}><BsFillCollectionFill className="align-icon"/><p className="btn-description">Projects</p></NavLink>
        </div>
    );
};

export default Navigation;