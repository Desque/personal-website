import React, {useState} from 'react';
import {BsCheck, BsCodeSquare, BsFillBrushFill} from "react-icons/bs";
import SoftSkill from "../components/SoftSkill";

const Biography = () => {

    const softskills = [
        {
            title:"Creativity",
            description:"When a problem happen, I always try to look at it by different angles to find a solution even if I have to rethink the whole design. I try to not stay blocked by \"classical\" view of an issue.",
            rateOverFive:4,
            imgUrl:"assets/img/croissant.png"
        },
        {
            title:"Creativity",
            description:"When a problem happens.",
            rateOverFive:4,
            imgUrl:"assets/img/croissant.png"
        },
        {
            title:"Creativity",
            description:"When a problem happen, I always try to look at it by different angles to find a solution even if I have to rethink the whole design. I try to not stay blocked by \"classical\" view of an issue.",
            rateOverFive:4,
            imgUrl:"assets/img/croissant.png"
        },
        {
            title:"Creativity",
            description:"When a problem happen, I always try to look at it by different angles to find a solution even if I have to rethink the whole design. I try to not stay blocked by \"classical\" view of an issue.",
            rateOverFive:4,
            imgUrl:"assets/img/croissant.png"
        },
        {
            title:"Creativity",
            description:"When a problem happen, I always try to look at it by different angles to find a solution even if I have to rethink the whole design. I try to not stay blocked by \"classical\" view of an issue.",
            rateOverFive:4,
            imgUrl:"assets/img/croissant.png"
        },
        {
            title:"Creativity",
            description:"When a problem happen, I always try to look at it by different angles to find a solution even if I have to rethink the whole design. I try to not stay blocked by \"classical\" view of an issue.",
            rateOverFive:4,
            imgUrl:"assets/img/croissant.png"
        },
        {
            title:"Creativity",
            description:"When a problem happen, I always try to look at it by different angles to find a solution even if I have to rethink the whole design. I try to not stay blocked by \"classical\" view of an issue.",
            rateOverFive:4,
            imgUrl:"assets/img/croissant.png"
        },
        {
            title:"Creativity",
            description:"When a problem happen, I always try to look at it by different angles to find a solution even if I have to rethink the whole design. I try to not stay blocked by \"classical\" view of an issue.",
            rateOverFive:4,
            imgUrl:"assets/img/croissant.png"
        },
    ]

    const [openPresentation,setOpenPresentation] = useState(true);
    const [openSoftSkills,setOpenSoftSkills] = useState(true);
    const [openInterests,setOpenInterests] = useState(true);
    const [copied,setCopied] = useState(false);

    const handleDropdown = (type:string) => {
        switch (type) {
            case 'presentation' : {
                setOpenPresentation(!openPresentation)
                break;
            }
            case 'studies' : {
                setOpenSoftSkills(!openSoftSkills)
                break;
            }
            case 'interests' : {
                setOpenInterests(!openInterests)
                break;
            }
            default: break;
        }
    }

    const copyToClipboard = (text:string) => {
        navigator.clipboard.writeText(text);
        setCopied(true)
    }

    return (
        <div className="p-2 text-bio">
            <div className="flex flex-col justify-start gap-12">


                <div className="bg-secondary bg-opacity-80 rounded-lg border-2 border-bio p-6 shadow-3xl">
                    <h1 className="text-3xl font-bold lg:text-4xl hover:text-tertiary hover:cursor-pointer active:translate-x-2 active:duration-100" onClick={(e)=>{handleDropdown('presentation')}}>Quick presentation</h1>
                    <div className={openPresentation ? 'block h-full' : 'hidden'}>
                        <div className="mt-12 mb-12 flex flex-col lg:flex-row justify-center gap-12 items-center h-full xl:text-lg text-sm">
                            <div className="flex flex-col justify-evenly order-2 lg:order-1 items-center gap-6 lg:gap-24 w-11/12 lg:w-1/3 text-primary">
                                <div className="flex flex-col justify-start w-full p-5 border-2 border-bio shadow-3xl rounded-lg text-primary bg-secondary  bg-opacity-70 hover:scale-105 hover:duration-150 hover:bg-opacity-80">
                                    <h2 className="text-2xl text-bio text-center">23 years old</h2>
                                    <p>born on the 28th April of 1999 in Poitiers</p>
                                </div>
                                <div className="flex flex-col  w-full gap-2 p-5 border-2 border-bio shadow-3xl rounded-lg text-primary bg-secondary  bg-opacity-70 hover:scale-105 hover:duration-150 hover:bg-opacity-80">
                                    <h2 className="text-2xl text-bio text-center">How to contact ?</h2>
                                    <div className="flex justify-start items-center gap-6">
                                        <img className="max-h-8" src="assets/img/mobile.png"/>
                                        <div className="flex whitespace-nowrap gap-2">
                                            <p className="hover:cursor-pointer hover:text-tertiary active:text-primary" onClick={(e)=>copyToClipboard('+33649254431')}>+33 6 49 25 44 31</p>
                                            <div className={copied ? "text-bio outline-success flex justify-between gap-2 items-center" : "hidden"}>
                                                <BsCheck></BsCheck>
                                                <p className="text-success">Copied !</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex justify-start items-center gap-6">
                                        <img className="max-h-8" src="assets/img/gmail.png"/>
                                        <a className="no-underline hover:text-tertiary" href="mailto:qdesbrousses.pro@gmail.com"><p>qdesbrousses.pro@gmail.com</p></a>
                                    </div>
                                    <div className="flex justify-start items-center gap-6">
                                        <img className="max-h-8" src="assets/img/linkedin.png"/>
                                        <a className="no-underline hover:text-tertiary" href="https://www.linkedin.com/in/quentin-desbrousses/?locale=en_US" target="_blank"><p>quentin-desbrousses</p></a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-12 justify-between order-1 lg:order-2 w-11/12 lg:w-1/3 items-center">
                                <div className="w-full p-5 rounded-lg text-primary">
                                    <h2 className="xl:text-4xl text-2xl text-bio text-center lg:whitespace-nowrap">Quentin DESBROUSSES</h2>
                                    <div className="flex justify-center items-center whitespace-nowrap gap-4">
                                        <p className="text-xl xl:text-2xl text-center">FRENCH ENGINEER</p>
                                        <img className="lg:max-h-6 max-h-4" src="assets/img/french-flag.png"/>
                                    </div>
                                </div>
                                <div className="hover:animate-wiggle hover:cursor-pointer">
                                    <img className="max-h-96 rounded-full p-2 bg-bio aspect-square bg-bio shadow-4xl" src="assets/img/profile.png" alt="Photo of Quentin Desbrousses"/>
                                </div>
                                <div className="w-full flex flex-col gap-6 p-5 border-2 border-bio shadow-3xl rounded-lg text-primary bg-secondary bg-opacity-70 hover:scale-105 hover:duration-150 hover:bg-opacity-80 w-full">
                                    <h2 className="text-2xl flex-wrap text-bio text-center">Any speciality ?</h2>
                                    <div className="flex justify-center items-center gap-6">
                                        <BsFillBrushFill />
                                        <p className="text-center">UX/UI DESIGNER</p>
                                    </div>
                                    <div className="flex justify-center items-center gap-6">
                                        <BsCodeSquare />
                                        <p className="text-center">FRONTEND WEB DEVELOPER</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-12 justify-between order-3 lg:order-3 w-11/12 lg:w-1/3 items-center">
                                <div className="w-full flex flex-col p-5 border-2 border-bio shadow-3xl rounded-lg text-primary bg-secondary bg-opacity-70 hover:scale-105 hover:duration-150 hover:bg-opacity-80">
                                    <h2 className="text-2xl text-bio text-center">What about me ?</h2>
                                    <p>As far as I can remember, I have always been interested by new technologies and how we can use them to make our life better. That is why working in computer science engineering was an obvious choice for me. I am proud to be part of the tomorrow's solutions.</p>
                                    <br/>
                                    <p>During some internships and projects, I developed a passion for the user experience and the frontend development. Now I am trying to get the more experience that I can in those fields to improve myself and then the world !</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="bg-secondary rounded-lg border-2 border-bio bg-opacity-80 p-6 shadow-3xl">
                    <h1 className="text-3xl font-bold lg:text-4xl hover:text-tertiary hover:cursor-pointer active:translate-x-2 active:duration-100" onClick={(e)=>{handleDropdown('studies')}}>Soft Skills</h1>
                    <div className={openSoftSkills ? 'block flex-col justify-center' : 'hidden'}>
                        <div className="flex align-items gap-12 overflow-x-auto snap-proximity scroll-pl-100 snap-x p-12">
                            {softskills.map((value, index) => {
                                return <SoftSkill title={value.title}
                                                  description={value.description}
                                                  rateOverFive={value.rateOverFive}
                                                  imgUrl={value.imgUrl} />
                            })}
                        </div>
                    </div>
                </div>


                <div className="bg-secondary rounded-lg border-2 border-bio bg-opacity-80 p-6 shadow-3xl">
                    <h1 className="text-3xl font-bold lg:text-4xl hover:text-tertiary hover:cursor-pointer active:translate-x-2 active:duration-100" onClick={(e)=>{handleDropdown('interests')}}>Interests</h1>
                    <div className={openInterests ? 'block' : 'hidden'}>
                        <p className="text-lg">Interests</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Biography;