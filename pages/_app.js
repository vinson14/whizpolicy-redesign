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
      main: "#118ab2",
    },
    secondary: {
      main: "#049F76",
    },
    info: {
      main: "#073B4C",
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
