import Notes from '@/components/ui/Notes/Notes';
import PanelTube from '@/components/ui/PanelTube/PanelTube';

import '@/styles/components/Product.scss';


const Product = (props) => {

  const {details,annoncePanel,bookings,setBookings,isBooked,setIsBooked} = props

  
  function updateBooking() {

    setIsBooked(true);
    setBookings(bookings - 1);

  }

  function scrollHeight(e) {

    if (e.target.classList.contains('panel-container')) {

      let dynamicHeight = e.target.scrollHeight;

      e.target.closest('.product-panel').style.setProperty('height',`${dynamicHeight}px`);
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
        <Notes notes={details.rating} />
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