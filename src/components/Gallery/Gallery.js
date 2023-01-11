import React, { useState } from 'react'
import './Gallery.css'
import shoeImageOne from '../../images/image-product-1.jpg'
import shoeImageTwo from '../../images/image-product-2.jpg'
import shoeImageThree from '../../images/image-product-3.jpg'
import shoeImageFour from '../../images/image-product-4.jpg'
import previous from '../../images/icon-previous.svg'
import next from '../../images/icon-next.svg'

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(shoeImageOne);
  const [currentState, setCurrentState] = useState(1);

  const chooseThumbnail = (number) => {
    switch (number) {
      case 1:
        setCurrentImage(shoeImageOne)
        setCurrentState(1);
        break;
      case 2:
        setCurrentImage(shoeImageTwo)
        setCurrentState(2);
        break;
      case 3:
        setCurrentImage(shoeImageThree)
        setCurrentState(3);
        break;
      case 4:
        setCurrentImage(shoeImageFour)
        setCurrentState(4);
        break;
      default: 
        setCurrentImage(shoeImageOne)
        setCurrentState(1);
        break;
    }
  }

  const clickNext = () => {
    let state;
    if (currentState === 4) {
      state = 1;
    } else {
      state = currentState + 1;
    }

    chooseThumbnail(state);
  }

  const clickPrevious = () => {
    let state;
    if (currentState === 1) {
      state = 4;
    } else {
      state = currentState - 1;
    }

    chooseThumbnail(state);
  }

  return (
    <div className="Gallery">
      
      <div className="main-gallery-container">
        <div className="previous" onClick={clickPrevious}><img src={previous} alt="previous button"/></div>
        <img src={currentImage} alt="main" className="main-image" />
        <div className="next" onClick={clickNext}><img src={next} alt="next button" /></div>
      </div>
  
      <div className="thumbnails">
        <img src={shoeImageOne} alt="main" className={ currentState === 1 ? "thumbnail active" : "thumbnail" } onClick={() => chooseThumbnail(1)} />
        <img src={shoeImageTwo} alt="main" className={ currentState === 2 ? "thumbnail active" : "thumbnail" } onClick={() => chooseThumbnail(2)} />
        <img src={shoeImageThree} alt="main" className={ currentState === 3 ? "thumbnail active" : "thumbnail" } onClick={() => chooseThumbnail(3)} />
        <img src={shoeImageFour} alt="main" className={ currentState === 4 ? "thumbnail active" : "thumbnail" } onClick={() => chooseThumbnail(4)} />
      </div>
    </div>
  )
}

export default Gallery