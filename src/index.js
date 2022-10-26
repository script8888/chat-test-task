import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StoreProvider, createStore } from "easy-peasy";
import model from "./redux/model";

const store = createStore(model);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
