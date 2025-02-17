"use client";

import {Link} from 'react-router-dom'

import '@/styles/pages/pageNotFound.scss'

const PageNotFound = () => {

  return (

      <section className="not-found-container">
        <h1 className="title">404</h1>
        <p className="description">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="link">Retourner sur la page d'accueil</Link>
      </section>  )

  }

export default PageNotFound

