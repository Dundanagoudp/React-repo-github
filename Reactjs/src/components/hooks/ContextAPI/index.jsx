import { createContext } from "react";

 export const BioContext = createContext();

//  step2

export const BioProvider=({children})=>{

      const MyName = "chetan";
      const MyAge =25;
      return <BioContext.Provider  value={{MyName:MyName, MyAge:MyAge}}>{children}</BioContext.Provider>;
}