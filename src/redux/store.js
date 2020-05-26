// NPM imports
import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunkMiddleware from 'redux-thunk';

// Import reducers

const rootReducer = combineReducers({
  // Add reducers
});

function createRootStore() {
  let enhancer;
  if (process.env.NODE_ENV === 'production') {
    enhancer = compose(applyMiddleware(thunkMiddleware));
  } else {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));
  }

  return createStore(rootReducer, enhancer);
}

const store = createRootStore();

export default store;
