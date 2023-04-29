import React, {ReactNode} from 'react';
import {WidthType} from "../utils/EnumStyle";
import {getStyle, Style} from "../utils/getStyle";
import {DEFAULT_VALUES} from "../utils/DefaultValues";

export interface CardProps {
    children : ReactNode
    width? : WidthType
}

const Card = ({children,width}: CardProps) => {
    const style : Style = {width:width ?? DEFAULT_VALUES.width}
    return (
        <div className={getStyle(style)}>
            {children}
        </div>
    );
};

export default Card;