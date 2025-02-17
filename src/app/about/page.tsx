'use client';

import HeroBanner from "@/components/ui/Hero/Hero";
import Us from "@/components/ui/Us/Us";

import "@/styles/pages/About.scss"

const About = () => {

return(
  <>
    <HeroBanner layout={'about'}/>
    <Us/> 
  </>
)

}

export default About