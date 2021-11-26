import Auth from "@aws-amplify/auth";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormContainer from "../components/stateless/interface/form/form-container";
import TextInput from "../components/stateless/interface/form/text-input";
import LoadingIcon from "../components/stateless/interface/misc/loading-icon";
import WhizpolicyLogo from "../components/stateless/interface/misc/whizpolicy-logo";
import { confirmSignUp, signInUser, signOutUser, signUpUser } from "../utils/api";

const SignupPage = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const [confirmUser, setConfirmUser] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const { control, handleSubmit } = useForm({ mode: "onBlur", defaultValues });
  const onSubmit = (data) => {
    if (!confirmUser) {
      console.log(data);
      setLoading(true);
      signUpUser(data)
        .then((newUser) => {
          setLoading(false);
          if (newUser) {
            setConfirmUser(true);
            setUser(newUser);
            setError(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setError(true);
          setLoading(false);
        });
    } else {
      setLoading(true);
      confirmSignUp(user.username, data.mfacode).then((res) => {
        if (res) {
          signInUser(data).then((loggedInUser) => {
            if (loggedInUser) router.push("/dashboard");
          });
        }
      });
    }
  };

  return !loading ? (
    <Container sx={containerSx}>
      <Box display="flex" justifyContent="center">
        <WhizpolicyLogo />
      </Box>
      <Box>
        <Typography variant="h5" align="center" sx={{ pt: 2, px: 1 }}>
          {confirmUser ? "Please check your email for the verification code" : "Create account"}
        </Typography>
      </Box>
      <Box maxWidth={400}>
        <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
          <Grid p={3} justifyContent="space-between" container>
            {!confirmUser ? (
              userFormFields.map((field) => (
                <Grid key={field.name} item {...field.col} p={2}>
                  <TextInput error={error} helperText="Username already exists" control={control} {...field} />
                </Grid>
              ))
            ) : (
              <Grid item {...confirmUserFields.col} p={2}>
                <TextInput register={register} {...confirmUserFields} />
              </Grid>
            )}

            <Grid item xs={12} p={2}>
              <Button type="submit" variant="contained" fullWidth>
                Create your account
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

const confirmUserFields = {
  name: "mfacode",
  label: "Verification code",
  col: {
    xs: 12,
  },
};

const containerSx = {
  p: 3,
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
};

export default SignupPage;
