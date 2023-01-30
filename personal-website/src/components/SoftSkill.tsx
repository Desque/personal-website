import React from 'react';

interface SoktSkillProps {
    title : string
    description : string
    rateOverFive : number
    imgUrl : string
}

const SoftSkill = (props : SoktSkillProps) => {
    return (
        <div className="w-64 snap-center">
            <div className="flex flex-col items-center data-carousel-item bg-secondary bg-opacity-70 shadow-3xl hover:scale-105 hover:duration-150 hover:bg-opacity-80 border-2 border-bio rounded-lg text-primary">
                <div className="p-2">
                    <h2 className="text-2xl font-bold flex-wrap text-bio text-center">{props.title}</h2>
                </div>
                <div className="aspect-video p-2">
                    <img className="bg-bio rounded-lg p-6" src={props.imgUrl}/>
                </div>
                <div className="p-6">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
};

export default SoftSkill;