import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import RouteTree from "./routes/RouteTree";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        {/* Your app components */}
        <BrowserRouter>
          <RouteTree />
        </BrowserRouter>
      </StyledEngineProvider>
    </QueryClientProvider>
  </StrictMode>
);
