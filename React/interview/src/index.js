import React from "react";
import ReactDOM from "react-dom";
import { DataLayer } from "./DataLayer";

import App from "./App";
import { initialState } from "./Reducer";
import { reducer } from "./Reducer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialstate={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  rootElement
);
