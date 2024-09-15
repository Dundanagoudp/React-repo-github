import seriesData from "../api/seriesData.json";
import { SeriesCard } from './SeriesCard';  // Ensure you're importing correctly
       const NetflixSeries =()=>{
     
           return(
            <ul className=" grid grid-three-cols">
                  {seriesData.map((curElem)=>(
                        <SeriesCard key={curElem.id} data={curElem}/>
                  ))}
                  </ul>
           );
     };
     
// default export method
     export default NetflixSeries; 
     

     
