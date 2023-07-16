import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import DSParagraph from "../design-system/components/Elements/DSParagraph/DSParagraph";
import {TextSizeType} from "../design-system/utils/EnumStyle";
import {BsMoon, BsSun} from "react-icons/bs";

const Main = () => {
    const [isDarkMode,setDarkMode] = useState(true)
    function toggleDarkMode(){
        setDarkMode(!isDarkMode)
        //localStorage.theme = isDarkMode ? "dark" : "light"
    }

    return (
        <div className={isDarkMode ? "dark" : ""}>

            <div className="sticky top-0 p-[1vh] flex flex-col flex-end justify-center bg-secondary dark:bg-dark-secondary text-primary dark:text-dark-primary text-center">
                <div className="flex flex-row gap-[2vw] justify-center">
                    <DSParagraph textSize={TextSizeType.BASE}>
                        ️ 🤠 Greetings adventurer ! You discovered my precious  <a href="../assets/pdf/cv-quentin-desbrousses.pdf" download="cv-quentin-desbrousses.pdf" className="no-underline text-tertiary dark:text-dark-tertiary"><strong>Curriculum Vitae 📃</strong></a>
                    </DSParagraph>
                    <DSParagraph textSize={TextSizeType.BASE}>-</DSParagraph>
                    <div className="flex flex-row gap-[1vw]">
                        <DSParagraph textSize={TextSizeType.BASE}>
                            Now you can explore my world
                        </DSParagraph>
                        <DSParagraph textSize={TextSizeType.BASE}>
                            <NavLink className="rounded-md bg-tertiary dark:bg-dark-tertiary text-secondary dark:text-dark-secondary p-[4px] transition ease-in-out hover:duration-200 hover:bg-primary" to="/home">🔦 Go and discover</NavLink>
                        </DSParagraph>
                    </div>
                    <button className="text-tertiary dark:text-dark-tertiary" onClick={toggleDarkMode}>
                        {isDarkMode ? <BsMoon/> : <BsSun/>}
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-[2vh] h-[94vh] bg-primary dark:bg-dark-primary p-[2vh]">
                <div className="h-100 text-secondary dark:text-dark-secondary">
                    <DSParagraph textSize={TextSizeType.TITLE_2}>Software Engineer - Web Developer</DSParagraph>
                </div>
                <div className="min-h-[80vh] max-h-[94vh] h-100 flex flex-row justify-between gap-[2vh]">
                    <div className="w-1/4 px-[1vw] py-[1vh] h-100 bg-secondary dark:bg-dark-secondary text-primary dark:text-dark-primary rounded-md">
                        Identity
                    </div>
                    <div className="w-1/2 h-100 flex flex-col gap-[2vh]">
                        <div className="h-1/2 px-[1vw] py-[1vh] bg-secondary dark:bg-dark-secondary text-primary dark:text-dark-primary rounded-md">
                            Education
                        </div>
                        <div className="h-1/2 px-[1vw] py-[1vh] bg-secondary dark:bg-dark-secondary text-primary dark:text-dark-primary rounded-md">
                            Projects
                        </div>
                    </div>
                    <div className="w-1/4 px-[1vw] py-[1vh] h-100 bg-secondary dark:bg-dark-secondary text-primary dark:text-dark-primary rounded-md">
                        Work Experience
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Main;