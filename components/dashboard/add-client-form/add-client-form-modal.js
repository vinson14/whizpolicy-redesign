import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  addClientFormFields,
  inputTypeMapping,
  newClientDefaultValues,
} from "../../../data/ui";
import { postClient, putClient, deleteClient } from "../../../utils/api";
import AddButton from "../../stateless/interface/buttons/add-button";
import CancelButton from "../../stateless/interface/buttons/cancel-button";
import DeleteButton from "../../stateless/interface/buttons/delete-button";
import EditButton from "../../stateless/interface/buttons/edit-button";
import ResetButton from "../../stateless/interface/buttons/reset-button";
import FormContainer from "../../stateless/interface/form/form-container";
import ModalContainer from "../../stateless/interface/modal/modal-container";

const ClientFormModal = ({
  open,
  handleClose,
  defaultValues = newClientDefaultValues,
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

  const onSubmit = (formData) => {
    if (edit) putClient(formData);
    else postClient(formData);
    console.log(formData);

    setUpdateClients(true);
    handleClose();
  };

  const onDelete = () => {
    deleteClient(defaultValues.clientId);
    setUpdateClients(true);
  };

  const resetClient = () => {
    reset({}, { keepDefaultValues: true });
  };

  const cancelForm = () => {
    handleClose();
  };

  return (
    <ModalContainer open={open} onClose={handleClose} title="Add Client">
      <DialogContent>
        <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
          <Grid p={3} spacing={1} justifyContent="space-between" container>
            {addClientFormFields.map((field) => {
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
              {(edit && (
                <>
                  <EditButton type="submit">Submit</EditButton>
                  <DeleteButton onClick={onDelete}>Delete</DeleteButton>
                </>
              )) || (
                <>
                  <AddButton type="submit">Add</AddButton>
                  <ResetButton onClick={resetClient}>Reset</ResetButton>
                </>
              )}
              <CancelButton onClick={cancelForm}>Cancel</CancelButton>
            </Grid>
          </Grid>
        </FormContainer>
      </DialogContent>
    </ModalContainer>
  );
};

export default ClientFormModal;
