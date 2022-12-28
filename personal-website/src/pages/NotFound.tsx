import React from 'react';
import {NavLink} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>I'm sorry but this page doesn't exist yet...</h1>
            <img src="/assets/img/404-page-design-animation.gif" />
            <h2>(You can go Back to the <NavLink to="/" className="primary-link">homepage</NavLink>)</h2>
        </div>
    );
};

export default NotFound;