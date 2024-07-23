import React, { Dispatch, SetStateAction} from "react";
// import { useState } from 'react';
import {imageUrls} from './GetImageUrls';
import "./PhotoViewer.css";
// import {imageSelectedUrl, setImageSelectedUrl} from '../App'

interface SelectImageProps {
    imageSelectedUrl: string;
    setImageSelectedUrl: (url: string) => void;
  }


export function ImageSelector( props : SelectImageProps) : JSX.Element {// declare and export new function called 'ImageSelector'
    // const [imageselectedUrl, setImageSelectedUrl] = useState("");
    const thumbNails = imageUrls.map(
        (url) => <img className={(props.imageSelectedUrl === url ? "ImageSelected": "ImageNotSelected")} 
        onClick={() => {props.setImageSelectedUrl(url)}} src={url} />)

    return (                
        <div >               
            {/* display the thumbnail images  */}
            {thumbNails}

        </div>
    );
}
