import { MiddlewareAPI, Dispatch, Action } from "@reduxjs/toolkit";
import { RootState } from "..";



export const localStorageMiddleware = (state: MiddlewareAPI) => {


    return (next: Dispatch) => (action: Action) => {

        // ?  Midelware es como un hombre que se pone en Medio podemos ejecutar cuando el estado cambia

        next(action);

        const { pokemons } = state.getState() as RootState;
        localStorage.setItem('favorite-pokemons', JSON.stringify(pokemons));

        return;


    }

}

