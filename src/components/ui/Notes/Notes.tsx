const Notes = (props) => {

  const {notes = null} = props;

  let maxNotations =  5 ;

  return (
    
    <div className="star">
      {!notes ? (
        <p className="no-notes">Aucune notation disponible</p>
      ) : (
        Array(maxNotations).fill().map((_, index) => (
            <span key={`${'star-statut'}-${index}`}>
              {index < notes ? (
                <i className="fa fa-star noted"></i>
              ) : (
                <i className="fa fa-star"></i>
              )}
            </span>
          ))
      )}
</div>
  )


}

export default Notes