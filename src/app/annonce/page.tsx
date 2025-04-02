'use client';

import HeroBanner from '@/ui/Hero/Hero'
import Listing from '@/ui/Listing/Listing'


import '@/styles/pages/Home.scss'


function Annonce() {

  return (
    <>
      <HeroBanner layout={'annonces'}/>
      <Listing />
    </>
  )
}

export default Annonce