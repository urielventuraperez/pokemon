import {
  IS_LOAD,
  GET_POKEMONS,
  VIEW_POKEMON,
  GET_ALL_POKEMON,
  IS_LOAD_ALL
} from "../actionTypes";

const initialState = {
  pokemon: [],
  specie: {},
  pokemons: [],
  all: [],
  filterPokemons: [],
  isLoad: false,
  isLoadAll: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case IS_LOAD:
      return { ...state, isLoad: !state.isLoad };
    case IS_LOAD_ALL:
      return { ...state, isLoadAll: !state.isLoadAll };
    case GET_ALL_POKEMON:
      return Object.assign(
        { ...state, isLoadAll: false },
        { all: action.payload }
      );
    case GET_POKEMONS:
      return Object.assign(
        { ...state, isLoad: false },
        { pokemons: action.payload }
      );
    case VIEW_POKEMON:
      return Object.assign(
        { ...state, isLoad: false },
        { pokemon: action.payload }
      );
    default:
      return { ...state };
  }
}
