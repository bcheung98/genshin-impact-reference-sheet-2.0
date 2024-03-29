export const fetchCharacters = () => {
    const url = "https://bcheung98.github.io/genshin-impact-character-db-2.0/characters.json";
    return (dispatch) => {
        dispatch({ type: "START_GETTING_CHARS_REQUEST" });
        fetch(url)
            .then(res => res.json())
            .then(characters => dispatch({ type: "GET_CHARS", characters }))
            .catch((error) => {
                console.error(error);
            });
    }
}