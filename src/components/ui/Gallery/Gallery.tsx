import { useState } from 'react';

import Image from 'next/image';

import { Logement } from '@/types/logement.types';

//Styles
import '@/styles/components/Gallery.scss';


interface GalleryProps {
  details : Logement;
  layout : string;
}

const Gallery = ({details,layout} : GalleryProps) => {


  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0);
  // const [isVisible, setVisible] = useState<boolean>(true);

  
  const pictures = details?.pictures || [];


  function goAhead() {

    if (currentImgIndex === pictures.length - 1) {

      setCurrentImgIndex(0)

    } else {

      setCurrentImgIndex(currentImgIndex + 1)
    }


    // setVisible(isVisible => !isVisible)
  }


  function goBack() {

    if (currentImgIndex <= 0 ) {

      setCurrentImgIndex(pictures.length - 1)

    } else {

      setCurrentImgIndex(currentImgIndex - 1)
    }


    // setVisible(isVisible => !isVisible)
  }


 
return (

  <section className="gallery" data-layout={layout}>

    {(pictures.length > 1) ? ( 
       
        <div className="nav-pictures">
          <span className="nav-icon left" onClick={() => goBack()}>
          <i className="fa-solid fa-angle-left"></i></span>
          <span className="nav-icon right" onClick={() => goAhead()}><i className="fa-solid fa-angle-right"></i></span>
        </div>
      ) : null}
      
    {/* <Fade isVisible={isVisible}> 

      <img key={`picture-${currentImgIndex}`} src={pictures[currentImgIndex]} className={`picture`} data-index={currentImgIndex} alt={`photo de l'annonce - ${details.title}`} /> 

    </Fade> */}

      
      <Image key={`picture-${currentImgIndex}`} src={pictures[currentImgIndex]} className={`picture`} data-index={currentImgIndex} alt={`photo de l'annonce - ${details.title}`} width={800} height={400} unoptimized= {true} /> 

      {/* <img key={`picture-${currentImgIndex}`} src={pictures[currentImgIndex]} className={`picture`} data-index={currentImgIndex} alt={`photo de l'annonce - ${details.title}`} />  */}

    {(pictures.length >1) ? (
       <div className="nav-counter"> <span className="counter">{currentImgIndex + 1}</span>/{pictures.length}</div>
    ) : null}
   
  </section>

)

}
export default Gallery