interface NotesProps{
  notes ? : number | null;
}

const Notes = ({notes = null} : NotesProps) => {


  const maxNotations =  5 ;

  return (
    
    <div className="star">
      {!notes ? (
        <p className="no-notes">Aucune notation disponible</p>
      ) : (
        Array.from({ length: maxNotations },(a,b) => b).map((_, index) => (
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