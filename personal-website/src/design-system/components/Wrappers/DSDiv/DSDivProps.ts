import {ReactNode} from "react";
import {GapType, HorizontalType, VerticalType, WidthType} from "../../../utils/EnumStyle";

export interface DSDivProps {
    children : ReactNode
    gap?: GapType
    width?: WidthType
    vertical?: VerticalType
    horizontal?: HorizontalType
    textColor?: string
    bgColor?: string
    evChange?: () => void
    evClick?: () => void
    evFocus?: () => void
    evBlur?: () => void

}

