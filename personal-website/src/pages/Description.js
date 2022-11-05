import React from 'react';
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Description = () => {
    return (
        <div className="container">
            <Header/>
            <Navigation/>
            <h1>Who am I ?</h1>

            <Footer/>
        </div>
    );
};

export default Description;