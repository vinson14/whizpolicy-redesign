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
import { postPolicyToClient } from "../../../utils/api";

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
  } = useForm({ defaultValues });
  const policyFormCategory = useWatch({
    control,
    name: POLICY_CATEGORY_KEY,
    defaultValue: POLICY_CATEGORY_WHOLE_LIFE_KEY,
  });
  const onSubmit = (formData) => {
    console.log(formData);
    postPolicyToClient(client, formData);
    setUpdateClients(true);
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

export default AddPolicyForm;
