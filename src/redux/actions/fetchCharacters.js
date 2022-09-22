export const fetchCharacters = () => {
    return (dispatch) => {
        dispatch({ type: "START_GETTING_CHARS_REQUEST" });
        // https://bcheung98.github.io/genshin-impact-character-db-2.0/characters.json
        fetch("http://localhost:3000/characters")
            .then(res => res.json())
            .then(characters => dispatch({ type: "GET_CHARS", characters }));
    }
}