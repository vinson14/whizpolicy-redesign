import { Button, DialogContent, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { signInUser } from "../../utils/api";
import FormContainer from "../stateless/interface/form/form-container";
import TextInput from "../stateless/interface/form/text-input";
import ModalContainer from "../stateless/interface/modal/modal-container";

const UserForm = ({ open, handleClose }) => {
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
      col: {
        xs: 12,
        md: 6,
        lg: 5,
      },
    },
  ];

  const { register, handleSubmit } = useForm({ mode: "onBlur", defaultValues });
  const onSubmit = (data) => {
    console.log(data);
    signInUser(data);
  };
  return (
    <ModalContainer open={open} onClose={handleClose} title="Sign In">
      <DialogContent>
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
        </FormContainer>
      </DialogContent>
    </ModalContainer>
  );
};

export default UserForm;
