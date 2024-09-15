
import "./components/Netflix.css";
import "./components/EV.css";

import { State } from "./components/hooks/State";
import { DerivedState } from "./components/hooks/DerivedState";
export const App = () => {
     return (
          <section className="container">
     
     {/* <State/> */}

     <DerivedState/>
          </section>
     );
};

