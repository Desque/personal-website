import React from 'react';
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="container">
            <Header/>
            <Navigation/>
            <h1>Home</h1>

            <Footer/>
        </div>
    );
};

export default Home;