import HeroBanner from '@/components/ui/Hero/Hero.tsx'
import Listing from '@/components/ui/Listing/Listing.tsx'


import '@/styles/pages/Home.scss'


function Home() {

  
  return (
    <>
      <HeroBanner layout={'home'}  />
      <Listing />
    </>
  )
}

export default Home