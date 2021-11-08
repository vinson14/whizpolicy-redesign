import { DialogContent, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import {
  addDependantFormFields,
  defaultDependantFormValues,
  inputTypeMapping,
} from "../../../data/ui";
import { postDependantToClient } from "../../../utils/api";
import AddButton from "../../stateless/interface/buttons/add-button";
import CancelButton from "../../stateless/interface/buttons/cancel-button";
import ResetButton from "../../stateless/interface/buttons/reset-button";
import FormContainer from "../../stateless/interface/form/form-container";
import ModalContainer from "../../stateless/interface/modal/modal-container";

const DependantForm = ({
  client,
  open,
  handleClose,
  defaultValues = defaultDependantFormValues,
  setUpdateClients,
  edit,
}) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onBlur", defaultValues });
  const onSubmit = (dependant) => {
    postDependantToClient(client, dependant);
  };
  const resetForm = () => {
    reset({}, { keepDefaultValues: true });
  };
  const cancelForm = () => {
    resetForm();
    handleClose();
  };
  return (
    <ModalContainer open={open} onClose={handleClose} title="Add Dependant">
      <DialogContent>
        <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
          <Grid p={3} spacing={1} justifyContent="space-between" container>
            {addDependantFormFields.map((field) => {
              const InputComponent = inputTypeMapping[field.type];
              return (
                <Grid key={field.name} item {...field.col} p={2}>
                  <InputComponent
                    register={register}
                    control={control}
                    error={errors[field.name]}
                    {...field}
                  />
                </Grid>
              );
            })}
            <Grid item xs={12}>
              <AddButton type="submit">Add</AddButton>
              <ResetButton onClick={resetForm}>Reset</ResetButton>
              <CancelButton onClick={cancelForm}>Cancel</CancelButton>
            </Grid>
          </Grid>
        </FormContainer>
      </DialogContent>
    </ModalContainer>
  );
};

export default DependantForm;
