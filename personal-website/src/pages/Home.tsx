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
        <div className="group active:scale-75 active:border-tertiary active:duration-100 row-span-2 flex-col justify-center text-center border-2 border-bio rounded-lg text-secondary bg-bio p-6 transition hover:cursor-pointer hover:bg-secondary hover:text-bio hover:duration-200">
            <NavLink to="/bio" className="">
                <div className="flex-col">
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
            </NavLink>
        </div>
    )
}
const studies = () => {
    return (
        <div className="group flex-col text-center border-2 border-studies rounded-lg hover:cursor-pointer transition text-secondary bg-studies hover:text-studies hover:bg-secondary hover:duration-200 p-6">
            <div className="flex-col">
                <p>Studies</p>
                <div className="">

                </div>
            </div>
        </div>
    )
}
const experiences = () => {
    return (
        <div className="group flex-col text-center border-2 border-experiences rounded-lg hover:cursor-pointer transition hover:duration-200 text-secondary bg-experiences hover:text-experiences hover:bg-secondary p-6">
            <p>Experiences</p>
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
        <div className="group flex-col text-center border-2 border-hardskills rounded-lg hover:cursor-pointer transition hover:duration-200 text-secondary hover:text-hardskills bg-hardskills hover:bg-secondary p-6">
            <div className="flex-col">
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
    )
}
const projects = () => {
    return (
        <div className="group flex-col text-center border-2 border-projects rounded-lg hover:cursor-pointer transition hover:duration-200 text-secondary hover:text-projects bg-projects hover:bg-secondary p-6">
            <div>
                <p>Look at my projects on <a className=" text-tertiary hover:underline" href="https://github.com/QuentinDesbrousses" target="_blank">github</a></p>
            </div>
            <br/>
            <div className="flex flex-wrap justify-center gap-6">

            </div>
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