import { Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import { useForm, useWatch } from "react-hook-form";
import {
  addPolicyFormFields,
  inputTypeMapping,
  policyCategoryFields,
  policyCategorySelect,
  POLICY_CATEGORY_WHOLE_LIFE_KEY,
  POLICY_CATEGORY_KEY,
} from "../../../data/ui";
import FormContainer from "../../stateless/interface/form/form-container";
import AddButton from "../../stateless/interface/buttons/add-button";
import CancelButton from "../../stateless/interface/buttons/cancel-button";

const AddPolicyForm = ({ open, handleClose }) => {
  const { control, handleSubmit } = useForm();
  const policyFormCategory = useWatch({
    control,
    name: POLICY_CATEGORY_KEY,
    defaultValue: POLICY_CATEGORY_WHOLE_LIFE_KEY,
  });
  const onSubmit = (formData) => console.log(formData);
  const SelectCategoryComponent = inputTypeMapping[policyCategorySelect.type];

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Policy</DialogTitle>
      <DialogContent>
        <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
          <Grid container p={3} spacing={1} justifyContent="space-between">
            <Grid item {...policyCategorySelect.col}>
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
                  <InputComponent {...field} control={control} />
                </Grid>
              );
            })}
            <Grid item xs={12}>
              <AddButton type="submit" sx={{ mr: 2 }}>
                Add Policy
              </AddButton>
              <CancelButton onClick={handleClose}>Cancel</CancelButton>
            </Grid>
          </Grid>
        </FormContainer>
      </DialogContent>
    </Dialog>
  );
};

export default AddPolicyForm;
