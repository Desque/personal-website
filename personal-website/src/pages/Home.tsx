import React from 'react';
import {NavLink} from "react-router-dom";

const box = (imgName : string, imgLink : string, link : string, color : string, percentage? : number) => {
    return (
        <div className={"relative transition cursor-pointer hover:duration-200 shadow-2xl rounded-lg bg-white group-hover:bg-"+color} >
            <a className="w-full" href={link}>
                <img className={"aspect-square h-16 p-2"} src={imgLink} alt={imgName}/>
                {!percentage ? <div></div> :
                    <div className="w-full">
                        <p className={"absolute aspect-square text-sm text-center p-1 -top-4 -right-4 rounded-full bg-tertiary text-secondary"}>{percentage ? percentage+"%" : 0}</p>
                    </div>
                }
            </a>
        </div>
    )
}
const biography = () => {
    let softskills = [
        {
            name : "Creativity",
            imgLink : "assets/img/angular.png",
            link : "https://angular.io/",
        },
        {
            name : "Empathy",
            imgLink : "assets/img/react.png",
            link : "https://fr.reactjs.org/",
        }
        ]
    return (
        <div className="row-span-2">
            <NavLink to="/bio">
                <div className="w-full h-full group active:scale-75 active:border-tertiary active:duration-100 flex-col justify-center text-center border-2 border-bio rounded-lg text-secondary bg-bio transition hover:cursor-pointer hover:bg-secondary hover:text-bio hover:duration-200">
                    <div className="flex-col p-6">
                        <div className="w-1/2 m-auto flex justify-center hover:animate-wiggle hover:cursor-pointer">
                            <img className="rounded-full p-2 bg-white aspect-square transition hover:duration-200 group-hover:bg-bio bg-secondary shadow-4xl" src="assets/img/profile.png"/>
                        </div>
                        <div>
                            <br/>
                            <p className="font-bold">Quentin DESBROUSSES</p>
                            <p>23 ans</p>
                            <br/>
                            <p className="font-bold">French engineer</p>
                            <p>Frontend web developer - UX/UI Designer</p>
                            <br/>
                            <div className="flex flex-wrap justify-center gap-6">
                                {
                                    softskills.map(softskill => {
                                        return box(softskill.name,softskill.imgLink,softskill.link,"bio")
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}
const studies = () => {
    return (
        <div>
            <NavLink to="/studies">
                <div className="h-full w-full bg-studies group active:scale-75 active:border-tertiary active:duration-100 flex-col justify-center text-center border-2 border-bio rounded-lg text-secondary bg-bio transition hover:cursor-pointer hover:bg-secondary hover:text-bio hover:duration-200">
                    <div className="flex-col p-6">
                        <p>Studies</p>
                        <div className="">

                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}
const experiences = () => {
    return (
        <div>
            <NavLink to="/experiences">
                <div className="h-full w-full bg-experiences group active:scale-75 active:border-tertiary active:duration-100 flex-col justify-center text-center border-2 border-bio rounded-lg text-secondary bg-bio transition hover:cursor-pointer hover:bg-secondary hover:text-bio hover:duration-200">
                    <div className="flex-col p-6">
                        <p>Experiences</p>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}
const hardskills = () => {
    let hardskills = [
        {
            name : "Angular",
            imgLink : "assets/img/angular.png",
            link : "https://angular.io/",
            percent : 70,
        },
        {
            name : "React",
            imgLink : "assets/img/react.png",
            link : "https://fr.reactjs.org/",
            percent : 50,
        },
        {
            name : "VueJS",
            imgLink : "assets/img/vue.png",
            link : "https://vuejs.org/",
            percent : 25,
        },
        {
            name : "Tailwind CSS",
            imgLink : "assets/img/tailwind.png",
            link : "https://tailwindcss.com/",
            percent : 70,
        },
        {
            name : "Typescript",
            imgLink : "assets/img/typescript.png",
            link : "https://www.typescriptlang.org/",
            percent : 80,
        }
    ]
    return (
        <div>
            <NavLink to="/hardskills">
                <div className="h-full w-full bg-hardskills group active:scale-75 active:border-tertiary active:duration-100 flex-col justify-center text-center border-2 border-bio rounded-lg text-secondary bg-bio transition hover:cursor-pointer hover:bg-secondary hover:text-bio hover:duration-200">
                    <div className="flex-col p-6">
                        <p>Hardskills</p>
                        <br/>
                        <div className="flex flex-wrap justify-center gap-6">
                            {
                                hardskills.map(hardskill => {
                                    return box(hardskill.name,hardskill.imgLink,hardskill.link,"hardskills",hardskill.percent)
                                })
                            }
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}
const projects = () => {
    return (
        <div>
            <NavLink to="/projects">
                <div className="h-full w-full bg-projects group active:scale-75 active:border-tertiary active:duration-100 flex-col justify-center text-center border-2 border-bio rounded-lg text-secondary bg-bio transition hover:cursor-pointer hover:bg-secondary hover:text-bio hover:duration-200">

                    <div className="flex-col p-6">
                        <div>
                            <p>Look at my projects on <a className=" text-tertiary hover:underline" href="https://github.com/QuentinDesbrousses" target="_blank">github</a></p>
                        </div>
                        <br/>
                        <div className="flex flex-wrap justify-center gap-6">

                        </div>
                    </div>

                </div>
            </NavLink>
        </div>
    )
}

const Home = () => {
    return (
        <div className="flex-col align-middle items-center gap-6 min-h-screen">
            <h1 className="text-4xl">Overview</h1>
            <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-2 gap-6 h-100">
                {studies()}
                {biography()}
                {hardskills()}
                {experiences()}
                {projects()}
            </div>
        </div>
    );
};

export default Home;