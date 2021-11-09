import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../styles/globals.css";

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
      primary: "#212B36",
      secondary: "#637381",
      disabled: "#919EAB",
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
