import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { addClientFormFields, inputTypeMapping } from "../../../data/ui";
import AddButton from "../../stateless/interface/buttons/add-button";
import CancelButton from "../../stateless/interface/buttons/cancel-button";
import EditButton from "../../stateless/interface/buttons/edit-button";
import FormContainer from "../../stateless/interface/form/form-container";
import ModalContainer from "../../stateless/interface/modal/modal-container";

const ClientFormModal = ({ open, handleClose, defaultValues, edit }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: defaultValues,
  });
  const onSubmit = (formData) => console.log(formData);

  return (
    <ModalContainer open={open} onClose={handleClose} title="Add Client">
      <DialogContent>
        <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
          <Grid p={3} spacing={1} justifyContent="space-between" container>
            {addClientFormFields.map((field) => {
              const InputComponent = inputTypeMapping[field.type];
              return (
                <Grid key={field.name} item {...field.col} p={2}>
                  <InputComponent {...field} control={control} />
                </Grid>
              );
            })}
            <Grid item xs={12}>
              {(edit && <EditButton type="submit">Edit Policy</EditButton>) || (
                <AddButton type="submit">Add Policy</AddButton>
              )}
              <CancelButton onClick={handleClose}>Cancel</CancelButton>
            </Grid>
          </Grid>
        </FormContainer>
      </DialogContent>
    </ModalContainer>
  );
};

export default ClientFormModal;
