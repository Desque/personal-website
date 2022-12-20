import React from 'react';
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Searching = () => {
    return (
        <div className="container">
            <Header/>
            <Navigation/>
            <div className="page">
                <h1>Results for the research : "ALL"</h1>
            </div>
            <Footer/>
        </div>
    );
};

export default Searching;