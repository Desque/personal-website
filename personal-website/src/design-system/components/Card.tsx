import React, {ReactNode} from 'react';
import {WidthType} from "../utils/EnumStyle";
import {getStyle, Style} from "../utils/getStyle";
import {DEFAULT_VALUES} from "../utils/DefaultValues";
import ColDiv from "./Div/ColDiv";

export interface CardProps {
    children : ReactNode
    width? : WidthType
    bgColor? : string
    textColor? : string
}

const Card = ({children, width, bgColor, textColor}: CardProps) => {
    const style : Style = {
        width: width ?? DEFAULT_VALUES.width,
        bgColor: bgColor ?? DEFAULT_VALUES.bgColor,
        textColor: textColor ?? DEFAULT_VALUES.textColor,
    }
    return (
        <div className={"p-6 rounded-md overflow-hidden"+getStyle(style)}>
            <ColDiv width={WidthType.FULL}>
                {children}
            </ColDiv>
        </div>
    );
};

export default Card;