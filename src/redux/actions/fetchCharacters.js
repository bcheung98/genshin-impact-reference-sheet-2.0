export const fetchCharacters = () => {
    return (dispatch) => {
        dispatch({ type: "START_GETTING_CHARS_REQUEST" });
        fetch("https://bcheung98.github.io/genshin-impact-character-db/characters.json")
            .then(res => res.json())
            .then(characters => dispatch({ type: "GET_CHARS", characters }));
    }
}