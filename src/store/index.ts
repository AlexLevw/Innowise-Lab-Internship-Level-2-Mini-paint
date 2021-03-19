import { createStore, applyMiddleware, Store, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer, AuthState } from "./auth";
import { painterReducer } from "./painter";

export type CommonState = {
  auth: AuthState;
};

const rootReducer = combineReducers({ auth: authReducer });

const initStore = (): Store => {
  const store: Store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
};

const initPainterStor = (): Store => {
  const store: Store = createStore(
    painterReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
};

export { initStore, initPainterStor };
