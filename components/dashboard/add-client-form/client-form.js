import { Grid, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import {
  addClientFormFields,
  inputTypeMapping,
  newClientDefaultValues,
} from "../../../data/ui";
import AddButton from "../../stateless/interface/buttons/add-button";
import ModalContainer from "../../stateless/interface/modal/modal-container";

const ClientForm = ({ open, onClose, values }) => {
  console.log("ClientForm renders");

  const onSubmit = (formValues) => console.log(formValues);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: values ? values : newClientDefaultValues,
  });
  return (
    <ModalContainer open={open} onClose={onClose} title="Add Client">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid spacing={1} container>
          {addClientFormFields.map((field) => {
            const InputComponent = inputTypeMapping[field.type];
            return (
              <Grid p={1} item key={field.name} {...field.col}>
                <InputComponent
                  control={control}
                  {...field}
                  error={errors[field.name]}
                />
              </Grid>
            );
          })}
          <Grid item xs={12}>
            <AddButton type="submit">Add</AddButton>
          </Grid>
        </Grid>
      </form>
    </ModalContainer>
  );
};

export default ClientForm;
