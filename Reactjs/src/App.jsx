// import NetflixSeries from "./components/NetflixSeries";
// import Profile from "./components/Profile";
import "./components/Netflix.css";
import "./components/EV.css";
// import "./components/Netflix.module.css"; // moudle imported 
// import {EventHandling} from "./components/EventHandling";
// import { EventProps } from "./components/EventProps";
// import { EventPropagation } from "./components/EventPropagation";
import { State } from "./components/hooks/State";
export const App = () => {
     return (
          <section className="container">
                    {/* <h1 className="card-heading">list the best netflix series movie</h1> */}
     {/* <NetflixSeries/>; */}
     {/* <EventHandling/> */}
     {/* <EventProps/> */}
     <State/>
     {/* <EventPropagation/> */}
          </section>
     // return<Profile/>;
     );
};

