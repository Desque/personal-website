import React, {useEffect, useState} from 'react';
import {ImageShapeType, ImageWidthType, WidthType} from "../../../utils/EnumStyle";
import {getImageWidth} from "../../../utils/getStyle";

export interface ImageProps {
    link? : string
    shape?: ImageShapeType
    cropCircle?: boolean
    width?: ImageWidthType
}

const getImageName = (imageUrl: string) => {
    const split = imageUrl.split("/")
    return split[split.length]
}

const DSImage = ({ link, shape, cropCircle, width } : ImageProps) => {
    const [imageUrl,setImageUrl] = useState("")
    const [imageAlt,setImageAlt] = useState("")
    const handleError = () => setImageUrl("/assets/img/404-page-design-animation.gif")

    useEffect(()=> {
        if(link) {
            setImageUrl(link)
            setImageAlt(getImageName(link))
        }
    })

    return (
            <img className={
                " rounded-"+(cropCircle ? "full " : "md ") +
                " aspect-"+ (shape ?? ImageShapeType.square) +
                " w-["+getImageWidth((width))+"vw] "
                } src={imageUrl} alt={imageAlt} onError={handleError} />
    );
};

export default DSImage;