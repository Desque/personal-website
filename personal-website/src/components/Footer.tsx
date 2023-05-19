import React from 'react';
import {NavLink} from "react-router-dom";
import DSParagraph from "../design-system/components/Elements/DSParagraph/DSParagraph";
import {GapType, HorizontalType, TextAlignType, TextSizeType, WidthType} from "../design-system/utils/EnumStyle";
import DSCol from "../design-system/components/Wrappers/DSDiv/DSCol";
import DSRow from "../design-system/components/Wrappers/DSDiv/DSRow";
import {BsEnvelopeFill, BsLinkedin} from "react-icons/bs";

const Footer = () => {
    return (
        <div className="flex justify-evenly w-full p-[1vw] bg-primary text-secondary">

            <DSCol horizontal={HorizontalType.CENTER}>
                <DSParagraph textAlign={TextAlignType.CENTER} textSize={TextSizeType.TITLE_2}>Credits</DSParagraph>
                <DSParagraph textAlign={TextAlignType.CENTER} textSize={TextSizeType.BASE}>
                    <p>Copyright © Quentin Desbrousses</p>
                    <p>deployed in January 2023</p>
                </DSParagraph>
            </DSCol>

            <DSCol horizontal={HorizontalType.CENTER}>
                <DSParagraph textAlign={TextAlignType.CENTER} textSize={TextSizeType.TITLE_2}>Technologies</DSParagraph>
                <DSParagraph textAlign={TextAlignType.CENTER} textSize={TextSizeType.BASE}>
                    <DSRow gap={GapType.MD} horizontal={HorizontalType.CENTER}>
                        <NavLink to="https://reactjs.org/" className="secondary-link">ReactJS</NavLink>
                        <NavLink to="https://www.typescriptlang.org/docs/handbook/react.html" className="secondary-link">TypeScript</NavLink>
                        <NavLink to="https://tailwindcss.com/" className="secondary-link">TailwindCSS</NavLink>
                        <NavLink to="https://www.jetbrains.com/webstorm/" className="secondary-link">IDE Webstorm</NavLink>
                    </DSRow>
                </DSParagraph>
            </DSCol>

            <DSCol horizontal={HorizontalType.CENTER}>
                <DSParagraph textAlign={TextAlignType.CENTER} textSize={TextSizeType.TITLE_2}>Contact</DSParagraph>
                    <DSRow horizontal={HorizontalType.CENTER} gap={GapType.MD}>
                        <NavLink to="mailto:qdesbrousses.pro@gmail.com">
                            <BsEnvelopeFill/>
                        </NavLink>

                        <NavLink to="https://www.linkedin.com/in/quentin-desbrousses-10b235223/">
                            <BsLinkedin />
                        </NavLink>
                    </DSRow>
            </DSCol>
        </div>
    );
};

export default Footer;