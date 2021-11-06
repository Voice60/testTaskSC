import gamesReducer from './gamesReducer'

const { createStore, combineReducers} = require("redux");

let reducers = combineReducers({
  games: gamesReducer
});

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;