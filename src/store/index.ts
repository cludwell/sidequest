import { createStore, combineReducers, applyMiddleware, compose, StoreEnhancer, Middleware, Reducer } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import session, { SessionState, SessionActionTypes } from './session'; // Import types for session

// Extend the Window interface to declare the Redux DevTools property
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

// Define the root state of your application
interface RootState {
  session: SessionState;
  // Add other state slices if needed
}

const rootReducer = combineReducers<RootState>({
    session: session as Reducer<SessionState, SessionActionTypes>
    // Add other reducers if needed
});

let enhancer: StoreEnhancer | undefined;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk as ThunkMiddleware<RootState, SessionActionTypes>);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk as ThunkMiddleware<RootState, SessionActionTypes>, logger as Middleware));
}

// Add the `preloadedState` type
const configureStore = (preloadedState: RootState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
