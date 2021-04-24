import { IS_LOAD, GET_POKEMONS } from '../actionTypes';

const initialState = {
    pokemon: {},
    pokemons: [],
    filterPokemons: [],
    isLoad: false,
}


export default function reducer( state = initialState, action ) {

    switch(action.type) {
        case IS_LOAD:
            return { ...state, isLoad: !state.isLoad }
        case GET_POKEMONS:
            return Object.assign({ ...state},{ pokemons: action.payload })
        default:
        return { ...state }
    }

}