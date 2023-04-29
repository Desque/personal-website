import {GapType, HorizontalType, TextType, VerticalType} from "./EnumStyle";
import {DEFAULT_VALUES} from "./DefaultValues";

export interface Style {
    gap?: GapType
    text?: TextType
    vertical?: VerticalType
    horizontal?: HorizontalType
    textColor?: string,
    bgColor?: string
}

export const getStyle = (style: Style | undefined): string => {
    return style ? getCustomStyle(style) : getDefaultStyle()
}

const getCustomStyle = (
    {
        horizontal,
        vertical,
        gap,
        text,
        textColor,
        bgColor
    } : Style): string => {
    return (
        getHorizontal(horizontal) +
        getVertical(vertical) +
        getGap(gap) +
        getText(text) +
        getTextColor(textColor) +
        getBgColor(bgColor)
    )
}

const getDefaultStyle = (): string => {
    return (
        getHorizontal() +
        getVertical() +
        getGap() +
        getText() +
        getTextColor() +
        getBgColor()
    )
}

const getHorizontal = (horizontal? : HorizontalType | undefined): string => {
    switch (horizontal) {
        case HorizontalType.LEFT: return ' justify-start '
        case HorizontalType.CENTER: return ' justify-center '
        case HorizontalType.RIGHT: return ' justify-end '
        case HorizontalType.BETWEEN: return ' justify-between '
        case HorizontalType.EVENLY: return ' justify-evenly '
        case HorizontalType.STRETCH: return ' justify-stretch '
        default: return DEFAULT_VALUES.horizontal
    }
}

const getVertical = (vertical? : VerticalType | undefined): string => {
    switch (vertical) {
        case VerticalType.TOP: return ' align-top '
        case VerticalType.MIDDLE: return ' align-middle '
        case VerticalType.BOTTOM: return ' align-bottom '
        case VerticalType.BASELINE: return ' align-baseline '
        default: return DEFAULT_VALUES.vertical
    }
}

const getGap = (gap? : GapType | undefined): string => {
    switch (gap) {
        case GapType.SM: return ' gap-2 '
        case GapType.MD: return ' gap-6 '
        case GapType.LG: return ' gap-12 '
        case GapType.XL: return ' gap-24 '
        case GapType.XXL: return ' gap-56 '
        default: return DEFAULT_VALUES.gap
    }
}

const getText = (text? : TextType | undefined): string => {
    switch (text) {
        case TextType.LEFT: return ' text-left '
        case TextType.CENTER: return ' text-center '
        case TextType.RIGHT: return ' text-right '
        case TextType.JUSTIFY: return ' text-justify '
        default: return DEFAULT_VALUES.text
    }
}

const getTextColor = (textColor? : string | undefined): string => {
    return textColor ? ' color-'+textColor+' ' : DEFAULT_VALUES.textColor
}

const getBgColor = (bgColor? : string | undefined): string => {
    return bgColor ? ' color-'+bgColor+' ' : DEFAULT_VALUES.bgColor
}

