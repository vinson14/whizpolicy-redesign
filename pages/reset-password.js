import { Box, Typography } from "@mui/material";
import _ from "lodash";
import { useState } from "react";
import { useForm } from "react-hook-form";
import BaseButton from "../components/stateless/interface/buttons/base-button";
import FormContainer from "../components/stateless/interface/form/form-container";
import TextInput from "../components/stateless/interface/form/text-input";
import LoginHeader from "../components/stateless/interface/misc/login-header";
import LoginContainer from "../components/stateless/layout/login-container";
import { inputTypeMapping, resetPasswordDefaultValues, resetPasswordFields, SIGNUP_EMAIL_KEY } from "../data/ui";
import { forgotPassword } from "../utils/api";

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched", defaultValues: { ...resetPasswordDefaultValues } });

  const onSubmit = async (values) => {
    const response = await forgotPassword(values[SIGNUP_EMAIL_KEY]);
    if (response.ok) {
      setLoading(false);
      setResetSuccess(true);
    }
  };

  return (
    <LoginContainer>
      <LoginHeader title="Reset password" />
      <Box>
        <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
          <Box p={4} width={400} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            {resetPasswordFields.map((field) => {
              const InputComponent = inputTypeMapping[field.type];
              return (
                <Box key={field.name} width="100%" mb={3}>
                  <InputComponent error={_.get(errors, field.name)} {...field} control={control} />
                </Box>
              );
            })}
            {!resetSuccess && (
              <Box width="100%" mb={3}>
                <Typography variant="caption">
                  Please enter the email address which was used to register your account
                </Typography>
              </Box>
            )}
            <BaseButton loading={loading} type="submit" variant="contained" fullWidth sx={{ my: 3 }}>
              Reset Password
            </BaseButton>
          </Box>
          {resetSuccess && (
            <Box>
              <Typography>Please check your email for the next steps to reset your password</Typography>
            </Box>
          )}
        </FormContainer>
      </Box>
    </LoginContainer>
  );
};

export default ResetPassword;
