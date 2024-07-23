import { useState } from 'react';
import './App.css'
import { PhotoViewer } from './photoviewer/PhotoViewer';
import {GetImageUrls} from './photoviewer/GetImageUrls';
import { ImageSelector } from './photoviewer/ImageSelector';

function App() {
  const [imageSelectedUrl, setImageSelectedUrl] = useState("https://picsum.photos/id/600/1600/900.jpg");

  return (
    <>
        <div>
            <h1>React Photo Viewer</h1>
            {/* put default image */}
            <PhotoViewer srcUrl = {imageSelectedUrl}/>
            {/* get the images */}
            <GetImageUrls/>
            {/* enlarge the image if selected */}
            <ImageSelector imageSelectedUrl={imageSelectedUrl} setImageSelectedUrl={setImageSelectedUrl} />  
        </div>

    </>
  )
}

export default App


