import React from "react";  // import React (to provide access to TSX)
import "./PhotoViewer.css";



export function PhotoViewer( {srcUrl} : {srcUrl : string} ) : JSX.Element {// declare and export new function called 'PhotoViewer'
    return (                
        <div className="photoborder" >               
            {/* return some TSX  */}
                <img className = 'photo' src = {srcUrl}/>
        </div>
    );
}