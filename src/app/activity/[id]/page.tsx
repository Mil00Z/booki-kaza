'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image'

import { useDataContext } from '@/hooks/useDataContext';
import type { Activity } from '@/types/activity.types';

import HeroBanner from '@/components/ui/Hero/Hero';


//Styles
import '@/styles/pages/Activity.scss'


const Activity = () => {

  const {activities} = useDataContext();

  const getParams = useParams();

  //Get ALl datas and dispatch good url Product
  let details = activities.find((activity:Activity)=> {
    return activity.id === getParams.id
  });
  
  // //Fake State for Pannel UI
  // let annoncePanel = true ;

  return (
    <>
      <HeroBanner layout={''}/>
      <section className="activity-section">
        <h1 className="activity title">{details?.title || 'Activité non trouvée'}</h1>
        <div className="content">
          <Image src={details?.cover ? `/${details.cover}` : '/image-default.jpg'} alt={details?.title || 'Image par défault'} width={600} height={600}/>
          <p className="desc">{details?.description || 'Description non trouvée'}</p>
        </div>
      </section>
    </>
  )
}

export default Activity