import React from 'react';
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <div className="container">
            <Header/>
            <Navigation/>
            <div className="page">
                <h1>Contact me</h1>
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;