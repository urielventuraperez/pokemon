import { IS_LOAD, GET_POKEMONS } from "../actionTypes";
import { API } from "../../utils/environments";

export function getAllPokemons() {}

export function getPokemons(list) {
  return function (dispatch) {
    var pokemons = [];
    dispatch({ type: IS_LOAD });
    list.forEach((element) => {
      return fetch(`${API}/pokemon/${element}`)
        .then((response) => response.json())
        .then((json) => {
          pokemons.push(json);
        })
        .catch((e) => console.log(e));
    });
    dispatch({ type: IS_LOAD });
    return dispatch({
      type: GET_POKEMONS,
      payload: pokemons,
    });
  };
}
