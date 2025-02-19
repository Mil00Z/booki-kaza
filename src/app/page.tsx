'use client';

import { useContext } from 'react';
import { DataContext } from '@/app/layout';

import HeroBanner from '@/ui/Hero/Hero';
import FormSearch from '@/ui/Form/Form';
import DataBento from '@/ui/Bento/Bento';


import '@/styles/pages/Home.scss'


function Home() {

  // const { logements } = useContext(DataContext);


  return (
    <>
      <HeroBanner layout={'home'}/>
      <FormSearch/>
      <DataBento/>
    </>
  )
}

export default Home