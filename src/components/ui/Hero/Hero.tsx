//Get Assets
import heroBg from '@/public/hero-background.jpg'
import heroOtherBg from '@/public/hero-annonce-background.jpg'
import heroAboutBg from '@/public/hero-about-background.jpg'

import { Logement } from '@/types/logement.types'

//Styles
import 'src/styles/components/Hero.scss'


interface HeroProps {
  details ?: Logement | null;
  layout: string;
}

const HeroBanner = ({details = null, layout}: HeroProps) => {


  //Changing BG in function of layout
  let currentBg;

  switch(layout) {
    case 'home':
      currentBg = heroBg
      break;
      case 'annonce':
      currentBg = details ? details.cover : heroBg
      break;
    case 'about': 
      currentBg = heroAboutBg
      break;
      case 'surprise': 
      currentBg = heroOtherBg
      break;
    default:
      currentBg = heroBg
  }

  const bgImage = typeof currentBg === "string" ? currentBg : currentBg.src;

  
  return (
  <>
    {layout === 'home' ? (
      <div className={`hero ${layout}`}>
        <h1 className="title">
      Trouvez votre hébergement pour des vacances de rêve
      </h1>    
    <span className="hero-title_baseline">En plein centre-ville ou en pleine nature</span>
    </div>
    ) : (
      <div className={`hero banner-${layout}`} style={layout === 'about' ? {backgroundImage:`url(${bgImage})`} :
      {backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, var(--op)) 0%, rgba(0, 0, 0, var(--op)) 100%),url(${bgImage})`}}>
  
      {layout === 'annonces' ? <h1 className="title" data-page={layout}>Chez vous, partout & ailleurs</h1> : null }
  
      </div>
    )}
    

  </>
  )
}
export default HeroBanner