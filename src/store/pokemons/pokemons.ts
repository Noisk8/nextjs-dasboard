import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';

interface  pokemosState {
    [key: string] : SimplePokemon

}

const getInitialState = ( ): pokemosState => {
const favorites = JSON.parse( localStorage.getItem('favorite-pokemons') ??  '{}')
  return favorites;

}

const initialState: pokemosState =  {
  ...getInitialState(),




}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

toggleFavorite(state, action: PayloadAction<SimplePokemon>){

const pokemon = action.payload;

const {id} = pokemon;

if (!!state[id]){

  delete state[id];
  // return;
} else{
  state[id] =pokemon;
}

localStorage.setItem('favorite-pokemons', JSON.stringify(state));
}

  }
});

export const {toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer