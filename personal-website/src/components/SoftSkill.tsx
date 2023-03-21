import React from 'react';

interface SoktSkillProps {
    title : string
    description : string
    rateOverFive : number
    imgUrl : string
}

const SoftSkill = (props : SoktSkillProps) => {
    return (
        <div className="group snap-end">
            <div className="w-64 relative flex flex-col items-center bg-secondary bg-opacity-70 shadow-3xl hover:scale-125 hover:duration-150 hover:bg-opacity-80 border-2 border-bio rounded-lg text-primary overflow-hidden">
                <div className="p-2">
                    <h2 className="text-2xl font-bold flex-wrap text-bio text-center">{props.title}</h2>
                </div>
                <div className="aspect-video p-2">
                    <img className="rounded-lg p-6" src={props.imgUrl}/>
                </div>
                <div className="p-6 w-full absolute h-3/4 top-1/4 bottom-0 flex justify-start text-secondary bg-bio bg-opacity-90 invisible group-hover:visible">
                    <p className="overflow-auto pr-6">{props.description}</p>
                </div>
            </div>
        </div>
    );
};

export default SoftSkill;