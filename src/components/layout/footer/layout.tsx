
import Image from 'next/image'

import altLogo from '@/public/kasa-alt-logo.svg'

import '@/styles/layouts/footer.scss'


const Footer = () => {
  return (
    <footer id="footer" className="banner-footer">
      <Image src={altLogo} alt="logo kasa" />
      <p className="copyright">© 2024 Kasa.All rights <a href='https://github.com/Mil00Z/kasa' target='_blank'>reserved</a></p>
    </footer>
  )
}

export default Footer