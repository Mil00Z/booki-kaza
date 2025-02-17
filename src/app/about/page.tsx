'use client';

import HeroBanner from "@/ui/Hero/Hero";
import Us from "@/ui/Us/Us";


import '@/styles/pages/About.scss';

const About = () => {

return(
  <>
    <HeroBanner layout={'about'}/>
    <Us/> 
  </>
)

}

export default About