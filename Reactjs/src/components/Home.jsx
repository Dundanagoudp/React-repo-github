import {useBioContext } from "./hooks/ContextAPI"

export const Home=()=>{
    const{ MyName, MyAge }= useBioContext();
      return <h1>hello ContextAPI. my name{MyName}. iam yearls old {MyAge}</h1>
}