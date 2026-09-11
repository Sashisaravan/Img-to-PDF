import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import App from "./App";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#635BFF",
    },
    background: {
      default: "#ffffff",
    },
  },

  typography: {
    fontFamily: [
      "Inter",
      "Roboto",
      "Arial",
      "sans-serif",
    ].join(","),
  },

  shape: {
    borderRadius: 10,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);