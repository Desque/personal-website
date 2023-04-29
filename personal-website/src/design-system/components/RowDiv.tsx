import React from 'react';
import {DivProps} from "../utils/CommonProps";
import {getStyle} from "../utils/getStyle";

const RowDiv = ({children, style} : DivProps) => {
    return (
        <div className={"flex flex-row"+getStyle(style)}>
            {children}
        </div>
    );
};

export default RowDiv;