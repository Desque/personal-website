import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

interface NavigationProps {
    activePage : string
}

interface NavButtonProps {
    activePage : string,
    page : string,
    title : string,
}

const navButtons = [
    {
        'page':'bio',
        'title':'Identity',
    },
    {
        'page':'studies',
        'title':'Studies',
    },
    {
        'page':'experiences',
        'title':'Experiences',
    },
    {
        'page':'hardskills',
        'title':'Hard Skills',
    },
    {
        'page':'projects',
        'title':'Projects',
    }
]

const MenuButtonStyle = (activePage : string, page : string) : string => {
    let globalStyle : string =
        ' group lg:text-2xl text-md bg-opacity-90 hover:bg-opacity-80 ' +
        ' rounded-lg flex flex-col gap-2 items-center transition hover:-translate-y-6 hover:scale-150 hover:ease-in-out hover:duration-200 text-'+page+' '
    let specificStyle = activePage === page ? ' scale-150 ' : '  hover:border-tertiary '
    return specificStyle + globalStyle
}

const ImgButtonStyle = (activePage : string, page : string) : string => {
    let globalStyle : string =
        ' rounded-full w-3/4 aspect-square overflow-hidden border-2 bg-secondary bg-opacity-80 shadow-3xl bg-'+page+' active:scale-75 '
    let specificStyle = activePage === page ? 'border-tertiary bg-opacity-100 ' : ' border-'+page+' transition hover:ease-in-out hover:border-tertiary hover:bg-opacity-100 hover:duration-200 '
    return specificStyle + globalStyle
}

const NavButton = (props : NavButtonProps) => {
    return (
        <NavLink to={'/'+props.page} className={MenuButtonStyle(props.activePage,props.page)}>
            <div className={ImgButtonStyle(props.activePage,props.page)}>
                <img src={'assets/img/'+props.page+'.png'} className="w-16 scale-125" alt={props.page+' photo'}/>
            </div>
            <p className={("text-sm whitespace-nowrap absolute font-bold top-12 invisible group-hover:visible text-"+props.page)}>{props.title}</p>
        </NavLink>
    )
}

const Navigation = (props : NavigationProps) => {
    return (
        <div className="flex justify-center">
            <div className="ml-6 mr-6 p-0 w-fit py-6 px-3 rounded-full shadow-3xl transition ease-in-out backdrop-blur-xl">
                <div className="flex justify-center gap-4 ">
                    {navButtons.map((value, index) => {
                        return <NavButton activePage={props.activePage} page={value.page} title={value.title}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Navigation;