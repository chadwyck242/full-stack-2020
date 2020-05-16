import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const persons = [
  {
    name: "Arto Hellas",
    number: "555-555-5555",
  },
];

ReactDOM.render(<App persons={persons} />, document.getElementById("root"));
