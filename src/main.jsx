import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff5722",
    },
    secondary: {
      main: "#673ab7",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1.2rem",
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
