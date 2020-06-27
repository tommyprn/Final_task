import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import promise from "redux-promise-middleware";
import userReducer from "./reducers/user";
import artistReducer from "./reducers/artist";
import songReducer from "./reducers/song";
import transactionReducer from "./reducers/transaction";

// Global state
const reducers = combineReducers({
  user: userReducer,
  artist: artistReducer,
  song: songReducer,
  transaction: transactionReducer,
});

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, storeEnhancers(applyMiddleware(promise)));

export default store;
