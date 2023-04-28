import React from 'react';
import {ItemModel} from "../card/Item.model";

const Box = (item : ItemModel) => {
    return (
        <div className={"relative transition cursor-pointer hover:duration-200 shadow-2xl rounded-lg bg-white group-hover:bg-"+item.color} >
            <a className="w-full" href={item.url}>
                <img className={"aspect-square h-16 p-2"} src={item.imgLink} alt={item.name}/>
                {!item.percentage ? <div></div> :
                    <div className="w-full">
                        <div className={"absolute text-sm bot-0 rounded-md bg-tertiary text-secondary w-[70%]"}>{item.percentage ? item.percentage+"%" : 0}</div>
                    </div>
                }
            </a>
        </div>
    )
}

export default Box;