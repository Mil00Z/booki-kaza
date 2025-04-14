import { useRef } from 'react';
import { Logement } from '@/types/logement.types';

import '@/styles/components/PanelTube.scss'


interface PanelTubeProps {
  details ?: Logement | null;
  title ?: string;
  description ?: string;
  annoncePanel: boolean;
}

const PanelTube = ({details = null,title,description,annoncePanel} : PanelTubeProps) => {

const contentRef = useRef(null);


function handleClick(event : React.MouseEvent<HTMLDivElement>) {

  const target = event.target as HTMLElement;
  const targetClass = target.closest('.tube') as HTMLElement;
  const container = targetClass.querySelector('.panel-container') as HTMLElement;

 
  // Shorthand to check existence
  if (targetClass && container) {

    const maxHeight = container.scrollHeight;

    container.style.setProperty('--max-height',`${maxHeight}px`);
  
    targetClass.classList.toggle('reversed');

  }

}


  return (
    annoncePanel ? (
    <>
      <div className='product-panel tube' onClick={(event) => handleClick(event)}>
        <h3 className='title'>Description <i className="fa-solid fa-angle-up"></i></h3>
        <p className='panel-container' >
        {details ? details.description : "Aucune description disponible"}
        </p>
      </div>
      <div className="product-panel tube" onClick={(event) => handleClick(event)}>
          <h3 className='title'>Equipements <i className="fa-solid fa-angle-up"></i></h3>
          <ul className='panel-container'>
          {details?.equipments.map((equipement : string,index : number)=>{

              return (<li key={`${equipement}-${index}`}>{equipement}</li>)
              }) 

            }
          </ul>
      </div>
    </>) : (<div className='soft-skill tube' onClick={ (event) => handleClick(event)}>
  
          <>
            <h3 className='title'>{title} <i className="fa-solid fa-angle-up"></i></h3>
            <p className='panel-container' ref={contentRef}>{description}</p>
          </>
          
        </div>)
  )
}
export default PanelTube