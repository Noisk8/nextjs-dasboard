import { PokemonGrid, SimplePokemon, pokemonsResponse } from "@/app/pokemons";
import Image from "next/image";

const getPokemons = async (limit = 20, offset = 0):Promise <SimplePokemon []> => {
  const data: pokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map( pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,

  }))

//   throw new Error('');
  return pokemons;
}



export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return <div className="flex flex-col"  >

    <span className="text-5xl mr-2 "> Listado de pokemons</span>

  <PokemonGrid pokemons={pokemons} />
  </div>
  
  ;
}
