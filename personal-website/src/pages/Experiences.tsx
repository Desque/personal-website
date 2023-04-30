import React from 'react';
import ColDiv from "../design-system/components/Div/ColDiv";
import RowDiv from "../design-system/components/Div/RowDiv";
import {HorizontalType, WidthType} from "../design-system/utils/EnumStyle";
import Card from "../design-system/components/Card";

const Experiences = () => {
    return (
        <div className="p-6 rounded-lg text-secondary bg-experiences bg-opacity-80">
            <h1>My experiences</h1>

            <RowDiv horizontal={HorizontalType.BETWEEN} bgColor="secondary">
                <ColDiv width={WidthType.THIRD} textColor="tertiary" bgColor="primary">
                    <Card width={WidthType.THIRD} bgColor="primary">
                        <p>Test</p>
                    </Card>
                </ColDiv>
                <ColDiv width={WidthType.THIRD} bgColor="tertiary">
                    <p>Bonsoir</p>
                </ColDiv>
                <ColDiv width={WidthType.THIRD} bgColor="tertiary">
                    <p>Bonsoir</p>
                </ColDiv>
                <ColDiv width={WidthType.THIRD} bgColor="tertiary">
                    <p>Bonsoir</p>
                </ColDiv>
            </RowDiv>


        </div>
    );
};

export default Experiences;