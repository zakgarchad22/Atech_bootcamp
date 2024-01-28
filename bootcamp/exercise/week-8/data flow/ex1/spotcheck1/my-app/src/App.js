import './App.css';
import Gallery from './components/Gallery';
import { useState } from 'react';




function App() {
  const IMAGES = [  
    "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
    "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
    "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",  
    ]

  const [currentImage, setCurrentImage] = useState(0)


  const shiftImageBack = () => {
    if(currentImage === 0)
    {
      return
    }
    setCurrentImage(currentImage - 1)

  }

  const shiftImageForward = () => {
    if(currentImage === IMAGES.length-1)
    {
      return
    }
    setCurrentImage(currentImage + 1)
  }

  return(
    <div>
    <Gallery currentImage = {currentImage} dataImages={IMAGES} shiftImageBack={shiftImageBack} shiftImageForward={shiftImageForward} />
    </div>
  )
}

export default App;
