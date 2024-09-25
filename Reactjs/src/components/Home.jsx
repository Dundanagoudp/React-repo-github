import { useContext } from "react"
import { BioContext } from "./hooks/ContextAPI"

export const Home=()=>{
    const{ MyName, MyAge }= useContext(BioContext)
      return <h1>hello ContextAPI. my name{MyName}. iam yearls old {MyAge}</h1>
}