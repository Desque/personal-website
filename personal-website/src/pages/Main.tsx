import React from 'react';
import {NavLink} from "react-router-dom";
import DSParagraph from "../design-system/components/Elements/DSParagraph/DSParagraph";
import {TextSizeType} from "../design-system/utils/EnumStyle";

const Main = () => {
    return (
        <>
            <div className="sticky top-0 h-[6vh] flex flex-col justify-center bg-secondary text-center">
                <div className="flex flex-row gap-[2vw] justify-center">
                    <DSParagraph textSize={TextSizeType.BASE}>
                        ️ 🤠 Greetings adventurer ! You discovered my precious  <a href="../assets/pdf/cv-quentin-desbrousses.pdf" download="cv-quentin-desbrousses.pdf" className="no-underline text-tertiary"><strong>Curriculum Vitae 📃</strong></a>
                    </DSParagraph>
                    <DSParagraph textSize={TextSizeType.BASE}>-</DSParagraph>
                    <div className="flex flex-row gap-[1vw]">
                        <DSParagraph textSize={TextSizeType.BASE}>
                            Now you can explore my world
                        </DSParagraph>
                        <DSParagraph textSize={TextSizeType.BASE}>
                            <NavLink className="rounded-md bg-tertiary text-secondary p-[1vh] transition ease-in-out hover:duration-200 hover:bg-primary" to="/home">🔦 Go and discover</NavLink>
                        </DSParagraph>
                    </div>

                </div>

            </div>
            <div className="h-[100vh] bg-tertiary p-[2vh]">

            </div>
            <div className="flex flex-row justify-between gap-[2vh]">
                <div className="w-1/4 bg-secondary text-center rounded-md">Identity</div>
                <div className="w-3/4 flex flex-col gap-[2vh] text-center">
                    <div className="bg-secondary text-center rounded-md">3</div>
                    <div className="bg-secondary text-center rounded-md">4</div>
                    <div className="bg-secondary text-center rounded-md">5</div>
                </div>
            </div>
        </>
    );
};

export default Main;