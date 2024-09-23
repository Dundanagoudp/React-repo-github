import { useEffect, useState } from "react";
import "./pokemon.css";

export const HowNotToFetchAPI = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  // const fetchPokemon = () => {
  //   fetch(API)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPokemon(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //         setError(error);
  //       setLoading(false); // Ensure loading state is stopped even on error
  //     });
  // };

  const fetchPokemon = async()=>{
    try {
     const res =await fetch(API);
      const data=await res.json();
      setPokemon(data);
      setLoading(false);
    } catch (error) {
      setError(error);
        setLoading(false); 
      
    }

  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  // Display loading state while data is being fetched
  if (loading) {
    return (
      <div>
        <h1>Loading.....</h1>
      </div>
    );
  }

  // Check if pokemon data is available before rendering the UI
  if (loading) {
    return (
      <div>
        <h1>Failed to load Pokemon data.</h1>
      </div>
    );
  }

  if(error)
      return(
<div>
      <h1>Error :{error.message}</h1>
</div>
);

  return (
    <section className="container">
      <header>
        <h1>Let's Catch Pokemon</h1>
      </header>
      <ul className="card-demo">
        <li className="pokemon-card">
          <figure>
            <img
              src={pokemon.sprites?.other?.dream_world?.front_default || pokemon.sprites?.front_default} // Use optional chaining to avoid errors
              alt={pokemon.name}
              className="pokemon-image"
            />
          </figure>
          <h1>{pokemon.name}</h1>
          <div className="grid-three-cols">
            <p className="pokemon-info">
              Height: <span> {pokemon.height} </span>
            </p>
            <p className="pokemon-info">
              Weight: <span> {pokemon.weight}</span>
            </p>
            <p className="pokemon-info">
              speed: <span>{pokemon.stats[5].base_stat}</span>
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
