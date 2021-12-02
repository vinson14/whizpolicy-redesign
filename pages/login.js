import Auth from "@aws-amplify/auth";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormContainer from "../components/stateless/interface/form/form-container";
import TextInput from "../components/stateless/interface/form/text-input";
import LoadingIcon from "../components/stateless/interface/misc/loading-icon";
import WhizpolicyLogo from "../components/stateless/interface/misc/whizpolicy-logo";
import MainHeader from "../components/stateless/interface/text/main-header";
import { signInUser, signOutUser } from "../utils/api";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { control, handleSubmit } = useForm({ mode: "onBlur" });
  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    signInUser(data)
      .then((loggedInUser) => {
        setLoading(false);
        if (loggedInUser) router.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const routeToSignupPage = () => {
    setLoading(true);
    router.push("/signup");
  };

  return !loading ? (
    <Container sx={containerSx}>
      <Box display="flex" justifyContent="center">
        <WhizpolicyLogo />
      </Box>
      <Box>
        <Typography variant="h5" align="center" sx={{ pt: 2, px: 1 }}>
          Sign In
        </Typography>
      </Box>
      <Box maxWidth={400}>
        <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
          <Grid p={3} justifyContent="space-between" container>
            {userFormFields.map((field) => (
              <Grid key={field.name} item {...field.col} p={2}>
                <TextInput key={field.name} control={control} {...field} />
              </Grid>
            ))}

            <Grid item xs={12} p={2}>
              <Button type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} p={2}>
              <Button variant="contained" color="secondary" onClick={routeToSignupPage} fullWidth>
                Sign up here
              </Button>
            </Grid>
          </Grid>
        </FormContainer>
      </Box>
    </Container>
  ) : (
    <LoadingIcon />
  );
};
const defaultValues = {
  username: "",
  password: "",
};

const userFormFields = [
  {
    name: "username",
    label: "Username",
    placeholder: "",
    col: {
      xs: 12,
    },
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    col: {
      xs: 12,
    },
  },
];

const containerSx = {
  p: 3,
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
};
export default LoginPage;
