import React from 'react';
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Projects = () => {
    return (
        <div className="container">
            <Header/>
            <Navigation/>
            <div className="page">
                <h1>My projects</h1>
            </div>
            <Footer/>
        </div>
    );
};

export default Projects;