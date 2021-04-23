const initialState = {
    pokemon: {},
    pokemons: [],
    filterPokemons: [],
    isLoad: false,
}


export default function reducer( state = initialState, action ) {

    switch(action.type) {
        default:
        return { ...state }
    }

}