import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "popper.js/dist/popper.js";
import "./assets/styles/index.scss";
import "svgxuse/svgxuse.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
