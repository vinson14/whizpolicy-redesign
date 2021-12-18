import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormContainer from "../components/stateless/interface/form/form-container";
import TextInput from "../components/stateless/interface/form/text-input";
import PasswordInput from "../components/stateless/interface/form/password-input";
import WhizpolicyLogo from "../components/stateless/interface/misc/whizpolicy-logo";
import { LoadingButton } from "@mui/lab";
import { signInUser } from "../utils/api";
import { useRouter } from "next/router";
import { defaultLoginFormValues, inputTypeMapping, loginFields } from "../data/ui";
import LoginHeader from "../components/stateless/interface/misc/login-header";
import BaseButton from "../components/stateless/interface/buttons/base-button";
import LoginContainer from "../components/stateless/layout/login-container";
import MetaData from "../components/stateless/interface/misc/meta-data";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [rerouteLoading, setRerouteLoading] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", defaultValues: { ...defaultLoginFormValues } });
  const onSubmit = (values) => {
    setLoading(true);
    signInUser(values).then((res) => {
      if (res.ok) {
        router.push("/dashboard");
      } else if (res.error.name === "UserNotConfirmedException") {
        router.push(`/verify-user?username=${values.username}`);
      } else {
        setInvalidCredentials(true);
        setLoading(false);
      }
    });
  };

  const routeToSignupPage = () => {
    router.push("/signup");
    setRerouteLoading(true);
  };
  return (
    <LoginContainer>
      <MetaData title="Login" />
      <LoginHeader title="Login" />
      <Box>
        <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
          <Box p={4} width={400} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            {loginFields.map((field) => {
              const InputComponent = inputTypeMapping[field.type];
              return (
                <Box key={field.name} width="100%" mb={3}>
                  <InputComponent error={errors[field.name]} {...field} control={control} />
                </Box>
              );
            })}

            <BaseButton loading={loading} type="submit" fullWidth>
              Login
            </BaseButton>
            <BaseButton loading={rerouteLoading} color="secondary" onClick={routeToSignupPage} fullWidth>
              Sign up
            </BaseButton>
          </Box>
        </FormContainer>
      </Box>
      {invalidCredentials && (
        <Box>
          <Typography color="error">Invalid username or password</Typography>
        </Box>
      )}
    </LoginContainer>
  );
};

export default LoginPage;
