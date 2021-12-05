import { Container } from "@mui/material";

const LoginContainer = ({ children }) => {
  const containerSx = {
    p: 3,
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  };
  return <Container sx={containerSx}>{children}</Container>;
};

export default LoginContainer;
