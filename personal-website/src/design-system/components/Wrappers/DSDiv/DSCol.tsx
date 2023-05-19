import React from 'react';
import {DSDivProps} from "./DSDivProps";
import {getStyle, Style} from "../../../utils/getStyle";
import {DEFAULT_VALUES} from "../../../utils/DefaultValues";

const DSCol = ({children, gap, width, vertical, horizontal, textColor, bgColor, evChange, evClick, evBlur, evFocus}: DSDivProps) => {
    const style: Style = {
        gap: gap ?? DEFAULT_VALUES.gap,
        width: width ?? DEFAULT_VALUES.width,
        vertical: vertical ?? DEFAULT_VALUES.vertical,
        horizontal: horizontal ?? DEFAULT_VALUES.horizontal,
        textColor: textColor ?? DEFAULT_VALUES.textColor,
        bgColor: bgColor ?? DEFAULT_VALUES.bgColor
    }
    return (
        <div className={"flex flex-col flex-wrap rounded-md p-[1vw]" + getStyle(style)}>
            {children}
        </div>
    );
};

export default DSCol;