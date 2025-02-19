import '@/styles/components/Activities.scss';

const Activities = () => {

  return (
    <section id="activities" className="">
    <h2 className="section-title">
      Activités à <span className="hebergements_geoloc">Paris</span>
    </h2>
    <div className="activities-cards" aria-label="liste des activités">
      <a href="#">
        <article className="card card-column">
          <img
            src="./images/activites/reno-laithienne.jpg"
            alt="Image du Vieux-Port de Marseille"
            className="card-thumbnail"
          />
          <div className="card-content">
            <div className="card-txt">
              <h3 className="card-title">Vieux-Port</h3>
            </div>
          </div>
        </article>
      </a>
      <a href="#">
        <article className="card card-column">
          <img
            src="./images/activites/paul-hermann.jpg"
            alt="Image du Fort de Pomègues"
            className="card-thumbnail"
          />
          <div className="card-content">
            <div className="card-txt">
              <h3 className="card-title">Fort de Pomègues</h3>
            </div>
          </div>
        </article>
      </a>
      <a href="#">
        <article className="card card-column">
          <img
            src="./images/activites/kilyan-sockalingum.jpg"
            alt="Image du Parc National des Calanques"
            className="card-thumbnail"
          />
          <div className="card-content">
            <div className="card-txt">
              <h3 className="card-title">Parc National des Calanques</h3>
            </div>
          </div>
        </article>
      </a>
      <a href="#">
        <article className="card card-column">
          <img
            src="./images/activites/florian-wehde.jpg"
            alt="Image de Notre-Dame-de-la-Garde"
            className="card-thumbnail"
          />
          <div className="card-content">
            <div className="card-txt">
              <h3 className="card-title">Notre-Dame-de-la-Garde</h3>
            </div>
          </div>
        </article>
      </a>
    </div>
  </section>

  )
}
export default Activities