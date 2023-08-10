import { applyMiddleware, compose, StoreEnhancer, Middleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { SessionActionTypes, sessionSlice } from "./session"; // Import types for session
import { createWrapper } from "next-redux-wrapper";
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

export const makeStore = () => configureStore({
  reducer: {
    session: sessionSlice.reducer,
  },
  devTools: true,
});
// export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore['dispatch']; // Define the AppDispatch type
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
