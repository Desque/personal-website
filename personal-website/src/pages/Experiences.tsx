import React from 'react';
import DSCol from "../design-system/components/Wrappers/DSDiv/DSCol";
import DSRow from "../design-system/components/Wrappers/DSDiv/DSRow";
import {HorizontalType, WidthType} from "../design-system/utils/EnumStyle";
import DSCard from "../design-system/components/Wrappers/DSCard/DSCard";
import DSCardPanel from '../design-system/components/Wrappers/DSCardPanel/DSCardPanel';

const Experiences = () => {
    return (
        <div className="p-6 rounded-lg text-secondary bg-experiences bg-opacity-80">
            <h1>My experiences</h1>

            <DSCardPanel>
                <DSCard bgColor="primary">
                    <p>Test</p>
                </DSCard>
                <DSCard bgColor="primary">
                    <p>Test</p>
                </DSCard>
                <DSCard bgColor="primary">
                    <p>Test</p>
                </DSCard>
                <DSCard bgColor="primary">
                    <p>Test</p>
                </DSCard>
                <DSCard bgColor="primary">
                    <p>Test</p>
                </DSCard>
            </DSCardPanel>

            <DSRow horizontal={HorizontalType.BETWEEN} bgColor="secondary">
                <DSCol width={WidthType.THIRD} textColor="tertiary" bgColor="primary">
                    <DSCard width={WidthType.THIRD} bgColor="primary">
                        <p>Test</p>
                    </DSCard>
                </DSCol>
                <DSCol width={WidthType.THIRD} bgColor="tertiary">
                    <p>Bonsoir</p>
                </DSCol>
                <DSCol width={WidthType.THIRD} bgColor="tertiary">
                    <p>Bonsoir</p>
                </DSCol>
                <DSCol width={WidthType.THIRD} bgColor="tertiary">
                    <p>Bonsoir</p>
                </DSCol>
            </DSRow>


        </div>
    );
};

export default Experiences;