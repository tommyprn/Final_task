import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import promise from "redux-promise-middleware";
import userReducer from "./reducers/user";
import artistReducer from "./reducers/user";
import songReducer from "./reducers/song";

// Global state
const reducers = combineReducers({
  user: userReducer,
  artist: artistReducer,
  song: songReducer,
});

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, storeEnhancers(applyMiddleware(promise)));

export default store;
