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
import FloatingAddButton from "../../stateless/interface/buttons/floating-add-button";
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

const AddPolicyForm = ({
  client,
  open,
  handleClose,
  defaultValues = defaultPolicyFormValues,
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
  const policyFormCategory = useWatch({
    control,
    name: POLICY_CATEGORY_KEY,
    defaultValue: POLICY_CATEGORY_WHOLE_LIFE_KEY,
  });
  const onSubmit = (formData) => {
    console.log(formData);
    handleClose();

    if (edit) {
      putPolicyToClient(client, formData).then(() => setUpdateClients(true));
    } else {
      postPolicyToClient(client, formData).then(() => setUpdateClients(true));
    }
  };

  const resetForm = () => {
    reset({}, { keepDefaultValues: true });
  };

  const handleDelete = () => {
    deletePolicyToClient(client, defaultValues).then(() =>
      setUpdateClients(true)
    );
    handleClose();
  };

  const cancelForm = () => {
    handleClose();
  };

  const SelectCategoryComponent = inputTypeMapping[policyCategorySelect.type];

  return (
    <ModalContainer open={open} onClose={handleClose} title="Add Policy">
      <DialogContent>
        <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
          <Grid container p={3} spacing={1} justifyContent="space-between">
            <Grid item {...policyCategorySelect.col} p={2}>
              <SelectCategoryComponent
                {...policyCategorySelect}
                control={control}
              />
            </Grid>
            {policyCategoryFields[policyFormCategory].map((fieldName) => {
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
                  <EditButton type="submit">Edit Policy</EditButton>{" "}
                  <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
                </>
              )) || <AddButton type="submit">Add Policy</AddButton>}
              <CancelButton onClick={cancelForm}>Cancel</CancelButton>
            </Grid>
          </Grid>
        </FormContainer>
      </DialogContent>
    </ModalContainer>
  );
};

export default AddPolicyForm;
