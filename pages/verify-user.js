import { LoadingButton } from "@mui/lab";
import { Box, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormContainer from "../components/stateless/interface/form/form-container";
import NumberInput from "../components/stateless/interface/form/number-input";
import LoginHeader from "../components/stateless/interface/misc/login-header";
import { INVALID_VERIFICATION_CODE_MSG, REQUIRED_MSG, REQUIRED_MSG_PLACEHOLDER } from "../data/ui";
import { confirmSignUp, resendConfirmation } from "../utils/api";

const VerifyUser = () => {
  const router = useRouter();
  const username = router.query?.username;
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendConfirmationMessage, setResendConfirmationMessage] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm({ mode: "onBlur", defaultValues: { code: "" } });

  const onSubmit = (values) => {
    setLoading(true);
    confirmSignUp(username, values?.code).then((res) => {
      if (res) router.push("/login");
      else {
        setLoading(false);
        setError("code", { type: "Wrong code", message: INVALID_VERIFICATION_CODE_MSG });
      }
    });
  };

  const resendConfirmationCode = async () => {
    setResendLoading(true);
    const response = await resendConfirmation(username);
    if (response) {
      setResendLoading(false);
      setResendConfirmationMessage(true);
    }
  };

  return (
    <Container sx={containerSx}>
      <LoginHeader />
      <Box>
        <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
          <Box p={4} width={400} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Box width="100%" mb={3}>
              <NumberInput
                rules={{
                  required: {
                    value: true,
                    message: REQUIRED_MSG.replace(REQUIRED_MSG_PLACEHOLDER, "verification code"),
                  },
                }}
                name="code"
                label="Verification Code"
                control={control}
                error={errors.code}
              />
            </Box>
            <Box width="100%" mb={3}>
              <Typography variant="caption">
                Please key in the verification code which was sent to your email address {username}
              </Typography>
            </Box>

            <LoadingButton loading={loading} type="submit" variant="contained" fullWidth sx={{ my: 3 }}>
              Submit
            </LoadingButton>
            <LoadingButton
              loading={resendLoading}
              onClick={resendConfirmationCode}
              color="secondary"
              variant="contained"
              fullWidth
            >
              Resend Confirmation Code
            </LoadingButton>
          </Box>
          {resendConfirmationMessage && (
            <Box>
              <Typography>Verification code has been resent to the email address</Typography>
            </Box>
          )}
        </FormContainer>
      </Box>
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

export default VerifyUser;
