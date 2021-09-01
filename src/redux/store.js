import { createStore } from "redux";
import Reducers from './reducers/index';

// this is the redux state-store, first argument is the reducers we have created
//we combined the reducers in index.js to pass it as one argument in createStore
//second argument is state
//redux middleware like thunk, saga might be useful here
//last argument is optional, used to enable redux devtools in inspect element of chrome or any browser window
//to observe states, actions and dispatches much more clearly

const store = createStore(Reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;