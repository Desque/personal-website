import React from 'react';
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div className="flex justify-evenly w-full h-100 pt-10 pb-10 bg-primary text-secondary text-sm lg:text-lg">
            <div className="text-center">
                <h2 className="lg:text-2xl text-lg mb-2">Credits</h2>
                <p>Copyright © Quentin Desbrousses</p>
                <p>deployed in January 2023</p>
            </div>
            <div className="text-center">
                <h2 className="lg:text-2xl text-lg mb-2">Technologies</h2>
                <NavLink to="https://reactjs.org/" className="secondary-link"><p>ReactJS</p></NavLink>
                <NavLink to="https://www.typescriptlang.org/docs/handbook/react.html" className="secondary-link"><p>TypeScript</p></NavLink>
                <NavLink to="https://tailwindcss.com/" className="secondary-link"><p>TailwindCSS</p></NavLink>
                <NavLink to="https://www.jetbrains.com/webstorm/" className="secondary-link"><p>IDE Webstorm</p></NavLink>
            </div>
            <div className="text-center">
                <h2 className="lg:text-2xl text-lg mb-2">Contact</h2>
                <NavLink to="mailto:qdesbrousses.pro@gmail.com" className="secondary-link"><p>Email</p></NavLink>
                <NavLink to="https://www.linkedin.com/in/quentin-desbrousses-10b235223/" className="secondary-link"><p>Linkedin</p></NavLink>
            </div>
        </div>
    );
};

export default Footer;