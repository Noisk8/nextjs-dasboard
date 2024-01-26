import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';


// {
//   favorites: {

//     '1': {id: '1', name: 'bulbasaur'},
//     '1': {id: '1', name: 'bulbasaur'},

//   }
// }


interface pokemosState {
  favorites: { [key: string]: SimplePokemon}

}

// const getInitialState = (): pokemosState => {

//   // ? Posible solucion
//   // * if ( typeof localStorage === 'undefined') return{};
//   // TODO: Esto puede causar otro problema en dev x que cuando  se ejecuta del lado del cliente tiene una version y cuando se ejecuta del lado de dserver otra
//   // ! Esta condicion cuando se ejecuta del lasdo del servidor 

//   const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')
//   return favorites;

// }

const initialState: pokemosState = {

  // ! ESTADO INCIAL 
  favorites: {},




  // ...getInitialState(),




}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {


    setFavoritesPokemons (state, action: PayloadAction<{[key: string]: SimplePokemon}>){
state.favorites = action.payload;

    },

    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {

      const pokemon = action.payload;

      const { id } = pokemon;

      if (!!state.favorites[id]) {

        delete state.favorites[id];
        // return;
      } else {
        state.favorites[id] = pokemon;
      }

      localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites));
    }

  }
});

export const { toggleFavorite, setFavoritesPokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer