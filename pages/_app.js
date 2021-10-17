import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
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
  },
  typography: {
    fontFamily: "Public Sans, sans-serif",
  },
});

export default MyApp;
