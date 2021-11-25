import { Grid, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import DashboardContext from "../../../context/dashboard-context";
import {
  addClientFormFields,
  inputTypeMapping,
  newClientDefaultValues,
} from "../../../data/ui";
import { deleteClient, postClient, putClient } from "../../../utils/api";
import useModal from "../../../utils/useModal";
import AddButton from "../../stateless/interface/buttons/add-button";
import CancelButton from "../../stateless/interface/buttons/cancel-button";
import DeleteButton from "../../stateless/interface/buttons/delete-button";
import EditButton from "../../stateless/interface/buttons/edit-button";
import ResetButton from "../../stateless/interface/buttons/reset-button";
import FormContainer from "../../stateless/interface/form/form-container";
import DeleteConfirmation from "../../stateless/interface/modal/delete-confirmation";
import ModalContainer from "../../stateless/interface/modal/modal-container";

const ClientForm = ({ open, onClose, values }) => {
  const onSubmit = (client) => {
    if (values) {
      setEditLoading(true);
      putClient(client)
        .then(() => setEditLoading(false))
        .then(() => onClose())
        .then(() => setLoading(true))
        .then(() => setUpdateClients(true));
    } else {
      setAddLoading(true);
      postClient(client)
        .then(() => setAddLoading(false))
        .then(() => onClose())
        .then(() => setLoading(true))
        .then(() => setUpdateClients(true));
    }
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: values ? { ...values } : { ...newClientDefaultValues },
  });

  const { setLoading, setUpdateClients } = useContext(DashboardContext);
  const [deleteModalState, openDeleteModal, closeDeleteModal] = useModal();
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [addLoading, setAddLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false);

  const onDelete = () => {
    closeDeleteModal();
    setDeleteLoading(true);
    deleteClient(values.clientId)
      .then(() => setDeleteLoading(false))
      .then(() => onClose())
      .then(() => setLoading(true))
      .then(() => setUpdateClients(true));
  };

  const onReset = () => {
    reset({ ...newClientDefaultValues });
  };

  return (
    <ModalContainer open={open} onClose={onClose} title="Add Client">
      <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
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
            {values ? (
              <>
                <EditButton type="submit">Edit</EditButton>
                <DeleteButton loading={deleteLoading} onClick={openDeleteModal}>
                  Delete
                </DeleteButton>
              </>
            ) : (
              <>
                <AddButton loading={addLoading} type="submit">
                  Add
                </AddButton>
                <ResetButton onClick={onReset}>Reset</ResetButton>
              </>
            )}
          </Grid>
        </Grid>
      </FormContainer>
      <DeleteConfirmation
        deleteFunction={onDelete}
        open={deleteModalState}
        handleClose={closeDeleteModal}
      />
    </ModalContainer>
  );
};

export default ClientForm;
