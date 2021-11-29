import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormContainer from "../components/stateless/interface/form/form-container";
import TextInput from "../components/stateless/interface/form/text-input";
import PasswordInput from "../components/stateless/interface/form/password-input";
import WhizpolicyLogo from "../components/stateless/interface/misc/whizpolicy-logo";
import { LoadingButton } from "@mui/lab";
import { signInUser, signUpUser } from "../utils/api";
import { useRouter } from "next/router";
import {
  defaultSignupFormValues,
  inputTypeMapping,
  loginFields,
  signupFields,
  SIGNUP_CONFIRM_PASSWORD_KEY,
  SIGNUP_PASSWORD_KEY,
} from "../data/ui";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm({ mode: "onBlur", defaultValues: { ...defaultSignupFormValues } });

  const onSubmit = (values) => {
    setLoading(true);
    signUpUser(values).then((newUser) => {
      setLoading(false);
      if (newUser) {
      }
    });
  };

  const confirmPasswordValidation = (value) => {
    const password = watch(SIGNUP_PASSWORD_KEY);
    return password === value || "Password must match";
  };

  const confirmPasswordRule = {
    validate: confirmPasswordValidation,
  };

  return (
    <Container sx={containerSx}>
      <Box display="flex" justifyContent="center">
        <WhizpolicyLogo size={1.5} />
      </Box>
      <Box>
        <Typography variant="h6" align="center" sx={{ mt: 1, pt: 3, px: 1 }}>
          Sign In
        </Typography>
      </Box>
      <Box>
        <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
          <Box p={4} width={400} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            {signupFields.map((field) => {
              const InputComponent = inputTypeMapping[field.type];
              return (
                <Box key={field.name} width="100%" mb={3}>
                  <InputComponent
                    error={errors[field.name]}
                    {...field}
                    control={control}
                    rules={field.name === SIGNUP_CONFIRM_PASSWORD_KEY ? confirmPasswordRule : field?.rules}
                  />
                </Box>
              );
            })}
            <LoadingButton loading={loading} type="submit" variant="contained" fullWidth sx={{ my: 3 }}>
              Sign Up
            </LoadingButton>
          </Box>
        </FormContainer>
      </Box>
      {invalidCredentials && (
        <Box>
          <Typography color="error">Invalid username or password</Typography>
        </Box>
      )}
    </Container>
  );
};
const containerSx = {
  p: 3,
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
};
export default LoginPage;
