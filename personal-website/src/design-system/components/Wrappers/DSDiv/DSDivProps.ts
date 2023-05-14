import {ReactNode} from "react";
import {GapType, HorizontalType, TextType, VerticalType, WidthType} from "../../../utils/EnumStyle";

export interface DSDivProps {
    children : ReactNode
    gap?: GapType
    width?: WidthType
    text?: TextType
    vertical?: VerticalType
    horizontal?: HorizontalType
    textColor?: string
    bgColor?: string
    evChange?: () => void
    evClick?: () => void
    evFocus?: () => void
    evBlur?: () => void

}

