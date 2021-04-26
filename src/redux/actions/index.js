import {
  IS_LOAD,
  GET_POKEMONS,
  VIEW_POKEMON,
  GET_ALL_POKEMON,
  IS_LOAD_ALL,
} from "../actionTypes";
import { API } from "../../utils/environments";

export function getAllPokemon() {
  return function (dispatch) {
    dispatch({ type: IS_LOAD_ALL });
    fetch(`${API}/pokemon/?limit=151`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: GET_ALL_POKEMON,
          payload: json.results,
        });
      })
      .catch((e) => console.log(e));
  };
}

export function getPokemon(id) {
  return function (dispatch) {
    dispatch({ type: IS_LOAD });
    return fetch(`${API}/pokemon-species/${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: VIEW_POKEMON,
          payload: json,
        });
      })
      .catch((e) => console.log(e));
  };
}

export function getPokemons(list) {
  return function (dispatch) {
    dispatch({ type: IS_LOAD });
    return Promise.all(
      list.map((id) =>
        fetch(`${API}/pokemon/${id}`)
          .then((response) => response.json())
          .catch((e) => console.log(e))
      )
    ).then((data) =>
      dispatch({
        type: GET_POKEMONS,
        payload: data,
      })
    );
  };
}
