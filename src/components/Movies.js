function Movies(show, image) {
    return (
      <div className='col-3'>
        <div className='card'>

         
          <div className='card-body'>
            <h3 className='card-title' key={show.id}>{show.name}</h3>
            <img  src={image.medium}/>
          </div>
        </div>
      </div>
    );
   }
    
   export default Movies;