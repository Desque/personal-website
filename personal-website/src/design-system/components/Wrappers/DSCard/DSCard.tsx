import React, {ReactNode} from 'react';
import {WidthType} from "../../../utils/EnumStyle";
import {getStyle, Style} from "../../../utils/getStyle";
import {DEFAULT_VALUES} from "../../../utils/DefaultValues";

export interface CardProps {
    children : ReactNode
    width? : WidthType
    bgColor? : string
    textColor? : string
    evChange?: () => void
    evClick?: () => void
    evFocus?: () => void
    evBlur?: () => void
}

const DSCard = ({children, width, bgColor, textColor, evChange, evClick, evBlur, evFocus}: CardProps) => {
    const style : Style = {
        width: width ?? DEFAULT_VALUES.width,
        bgColor: bgColor ?? DEFAULT_VALUES.bgColor,
        textColor: textColor ?? DEFAULT_VALUES.textColor,
    }
    return (
        <div onChange={evChange} onFocus={evFocus} onBlur={evBlur} onClick={evClick}
             className={"lg:p-4 md:p-3 sm:p-2 p-1 bg-opacity-50 overflow-hidden rounded-md"+getStyle(style)}>
                {children}
        </div>
    );
};

export default DSCard;