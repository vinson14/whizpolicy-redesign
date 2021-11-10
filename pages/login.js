import Auth from "@aws-amplify/auth";
import { Button, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormContainer from "../components/stateless/interface/form/form-container";
import TextInput from "../components/stateless/interface/form/text-input";
import LoadingIcon from "../components/stateless/interface/misc/loading-icon";
import { signInUser, signOutUser } from "../utils/api";

const LoginPage = () => {
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
        md: 6,
        lg: 5,
      },
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      col: {
        xs: 12,
        md: 6,
        lg: 5,
      },
    },
  ];

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { register, handleSubmit } = useForm({ mode: "onBlur", defaultValues });
  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    signInUser(data)
      .then((loggedInUser) => {
        console.log(loggedInUser);
        setLoading(false);
        if (loggedInUser) router.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const getUser = () => {
    console.log("Get user runs");
    Auth.currentAuthenticatedUser().then((user) => console.log(user));
  };

  const getSession = () => {
    Auth.currentSession().then((data) => console.log(data));
  };

  return !loading ? (
    <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
      <Grid p={3} spacing={1} justifyContent="space-between" container>
        {userFormFields.map((field) => (
          <Grid key={field.name} item {...field.col} p={2}>
            <TextInput key={field.name} register={register} {...field} />
          </Grid>
        ))}
      </Grid>
      <Button type="submit" variant="contained">
        Login
      </Button>
      <Button variant="contained" onClick={signOutUser}>
        Sign Out
      </Button>
      <Button onClick={getUser} variant="contained">
        Get User
      </Button>
      <Button onClick={getSession} variant="contained">
        Get Session
      </Button>
    </FormContainer>
  ) : (
    <LoadingIcon />
  );
};

export default LoginPage;
