import { useState } from 'react';
import './App.css'
import { PhotoViewer } from './photoviewer/PhotoViewer';
import {GetImageUrls} from './photoviewer/GetImageUrls';
import { ImageSelector } from './photoviewer/ImageSelector';

function App() {
  const [imageSelectedUrl, setImageSelectedUrl] = useState("");

  return (
    <>
        <div>
            <h1>React Photo Viewer</h1>
            {/* put default image */}
            <PhotoViewer srcUrl = {imageSelectedUrl}/>
            {/* get the images */}
            <GetImageUrls/>
            {/* enlarge the image if selected */}
            <ImageSelector imageSelectedUrl={imageSelectedUrl} setImageSelectedUrl={() => {setImageSelectedUrl(imageSelectedUrl)}} />  
        </div>

    </>
  )
}

export default App


