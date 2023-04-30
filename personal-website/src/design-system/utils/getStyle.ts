import {GapType, HeightType, HorizontalType, TextType, VerticalType, WidthType} from "./EnumStyle";

export interface Style {
    gap?: string
    width?: string
    height?: string
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
        height,
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
        getHeight(height) +
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
        case GapType.NONE: return ' gap-0 '
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
        case WidthType.FULL: return " w-full "
        case WidthType.HALF: return " w-1/2 "
        case WidthType.QUARTER: return " w-1/4 "
        case WidthType.THIRD: return " w-1/3 "
        default: return ''
    }
}

const getHeight = (height? : string): string => {
    switch (height) {
        case HeightType.FULL: return " h-full "
        case HeightType.HALF: return " h-1/2 "
        case HeightType.QUARTER: return " h-1/4 "
        case HeightType.THIRD: return " h-1/3 "
        default: return ''
    }
}

