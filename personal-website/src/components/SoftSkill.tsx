import React from 'react';

interface SoktSkillProps {
    title : string
    description : string
    rateOverFive : number
    imgUrl : string
}

const SoftSkill = (props : SoktSkillProps) => {
    return (
        <div className="flex flex-col justify-start items-center gap-12 p-12 bg-secondary bg-opacity-70 hover:scale-105 hover:duration-150 hover:bg-opacity-80 border-2 border-tertiary rounded-lg text-primary">
            <div>
                <img className="max-h-32" src={props.imgUrl}/>
            </div>
            <div>
                <h2 className="text-2xl flex-wrap text-tertiary text-center">{props.title}</h2>
                <br/>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default SoftSkill;