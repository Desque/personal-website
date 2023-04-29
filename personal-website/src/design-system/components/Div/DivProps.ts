import {ReactNode} from "react";
import {GapType, HorizontalType, TextType, VerticalType, WidthType} from "../../utils/EnumStyle";

export interface DivProps {
    children : ReactNode
    gap?: GapType
    width?: WidthType
    text?: TextType
    vertical?: VerticalType
    horizontal?: HorizontalType
    textColor?: string,
    bgColor?: string
}

