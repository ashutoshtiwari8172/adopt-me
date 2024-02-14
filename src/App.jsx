import React from "react";
import { createRoot } from "react-dom/client";
import SearchParms from "./SearchParms";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParms />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
