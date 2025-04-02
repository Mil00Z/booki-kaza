'use client';


import HeroBanner from '@/ui/Hero/Hero';
import FormSearch from '@/ui/Form/Form';
import DataBento from '@/ui/Bento/Bento';


import '@/styles/pages/Home.scss'


function Home() {

  return (
    <>
      <HeroBanner layout={'home'}/>
      <FormSearch/>
      <DataBento/>
    </>
  )
}

export default Home