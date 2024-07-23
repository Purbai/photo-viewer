import React, { Dispatch, SetStateAction} from "react";
// import { useState } from 'react';
import {imageUrls} from './GetImageUrls';
import "./PhotoViewer.css";
// import {imageSelectedUrl, setImageSelectedUrl} from '../App'


export function ImageSelector( {imageSelectedUrl}:{imageSelectedUrl:string} , {setImageSelectedUrl} : {setImageSelectedUrl:(url:string) => void}) : JSX.Element {// declare and export new function called 'ImageSelector'
    // const [imageselectedUrl, setImageSelectedUrl] = useState("");
    const thumbNails = imageUrls.map(
        (url) => 
        <img className={(imageSelectedUrl === url ? "ImageSelected": "")} 
        onClick={() => {setImageSelectedUrl(url)}} src={url} />)

    return (                
        <div >               
            {/* display the thumbnail images  */}
            {thumbNails}
        </div>
    );
}
