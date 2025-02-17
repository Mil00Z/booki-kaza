import { useState,useEffect,useRef } from 'react';

// import Fade from '@/components/utils/fade.jsx';

import '@/styles/components/Gallery.scss';



const Gallery = (props) => {

  const {details = null} = props

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isVisible, setVisible] = useState(true);

  
  let pictures = details?.pictures || [];



  function goAhead() {

    if (currentImgIndex === pictures.length - 1) {

      setCurrentImgIndex(0)

    } else {

      setCurrentImgIndex(currentImgIndex + 1)
    }


    setVisible(isVisible => !isVisible)
  }


  function goBack() {

    if (currentImgIndex <= 0 ) {

      setCurrentImgIndex(pictures.length - 1)

    } else {

      setCurrentImgIndex(currentImgIndex - 1)
    }


    setVisible(isVisible => !isVisible)
  }


 
return (

  <section className="gallery">

    {(pictures.length > 1) ? ( 
       
        <div className="nav-pictures">
          <span className="nav-icon left" onClick={() => goBack()}>
          <i className="fa-solid fa-angle-left"></i></span>
          <span className="nav-icon right" onClick={() => goAhead()}><i className="fa-solid fa-angle-right"></i></span>
        </div>
      ) : null}
      
    <Fade isVisible={isVisible}> 

      <img key={`picture-${currentImgIndex}`} src={pictures[currentImgIndex]} className={`picture`} data-index={currentImgIndex} alt={`photo de l'annonce - ${details.title}`} /> 

    </Fade>
    
    {(pictures.length >1) ? (
       <div className="nav-counter"> <span className="counter">{currentImgIndex + 1}</span>/{pictures.length}</div>
    ) : null}
   
  </section>

)

}
export default Gallery