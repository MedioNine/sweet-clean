import { GlobalStyles } from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffebd4", // custom primary color
    },
    background: {
      default: "#ffebd4",
    },
  },
  typography: {
    fontFamily: '"Comfortaa", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          color: "#000",
        },
      },
    },
    // Override default styles for components
  },
});

export default function GlobalHtmlStyles({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          html: {
            fontSize: "12px", // xs
            [theme.breakpoints.up("sm")]: {
              fontSize: "13px",
            },
            [theme.breakpoints.up("md")]: {
              fontSize: "14px",
            },
            [theme.breakpoints.up("lg")]: {
              fontSize: "15px",
            },
            [theme.breakpoints.up("xl")]: {
              fontSize: "16px",
            },
          },
        }}
      />
      {children}
    </ThemeProvider>
  );
}
