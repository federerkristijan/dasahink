// /src/index.js
import "modern-css-reset";
import "./index.css";
import React from "react";
// import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";

import { QueryClient, QueryClientProvider } from "react-query";
// import { persistWithLocalStorage } from 'react-query/persist-localstorage-experimental';
import App from "./App";
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

// persistWithLocalStorage(queryClient);

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

// serviceWorkerRegistration.register();

