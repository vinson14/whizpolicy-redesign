import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

const theme = createTheme({
  palette: {
    text: {
      primary: "#223354",
      secondary: "rgba(34, 51, 84, 0.7)",
      disabled: "rgba(36, 46, 111, 0.6)",
    },
    primary: {
      main: "#5569ff",
    },
    secondary: {
      main: "#44d600",
      contrastText: "#ffffff",
    },
    info: {
      main: "#073B4C",
    },
    warning: {
      main: "#ffa319",
      contrastText: "#fff",
    },
    error: {
      main: "#ff1943",
    },
  },
  typography: {
    fontFamily: "Public Sans, sans-serif",
  },
  shape: {
    borderRadius: 4,
  },
});

export default MyApp;
