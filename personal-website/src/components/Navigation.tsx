import React from 'react';
import {NavLink} from "react-router-dom";
import {
    BsApp, BsArchive, BsArchiveFill,
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
        ' lg:text-2xl text-md hover:bg-opacity-80' +
        ' rounded-lg flex flex-col justify-evenly items-center shadow-3xl' +
        ' lg:m-6 sm:m-4 m-2' +
        ' lg:w-48 sm:w-32 w-16 px-6 aspect-square '
    let specificStyle = activePage === page ? 'text-secondary bg-tertiary' : 'text-primary bg-secondary bg-opacity-70 border-2 border-secondary hover:text-tertiary hover:border-tertiary hover:scale-125 hover:duration-200'
    return specificStyle + globalStyle
}

const Navigation = (props : NavigationProps) => {
    return (
        <div className="xl:m-16 lg:m-8 md:m-4 sm:m-2 w-100 flex justify-evenly flex-wrap">
            <NavLink to="/bio" className={MenuButtonStyle(props.activePage,'biography')}><BsFillPersonLinesFill className="align-middle"/><p className="hidden sm:block whitespace-nowrap">Identity</p></NavLink>
            <NavLink to="/studies" className={MenuButtonStyle(props.activePage,'studies')}><BsPeopleFill className="align-middle"/><p className="hidden sm:block whitespace-nowrap">Studies</p></NavLink>
            <NavLink to="/experiences" className={MenuButtonStyle(props.activePage,'experiences')}><BsArchiveFill className="align-middle"/><p className="hidden sm:block whitespace-nowrap">Experiences</p></NavLink>
            <NavLink to="/hard-skills" className={MenuButtonStyle(props.activePage,'hard-skills')}><BsTerminalFill className="align-middle"/><p className="hidden sm:block whitespace-nowrap">Hard Skills</p></NavLink>
            <NavLink to="/projects" className={MenuButtonStyle(props.activePage,'projects')}><BsFillCollectionFill className="align-middle"/><p className="hidden sm:block whitespace-nowrap">Projects</p></NavLink>
        </div>
    );
};

export default Navigation;