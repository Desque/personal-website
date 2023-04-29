import {GapType, HorizontalType, TextType, VerticalType, WidthType} from "./EnumStyle";
import {DEFAULT_VALUES} from "./DefaultValues";

export interface Style {
    gap?: string
    width?: string
    text?: string
    vertical?: string
    horizontal?: string
    textColor?: string,
    bgColor?: string
}

export const getStyle = (
    {
        horizontal,
        vertical,
        gap,
        width,
        text,
        textColor,
        bgColor
    } : Style): string => {
    return (
        getHorizontal(horizontal) +
        getVertical(vertical) +
        getGap(gap) +
        getText(text) +
        getWidth(width) +
        getTextColor(textColor) +
        getBgColor(bgColor)
    )
}

const getHorizontal = (horizontal? : string): string => {
    switch (horizontal) {
        case HorizontalType.LEFT: return ' justify-start '
        case HorizontalType.CENTER: return ' justify-center '
        case HorizontalType.RIGHT: return ' justify-end '
        case HorizontalType.BETWEEN: return ' justify-between '
        case HorizontalType.EVENLY: return ' justify-evenly '
        case HorizontalType.STRETCH: return ' justify-stretch '
        default: return ''
    }
}

const getVertical = (vertical? :string): string => {
    switch (vertical) {
        case VerticalType.TOP: return ' align-top '
        case VerticalType.MIDDLE: return ' align-middle '
        case VerticalType.BOTTOM: return ' align-bottom '
        case VerticalType.BASELINE: return ' align-baseline '
        default: return ''
    }
}

const getGap = (gap? : string): string => {
    switch (gap) {
        case GapType.SM: return ' gap-2 '
        case GapType.MD: return ' gap-6 '
        case GapType.LG: return ' gap-12 '
        case GapType.XL: return ' gap-24 '
        case GapType.XXL: return ' gap-56 '
        default: return ''
    }
}

const getText = (text? : string): string => {
    switch (text) {
        case TextType.LEFT: return ' text-left '
        case TextType.CENTER: return ' text-center '
        case TextType.RIGHT: return ' text-right '
        case TextType.JUSTIFY: return ' text-justify '
        default: return ''
    }
}

const getTextColor = (textColor? : string): string => {
    return ' text-'+textColor+' '
}

const getBgColor = (bgColor? : string): string => {
    return ' bg-'+bgColor+' '
}

const getWidth = (width? : string): string => {
    switch (width) {
        case WidthType.full: return " w-full "
        case WidthType.half: return " w-1/2 "
        case WidthType.quarter: return " w-1/4 "
        case WidthType.third: return " w-1/3 "
        default: return ''
    }
}

