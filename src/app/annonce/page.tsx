'use client';

import {useParams,useOutletContext} from 'react-router-dom'


import Gallery from "@/components/Gallery/Gallery"
import Product from "@/components/Product/Product"

import PageNotFound from "@/pages/notfound/index"
// import UnreachableProduct from "@pages/another/index"

import '@/styles/pages/Annonce.scss'


const Annonce = () => {

  const {logements, bookings, setBookings,isBooked,setIsBooked} = useOutletContext();

  let getParams = useParams();

  //Get ALl datas and dispatch good url Product
  let details = logements.find((logement)=> {

    return logement.id === getParams.id

  });
  

  let annoncePanel = true ;

  
  return (
    
    (details) ? (
    <>
      <Gallery layout={'annonce'} details={details} />
      <section className="logement-details">
          <Product details={details} annoncePanel={annoncePanel} bookings={bookings} setBookings={setBookings} isBooked={isBooked} setIsBooked={setIsBooked} />
      </section>
    </>
    ) : (<PageNotFound />)
    
  )
}

export default Annonce