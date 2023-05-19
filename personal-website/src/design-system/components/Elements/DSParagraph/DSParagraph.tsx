import React, {ReactNode} from 'react';
import {TextAlignType, TextSizeType} from "../../../utils/EnumStyle";
import {getStyle, getTextSize, Style} from "../../../utils/getStyle";
import {DEFAULT_VALUES} from "../../../utils/DefaultValues";

interface ParagraphProps {
    children: ReactNode
    textSize?: TextSizeType
    textAlign?: TextAlignType
}

const DSParagraph = ({children, textSize, textAlign }: ParagraphProps) => {
    const style : Style = {
        textSize: textSize ?? DEFAULT_VALUES.textSize,
        textAlign: textAlign ?? DEFAULT_VALUES.textAlign,
    }
    return (
        <>
            {
                textSize === TextSizeType.TITLE_1 ? <h1 className={getStyle(style)}>{children}</h1> :
                    textSize === TextSizeType.TITLE_2 ? <h2 className={getStyle(style)}>{children}</h2> :
                        textSize === TextSizeType.TITLE_3 ? <h3 className={getStyle(style)}>{children}</h3> :
                            textSize === TextSizeType.SUBTITLE ? <h4 className={getStyle(style)}>{children}</h4> :
                                textSize === TextSizeType.BASE ? <p className={getStyle(style)}>{children}</p> :
                                    textSize === TextSizeType.SMALL ? <p className={getStyle(style)}>{children}</p> :
                                            <p className={"text-inherit text-center"}>{children}</p>
            }
        </>
    );
};

export default DSParagraph;