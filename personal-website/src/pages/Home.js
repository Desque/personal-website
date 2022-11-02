import React from 'react';
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Header/>
            <Navigation/>
            <h1>Home</h1>

            <Footer/>
        </div>
    );
};

export default Home;