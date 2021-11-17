import { DialogContent, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import {
  addClientFormFields,
  inputTypeMapping,
  newClientDefaultValues,
} from "../../../data/ui";
import { useContext } from "react";
import { postClient, putClient, deleteClient } from "../../../utils/api";
import AddButton from "../../stateless/interface/buttons/add-button";
import CancelButton from "../../stateless/interface/buttons/cancel-button";
import DeleteButton from "../../stateless/interface/buttons/delete-button";
import EditButton from "../../stateless/interface/buttons/edit-button";
import ResetButton from "../../stateless/interface/buttons/reset-button";
import FormContainer from "../../stateless/interface/form/form-container";
import ModalContainer from "../../stateless/interface/modal/modal-container";
import DashboardContext from "../../../context/dashboard-context";
import useModal from "../../../utils/useModal";
import DeleteConfirmation from "../../stateless/interface/modal/delete-confirmation";

const ClientFormModal = ({
  open,
  handleClose,
  defaultValues = newClientDefaultValues,
  edit,
}) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onBlur", defaultValues });

  const { setLoading, setUpdateClients } = useContext(DashboardContext);
  const [deleteModalState, openDeleteModal, closeDeleteModal] = useModal();

  const onSubmit = (formData) => {
    handleClose();
    setLoading(true);
    if (edit) putClient(formData).then(() => setUpdateClients(true));
    else postClient(formData).then(() => setUpdateClients(true));
    console.log(formData);
  };

  const onDelete = () => {
    handleClose();
    setLoading(true);
    deleteClient(defaultValues.clientId).then(() => setUpdateClients(true));
  };

  const resetClient = () => {
    reset({}, { keepDefaultValues: true });
  };

  const cancelForm = () => {
    resetClient();
    handleClose();
  };

  return (
    <ModalContainer open={open} onClose={handleClose} title="Add Client">
      <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
        <DeleteConfirmation
          deleteFunction={onDelete}
          open={deleteModalState}
          handleClose={closeDeleteModal}
        />
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
                <DeleteButton onClick={openDeleteModal}>Delete</DeleteButton>
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
    </ModalContainer>
  );
};

export default ClientFormModal;
