import { createStore, applyMiddleware, Store, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import { authReducer, AuthState } from "./auth";

export type CommonState = {
  auth: AuthState;
};

const rootReducer = combineReducers({ auth: authReducer });

export default (): Store => {
  const store: Store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
  );
  return store;
};
