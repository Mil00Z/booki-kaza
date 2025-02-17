import Link from "next/link";

import '@/styles/components/Navigation.scss'

const Navigation = () => {
  return (
    <nav className="main-nav">
        <Link href="/" className='link nav-link' activeClassName="active">Accueil</Link>
        <Link href="/about" className='link nav-link' activeClassName="active">A propos</Link>
    </nav>
  )
} 

export default Navigation