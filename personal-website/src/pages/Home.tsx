import React from 'react';
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

const Home = () => {

    return (
        <div className="container">
            <Header/>
            <Navigation/>
            <div className="home">
                <h1>FEEL FREE TO DISCOVER MY UNIVERSE. </h1>
                <Carousel/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;