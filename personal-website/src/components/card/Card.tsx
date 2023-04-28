import React, {useState} from 'react';
import {ItemModel} from "./Item.model";
import Box from "../box/Box";

export interface CardProps {
    children : React.ReactNode,
    colors : string[],
}

const globalStyle = (color1: string, color2?: string, ctaColor?: string) => {
    return (
        "group flex justify-center text-center h-full w-full rounded-lg border-2 " +
        "transition ease-in-out hover:cursor-pointer active:scale-75 active:duration-100 hover:duration-200" +
        "text-"+color1+" hover:text-"+color2+" border-"+color2+" bg-"+color2+" hover:bg-"+color1+" active:border-"+ctaColor+" "
    )
}

const Card = ({children, colors} : CardProps) => {

    return (
        <>
            <div className={globalStyle(colors[0], colors[1], colors[2])}>
                <div className="flex p-6">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Card;