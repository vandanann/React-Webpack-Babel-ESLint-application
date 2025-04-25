
import { useState, useEffect } from 'react';

function Displaymovie() {
    const [shows, setShows] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
     const data = await fetch(
             'https://api.tvmaze.com/search/shows?q=all');
      const { results } = await data.json();
        setShows(results);

       }
       fetchData();
     }, [shows])
    return (
    
     <div className='row'>
     {shows && (
  shows.map((show) => (
<div key={show.id}>
    
         {JSON.parse(show.image).map((image) => {
                       
    return (
        <item key={show.image}>
      <img src={`${image.medium}`} />   </item>)})}</div>
   

  ))
)}</div>
)
   }
export default Displaymovie;