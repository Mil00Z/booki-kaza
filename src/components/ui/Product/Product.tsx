import { Logement } from '@/types/logement.types';

import Notes from '@/ui/Notes/Notes';
import PanelTube from '@/ui/PanelTube/PanelTube';

import '@/styles/components/Product.scss';

interface ProductProps {
  details: Logement;
  annoncePanel: boolean;
  bookings: number;
  setBookings: (value: (prev:number) => number) => void;
  isBooked: boolean;
  setIsBooked: (value:boolean) => void;
}

const Product = ({details,annoncePanel,bookings,setBookings,isBooked,setIsBooked} : ProductProps) => {


  function updateBooking() {

    setIsBooked(true);
    setBookings((bookings) => bookings - 1);

  }

  function scrollHeight(event: Event) : void {

    const target = event.target as HTMLElement;

    if (target.classList.contains('panel-container')) {

     let dynamicHeight = target.scrollHeight;

      (target.closest('.product-panel')as HTMLElement)?.style.setProperty('height',`${dynamicHeight}px`);

    }

  }

  return (

    <article className='logement'>

      <div className='side-left'>

        <h3 className='product-name'>{details.title} {isBooked ? (<span className='is-booked'>{' - réservé !'}</span>) : ''} </h3>
        <a href={`https://www.google.fr/maps/place/${details.location}`} className='product-location'>{details.location}</a>

        <div className='product-tags'>
          {details.tags.map((tag,index) =>{
            return (
              <span key={`${tag}-${index}`} className='tag'>{tag}</span>
            )
          })}
        </div>

      </div>
      <div className='side-right'>
        <p className='product-owner'>{details.host.name}<img src={details.host.picture} alt={details.host.name} className='thumbnail'/></p>
        <Notes notes={Number(details.rating)} />
      </div>
      
      <div className='side-bottom'>
        <PanelTube details={details} annoncePanel={annoncePanel}/>
      </div>

          <div className="extra-specs">
            <button className={`btn btn-cta btn-reserve ${isBooked ? 'booked' : ''}`} type="button" onClick={() => updateBooking()} disabled={isBooked}> {`${isBooked ? 'Indisponible' : 'Je réserves !'}`}
            </button>
          </div>
    </article>
  
  )
}

export default Product