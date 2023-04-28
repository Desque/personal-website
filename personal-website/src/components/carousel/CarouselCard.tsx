import React from "react";
import Card, {CardProps} from "../card/Card";

export interface CarouselProps {
    children : React.ReactNode
}

const globalStyle = () => {
    return "flex justify-center bg-tertiary h-10/12 w-full"
}

const CarouselCard = ({children} : CarouselProps) => {
    return (
        <div className={globalStyle()}>
            {children}
        </div>
    );
};

export default CarouselCard;