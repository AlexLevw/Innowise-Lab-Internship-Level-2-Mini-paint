import { createStore, applyMiddleware, Store, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer, AuthState } from "./auth";
import { painterReducer, PainterState } from "./painter";

export type CommonState = {
  auth: AuthState;
  painter: PainterState;
};

const rootReducer = combineReducers({
  auth: authReducer,
  painter: painterReducer,
});

const initStore = (): Store => {
  const store: Store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
};

export { initStore };
