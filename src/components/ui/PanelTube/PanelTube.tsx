import { useRef,useEffect } from 'react'
import '@/styles/components/PanelTube.scss'

const PanelTube = (props) => {

const {details,title,description,annoncePanel} = props

const contentRef = useRef(null);



function handleClick(event) {

  let target = event.target;
  let targetClass = target.closest('.tube');
  let container = targetClass.querySelector('.panel-container');

 
  // Shorthand to check existence
  if (targetClass && container) {

    let maxHeight = container.scrollHeight;

    container.style.setProperty('--max-height',`${maxHeight}px`);
  
    targetClass.classList.toggle('reversed');

  }

}



  return (
    annoncePanel ? (
    <>
      <div className='product-panel tube' onClick={() => handleClick(event)}>
        <h3 className='title'>Description <i className="fa-solid fa-angle-up"></i></h3>
        <p className='panel-container' >
            {details.description}
        </p>
      </div>
      <div className="product-panel tube" onClick={ () => handleClick(event)}>
          <h3 className='title'>Equipements <i className="fa-solid fa-angle-up"></i></h3>
          <ul className='panel-container'>
          {details.equipments.map((equipement,index)=>{

              return (<li key={`${equipement}-${index}`}>{equipement}</li>)
              }) 

            }
          </ul>
      </div>
    </>) : (<div className='soft-skill tube' onClick={ () => handleClick(event)}>
  
          <>
            <h3 className='title'>{title} <i className="fa-solid fa-angle-up"></i></h3>
            <p className='panel-container' ref={contentRef}>{description}</p>
          </>
          
        </div>)
  )
}
export default PanelTube