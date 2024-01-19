import { createSlice } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/pokemons';

interface  pokemosState {
    [key: string] : SimplePokemon

}

const initialState: pokemosState = {

'1':{id: '1', name: 'bulbasaur'},


}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {}
});

export const { } = pokemonsSlice.actions

export default pokemonsSlice.reducer