import { Grid } from "@mui/material";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import DashboardContext from "../../../context/dashboard-context";
import {
  addPolicyFormFields,
  defaultPolicyFormValues,
  inputTypeMapping,
  policyCategoryFields,
  POLICY_CATEGORY_KEY,
  POLICY_INCEPTION_DATE_KEY,
} from "../../../data/ui";
import { deletePolicyToClient, postPolicyToClient, putPolicyToClient } from "../../../utils/api";
import useModal from "../../../utils/useModal";
import usePolicyTerm from "../../../utils/usePolicyTerm";
import AddButton from "../../stateless/interface/buttons/add-button";
import DeleteButton from "../../stateless/interface/buttons/delete-button";
import EditButton from "../../stateless/interface/buttons/edit-button";
import ResetButton from "../../stateless/interface/buttons/reset-button";
import FormContainer from "../../stateless/interface/form/form-container";
import DeleteConfirmation from "../../stateless/interface/modal/delete-confirmation";
import ModalContainer from "../../stateless/interface/modal/modal-container";

const PolicyForm = ({ open, onClose, values, client, setLoading }) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    setValue,
    setError,
  } = useForm({
    mode: "onBlur",
    defaultValues: values ? { ...values } : { ...defaultPolicyFormValues },
  });
  usePolicyTerm(watch, setValue, setError);
  const [deleteModalState, openDeleteModal, closeDeleteModal] = useModal();
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [addLoading, setAddLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const policyCategory = watch(POLICY_CATEGORY_KEY);

  const fieldNames = policyCategoryFields[policyCategory];
  const onSubmit = (policy) => {
    console.log(policy);
    if (values) {
      setEditLoading(true);
      putPolicyToClient(client, policy)
        .then(() => setEditLoading(false))
        .then(() => onClose())
        .then(() => setLoading(true));
    } else {
      console.log("this happened");
      setAddLoading(true);
      postPolicyToClient(client, policy)
        .then(() => setAddLoading(false))
        .then(() => onClose())
        .then(() => setLoading(true));
    }
  };

  const onDelete = () => {
    closeDeleteModal();
    setDeleteLoading(true);
    deletePolicyToClient(client, values)
      .then(() => setDeleteLoading(false))
      .then(() => onClose())
      .then(() => setLoading(true));
  };

  const onReset = () => reset({ ...defaultPolicyFormValues });
  return (
    <ModalContainer open={open} onClose={onClose} title={values ? "Edit Policy" : "Add Policy"}>
      <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
        <Grid container spacing={1}>
          {fieldNames.map((fieldName) => {
            const fieldParams = addPolicyFormFields[fieldName];
            const InputComponent = inputTypeMapping[fieldParams.type];
            return (
              <Grid p={1} key={fieldName} item {...fieldParams.col}>
                <InputComponent error={errors[fieldName]} {...fieldParams} control={control} />
              </Grid>
            );
          })}
          <Grid item xs={12} p={1}>
            {values ? (
              <>
                <EditButton loading={editLoading} type="submit">
                  Edit
                </EditButton>
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
      <DeleteConfirmation deleteFunction={onDelete} open={deleteModalState} handleClose={closeDeleteModal} />
    </ModalContainer>
  );
};

export default PolicyForm;
