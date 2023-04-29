import React from 'react';
import {DivProps} from "../utils/CommonProps";
import {getStyle} from "../utils/getStyle";

const ColDiv = ({children, style} : DivProps) => {
    return (
        <div className={"flex flex-col"+getStyle(style)}>
            {children}
        </div>
    );
};

export default ColDiv;