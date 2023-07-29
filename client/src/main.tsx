import React from "react";
import ReactDOM from "react-dom/client";
import { SnackbarProvider } from "notistack";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import App from "./App.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={1}>
      <App />
    </SnackbarProvider>
  </React.StrictMode>
);
