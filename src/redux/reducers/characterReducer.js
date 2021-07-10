const initialState = {
    characters: []
}

const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CHARS":
            return {
                ...state,
                characters: action.characters
            }
        default:
            return state;
    }
}

export default characterReducer;