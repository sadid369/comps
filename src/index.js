import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Button from "./components/Button";
import ButtonPage from "./pages/ButtonPage";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(<App />);
