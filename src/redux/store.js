import {createStore} from "redux";
import {combineReducers} from "redux";

import characterReducer from "./reducers/characterReducer";

const rootReducer = combineReducers({
    character: characterReducer
})

export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)