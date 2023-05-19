import {
    GapType,
    HeightType,
    HorizontalType, ImageWidthType,
    TextAlignType,
    TextSizeType,
    VerticalType,
    WidthType
} from "./EnumStyle";

export interface Style {
    gap?: string
    width?: string
    height?: string
    textAlign?: string
    textSize?: string
    vertical?: string
    horizontal?: string
    textColor?: string
    bgColor?: string
}

export const getStyle = (
    {
        horizontal,
        vertical,
        gap,
        width,
        height,
        textAlign,
        textSize,
        textColor,
        bgColor,
    } : Style): string => {
    return (
        getHorizontal(horizontal) +
        getVertical(vertical) +
        getGap(gap) +
        getTextAlign(textAlign) +
        getTextSize(textSize) +
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

const getTextAlign = (text? : string): string => {
    switch (text) {
        case TextAlignType.LEFT: return ' text-left '
        case TextAlignType.CENTER: return ' text-center '
        case TextAlignType.RIGHT: return ' text-right '
        case TextAlignType.JUSTIFY: return ' text-justify '
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
        case WidthType.HALF: return " w-[50vw] "
        case WidthType.QUARTER: return " w-[25vw] "
        case WidthType.THIRD: return " w-[33.3vw] "
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

export const getTextSize = (textSize?: string): string => {
    switch (textSize) {
        case TextSizeType.TITLE_1: return " text-4xl "
        case TextSizeType.TITLE_2: return " text-3xl "
        case TextSizeType.TITLE_3: return " text-2xl "
        case TextSizeType.SUBTITLE: return " text-xl "
        case TextSizeType.BASE: return " text-base "
        case TextSizeType.SMALL: return " text-sm "
        default: return ''
    }
}

export const getImageWidth = (imageWidth?: string): number => {
    switch (imageWidth) {
        case ImageWidthType.SMALL: return 5
        case ImageWidthType.BASE: return 8
        case ImageWidthType.MEDIUM: return 10
        case ImageWidthType.LARGE: return 15
        case ImageWidthType.XL: return 20
        default: return 100
    }
}

