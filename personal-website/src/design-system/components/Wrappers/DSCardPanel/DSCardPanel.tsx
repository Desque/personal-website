import React, {ReactNode} from 'react';
import {WidthType} from "../../../utils/EnumStyle";
import {getStyle, Style} from "../../../utils/getStyle";
import DSCol from "../DSDiv/DSCol";
import {DEFAULT_VALUES} from "../../../utils/DefaultValues";

export interface CardPanelProps {
    children : ReactNode[]
    width? : WidthType
    nbCol?: number
    nbRow?: number
    canWrap?: boolean
    bgColor? : string
    textColor? : string
    evChange?: () => void
    evClick?: () => void
    evFocus?: () => void
    evBlur?: () => void
}

const DsCardPanel = ({children, width, bgColor, textColor, evChange, evClick, evBlur, evFocus}: CardPanelProps) => {
    const style : Style = {
        width: width ?? DEFAULT_VALUES.width,
        bgColor: bgColor ?? DEFAULT_VALUES.bgColor,
        textColor: textColor ?? DEFAULT_VALUES.textColor,
    }
    return (
            <div className={"grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 rounded-md"+getStyle(style)}>
                {children}
            </div>
    );
};

export default DsCardPanel;