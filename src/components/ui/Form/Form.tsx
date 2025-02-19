
import 'src/styles/components/Form.scss'


const FormSearch = () => {

  return(
    <div className="search-composant" role="search" aria-label="Zone de recherche de biens">
    <form className="search-tool">
        <label className="search-icon" htmlFor="search-entry">
            <i className="fa-solid fa-location-dot"></i>
        </label>
        <input type="search" name="search-city" id="search-entry" className="inputs" placeholder="Hie, Mentor 😎" />
        <button type="submit" id="search-validate" className="inputs">Rechercher</button>
    </form>
    <div className="search-filters">
        <h2 className="section-title">Filtres</h2>
        <ul className="search-filters-list">
            <li>
                <a href="#" className="search-link inputs">
                    <i className="fa-solid fa-money-bill-wave"></i>
                    Economique
                </a>
            </li>
            <li>
                <a href="#" className="search-link inputs">
                    <i className="fa-solid fa-person"></i>
                    Familial
                </a>
            </li>
            <li>
                <a href="#" className="search-link inputs">
                    <i className="fa-solid fa-heart"></i>
                    Romantique
                </a>
            </li>
            <li>
                <a href="#" className="search-link inputs">
                    <i className="fa-solid fa-fire"></i>
                    Nos pépites
                </a>
            </li>
        </ul>
    </div>
    <p className="search-baseline">
        <i className="fa-xs fa-solid fa-info" aria-hidden="true"></i>Plus de 500 logements sont disponibles dans cette ville
    </p>
  </div>
  )
}

export default FormSearch