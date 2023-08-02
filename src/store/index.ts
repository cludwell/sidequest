import {
  applyMiddleware,
  compose,
  StoreEnhancer,
  Middleware,
} from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { SessionActionTypes, sessionSlice } from "./session"; // Import types for session

// Extend the Window interface to declare the Redux DevTools property
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

let enhancer: StoreEnhancer | undefined;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(
    thunk as ThunkMiddleware<RootState, SessionActionTypes>
  );
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    (typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  enhancer = composeEnhancers(
    applyMiddleware(
      thunk as ThunkMiddleware<RootState, SessionActionTypes>,
      logger as Middleware
    )
  );
}


export const store = configureStore({
  reducer: {
    session: sessionSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
