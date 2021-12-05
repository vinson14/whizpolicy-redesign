import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormContainer from "../components/stateless/interface/form/form-container";
import TextInput from "../components/stateless/interface/form/text-input";
import PasswordInput from "../components/stateless/interface/form/password-input";
import WhizpolicyLogo from "../components/stateless/interface/misc/whizpolicy-logo";
import { signUpUser } from "../utils/api";
import { useRouter } from "next/router";
import {
  defaultSignupFormValues,
  inputTypeMapping,
  signupFields,
  SIGNUP_CONFIRM_PASSWORD_KEY,
  SIGNUP_EMAIL_KEY,
  SIGNUP_USERNAME_KEY,
  SIGNUP_PASSWORD_KEY,
  EMAIL_EXISTS_MSG,
} from "../data/ui";
import LoginHeader from "../components/stateless/interface/misc/login-header";
import BaseButton from "../components/stateless/interface/buttons/base-button";
import _ from "lodash";
import LoginContainer from "../components/stateless/layout/login-container";

const SignupPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm({ mode: "onTouched", defaultValues: { ...defaultSignupFormValues } });

  const onSubmit = (values) => {
    setLoading(true);
    signUpUser(values).then((res) => {
      if (res.ok) {
        router.push(`/verify-user?username=${res.user.username}`);
      } else {
        console.log(res.error);
        setLoading(false);
        setError(SIGNUP_EMAIL_KEY, usernameExistsError);
      }
    });
  };

  const usernameExistsError = { type: "emailTaken", message: EMAIL_EXISTS_MSG };

  const confirmPasswordValidation = (value) => {
    const password = watch(SIGNUP_PASSWORD_KEY);
    return password === value || "Password must match";
  };

  const confirmPasswordRule = {
    validate: confirmPasswordValidation,
  };

  return (
    <LoginContainer>
      <LoginHeader title="Sign up" />
      <Box>
        <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
          <Box p={4} width={400} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            {signupFields.map((field) => {
              const InputComponent = inputTypeMapping[field.type];
              return (
                <Box key={field.name} width="100%" mb={3}>
                  <InputComponent
                    error={_.get(errors, field.name)}
                    {...field}
                    control={control}
                    rules={field.name === SIGNUP_CONFIRM_PASSWORD_KEY ? confirmPasswordRule : field?.rules}
                  />
                </Box>
              );
            })}
            <BaseButton loading={loading} type="submit" fullWidth>
              Sign Up
            </BaseButton>
          </Box>
        </FormContainer>
      </Box>
    </LoginContainer>
  );
};

export default SignupPage;
