import { Home } from "./components/Home";
import { BioProvider } from "./components/hooks/ContextAPI";

export const App = () => {
     return (
          <BioProvider>
               <Home/>
          </BioProvider>
     )
};

