import { DialogContent, Grid } from "@mui/material";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import DashboardContext from "../../../context/dashboard-context";
import { addDependantFormFields, defaultDependantFormValues, inputTypeMapping } from "../../../data/ui";
import { postDependantToClient } from "../../../utils/api";
import AddButton from "../../stateless/interface/buttons/add-button";
import CancelButton from "../../stateless/interface/buttons/cancel-button";
import ResetButton from "../../stateless/interface/buttons/reset-button";
import FormContainer from "../../stateless/interface/form/form-container";
import ModalContainer from "../../stateless/interface/modal/modal-container";

const DependantForm = ({ client, open, handleClose, setLoading }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onBlur", defaultValues: { ...defaultDependantFormValues } });

  const [addDependantLoading, setAddDependantLoading] = useState(false);

  const onSubmit = (dependant) => {
    setAddDependantLoading(true);
    postDependantToClient(client, dependant)
      .then(() => setAddDependantLoading(false))
      .then(() => handleClose())
      .then(() => setLoading(true));
  };
  const resetForm = () => {
    reset({ ...defaultDependantFormValues });
  };

  const cancelForm = () => {
    handleClose();
  };
  return (
    <ModalContainer open={open} onClose={cancelForm} title="Add Dependant">
      <DialogContent>
        <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
          <Grid p={3} spacing={1} justifyContent="space-between" container>
            {addDependantFormFields.map((field) => {
              const InputComponent = inputTypeMapping[field.type];
              return (
                <Grid key={field.name} item {...field.col} p={2}>
                  <InputComponent error={errors[field.name]} {...field} control={control} />
                </Grid>
              );
            })}
            <Grid item xs={12}>
              <AddButton loading={addDependantLoading} type="submit">
                Add
              </AddButton>
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
