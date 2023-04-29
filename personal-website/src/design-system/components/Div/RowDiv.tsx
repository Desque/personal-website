import React from 'react';
import {DivProps} from "./DivProps";
import {getStyle, Style} from "../../utils/getStyle";
import {DEFAULT_VALUES} from "../../utils/DefaultValues";

const RowDiv = ({children, gap, width, text, vertical, horizontal, textColor, bgColor} : DivProps) => {
    const style : Style = {
        gap: gap ?? DEFAULT_VALUES.gap,
        width: width ?? DEFAULT_VALUES.width,
        text: text ?? DEFAULT_VALUES.text,
        vertical: vertical ?? DEFAULT_VALUES.vertical,
        horizontal: horizontal ?? DEFAULT_VALUES.horizontal,
        textColor: textColor ?? DEFAULT_VALUES.textColor,
        bgColor: bgColor ?? DEFAULT_VALUES.bgColor
    }
    return (
        <div className={"flex flex-row"+getStyle(style)}>
            {children}
        </div>
    );
};

export default RowDiv;