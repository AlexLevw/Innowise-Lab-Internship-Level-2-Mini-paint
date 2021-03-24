import React from "react";
import ReactDOM from "react-dom";
import { Store } from "redux";
import { Provider } from "react-redux";
import { initStore } from "@store";
import App from "./App";
import "@styles/index.scss";

const store: Store = initStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
