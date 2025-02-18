import Link from "next/link";
import Image from "next/image";

import Navigation from '@/ui/Navigation/Navigation';

import logo from '@/public/kasa-logo.svg'


import '@/styles/layouts/header.scss';

 
const Header = () => {

  return (
    <header id="header" className='banner-header skeleton'>
      <>
        <Link href='/' aria-label="Lien Accueil du site Kasa" tabIndex="0">
          <Image src={logo} alt="Logo du site Kasa" />
        </Link>
        <Navigation />
      </>
    </header>
  )

}

export default Header