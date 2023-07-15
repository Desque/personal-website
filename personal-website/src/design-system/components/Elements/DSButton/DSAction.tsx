import React from 'react';
import {ActionType} from "../../../utils/EnumStyle";
import {getActionType} from "../../../utils/getStyle";

interface ActionProps {
    name: string
    type?: ActionType
}

const DSAction = ({name, type}: ActionProps) => {
    const style = getActionType(type)

    return (
        <button className={"rounded-md px-6 py-4 bg-"+style.bgColor+" text-"+style.textColor+" transition ease-in-out active:translate-y-1"}>{name}</button>
    );
};

export default DSAction;