'use client';

import {useContext} from 'react'
import { useParams } from 'next/navigation';
import Image from 'next/image'

import { DataContext } from 'src/app/layout';

import HeroBanner from '@/components/ui/Hero/Hero';
// import Gallery from "@/ui/Gallery/Gallery"
// import Product from "@/ui/Product/Product"


import '@/styles/pages/Activity.scss'


const Annonce = () => {

  const {activities} = useContext(DataContext);

  const getParams = useParams();

  //Get ALl datas and dispatch good url Product
  let details = activities.find((activity)=> {
    return activity.id === getParams.id
  });
  
  // //Fake State for Pannel UI
  // let annoncePanel = true ;

  return (
    <>
      <HeroBanner layout={''}/>
      <section className="activity-section">
        <h1 className="activity title">{details.title}</h1>
        <div className="content">
          <Image src={`/${details.cover}`} alt={details.title} width={600} height={600}/>
          <p className="desc">{details?.description}</p>

        </div>
        

      </section>
     
    </>
    
  )
}

export default Annonce