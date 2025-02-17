import {Link} from 'react-router-dom'

import Navigation from '@components/Navigation/Navigation.jsx';

import logo from '@assets/kasa-logo.svg'

 
const Header = () => {


  return (
    <header id="header" className='banner-header skeleton'>
      <>
        <Link to='/' aria-label="Lien Accueil du site Kasa" tabIndex="0">
        <img src={logo} alt="Logo du site Kasa" />
        </Link>
        <Navigation />
      </>
    </header>
  )

}

export default Header