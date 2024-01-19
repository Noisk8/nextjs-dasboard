import { FavoritePokemons, PokemonGrid, SimplePokemon, pokemonsResponse } from "@/pokemons";
import Image from "next/image";
import NotFound from '../../not-found';
import { IoHeartOutline } from "react-icons/io5";




export const metadata = {
 title: 'Favoritos',
 description: 'mamahuevo',
};




export default async function FavoritesPage() {
 

  return <div className="flex flex-col"  >

    <span className="text-5xl mr-2 text-center p-8 ">Pokemones favoritos <small>Global state</small></span>
{/* 
  <PokemonGrid pokemons={[]} /> */}
  <FavoritePokemons />

  </div>
  
  ;
}


