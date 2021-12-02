import { Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import { useForm, useWatch } from "react-hook-form";
import {
  addPolicyFormFields,
  inputTypeMapping,
  policyCategoryFields,
  policyCategorySelect,
  POLICY_CATEGORY_WHOLE_LIFE_KEY,
  POLICY_CATEGORY_KEY,
  defaultPolicyFormValues,
} from "../../../data/ui";
import FormContainer from "../../stateless/interface/form/form-container";
import CancelButton from "../../stateless/interface/buttons/cancel-button";
import ModalContainer from "../../stateless/interface/modal/modal-container";
import AddButton from "../../stateless/interface/buttons/add-button";
import EditButton from "../../stateless/interface/buttons/edit-button";
import {
  deletePolicyToClient,
  postPolicyToClient,
  putPolicyToClient,
} from "../../../utils/api";
import DeleteButton from "../../stateless/interface/buttons/delete-button";
import ResetButton from "../../stateless/interface/buttons/reset-button";
import { useContext } from "react";
import DashboardContext from "../../../context/dashboard-context";
import DeleteConfirmation from "../../stateless/interface/modal/delete-confirmation";
import useModal from "../../../utils/useModal";

const AddPolicyForm = ({
  client,
  open,
  handleClose,
  defaultValues = defaultPolicyFormValues,
  edit,
}) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onBlur", defaultValues: defaultValues });

  const policyFormCategory = useWatch({
    control,
    name: POLICY_CATEGORY_KEY,
  });

  const { setLoading, setUpdateClients } = useContext(DashboardContext);
  const [deleteModalState, openDeleteModal, closeDeleteModal] = useModal();

  const onSubmit = (formData) => {
    handleClose();
    setLoading(true);

    if (edit) {
      putPolicyToClient(client, formData).then(() => setUpdateClients(true));
    } else {
      postPolicyToClient(client, formData).then(() => setUpdateClients(true));
    }
  };

  const resetForm = () => {
    reset();
  };

  const handleDelete = () => {
    handleClose();
    setLoading(true);
    deletePolicyToClient(client, defaultValues).then(() => {
      setUpdateClients(true);
      console.log("set update clients true");
    });
  };

  const cancelForm = () => {
    handleClose();
  };

  return (
    <ModalContainer open={open} onClose={handleClose} title="Add Policy">
      <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
        <DeleteConfirmation
          deleteFunction={handleDelete}
          open={deleteModalState}
          handleClose={closeDeleteModal}
        />
        <Grid container p={3} spacing={1} justifyContent="space-between">
          {!policyCategoryFields[policyFormCategory] && policyFormCategory}
          {policyCategoryFields[policyFormCategory] &&
            policyCategoryFields[policyFormCategory].map((fieldName) => {
              const field = addPolicyFormFields[fieldName];
              const InputComponent = inputTypeMapping[field.type];
              return (
                <Grid item key={field.name} {...field.col} p={2}>
                  <InputComponent
                    {...field}
                    register={register}
                    control={control}
                    error={errors[field.name]}
                  />
                </Grid>
              );
            })}
          <Grid item xs={12}>
            {(edit && (
              <>
                <EditButton type="submit">Confirm</EditButton>
                <DeleteButton onClick={openDeleteModal}>Delete</DeleteButton>
              </>
            )) || (
              <>
                <AddButton type="submit">Add</AddButton>
                <ResetButton onClick={resetForm}>Reset</ResetButton>
              </>
            )}
            <CancelButton onClick={cancelForm}>Cancel</CancelButton>
          </Grid>
        </Grid>
      </FormContainer>
    </ModalContainer>
  );
};

export default AddPolicyForm;
