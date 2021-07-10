import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import characterReducer from "./reducers/characterReducer";

export default createStore(
    characterReducer,
    applyMiddleware(thunk)
)