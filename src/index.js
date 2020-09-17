import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { MasonryComp } from "./components/MasonryComp";
import { MasonryCss } from "./components/MasonryCss";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <MasonryCss />
  </React.StrictMode>,
  document.getElementById("root")
);
