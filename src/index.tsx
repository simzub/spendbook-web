import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import "./index.css";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

function render() {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

render();
