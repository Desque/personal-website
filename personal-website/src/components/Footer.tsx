import React from 'react';
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <h2>Credits</h2>
                <p>by Quentin Desbrousses</p>
                <p>deployed in 2022</p>
            </div>
            <div>
                <h2>Technologies</h2>
                <NavLink to="https://reactjs.org/" className="secondary-link"><p>ReactJS</p></NavLink>
                <NavLink to="https://www.jetbrains.com/webstorm/" className="secondary-link"><p>IDE Webstorm</p></NavLink>
            </div>
            <div>
                <h2>Contact</h2>
                <p>qdesbrousses.pro@gmail.com</p>
                <NavLink to="https://www.linkedin.com/in/quentin-desbrousses-10b235223/" className="secondary-link"><p>Linkedin</p></NavLink>
            </div>
        </div>
    );
};

export default Footer;