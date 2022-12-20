import React from 'react';
import CarouselCard from "./CarouselCard";

const Carousel = () => {
    return (
        <div className="carousel">
            <CarouselCard/>
            <CarouselCard/>
            <CarouselCard/>
        </div>
    );
};

export default Carousel;