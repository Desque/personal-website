import React from 'react';
import ColDiv from "../design-system/components/Div/ColDiv";
import RowDiv from "../design-system/components/Div/RowDiv";
import {GapType, WidthType} from "../design-system/utils/EnumStyle";

const Experiences = () => {
    return (
        <div className="p-6 rounded-lg text-secondary bg-experiences bg-opacity-80">
            <h1>My experiences</h1>

            <RowDiv gap={GapType.MD}>
                    <ColDiv width={WidthType.half} textColor="tertiary" bgColor="primary">
                        <p>Bonjour</p>
                </ColDiv>

                <ColDiv width={WidthType.half} bgColor="tertiary">
                    <p>Bonsoir</p>
                </ColDiv>
            </RowDiv>


        </div>
    );
};

export default Experiences;