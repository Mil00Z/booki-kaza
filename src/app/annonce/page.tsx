'use client';

import HeroBanner from '@/ui/Hero/Hero';
import Listing from '@/ui/Listing/Listing';


function Annonce() {

  return (
    <>
      <HeroBanner layout={'annonces'}/>
      <Listing />
    </>
  )
}

export default Annonce