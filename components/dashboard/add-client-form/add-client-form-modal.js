import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { addClientFormFields, inputTypeMapping } from "../../../data/ui";
import FormContainer from "../../stateless/interface/form/form-container";

const AddClientFormModal = ({ open, handleClose }) => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (formData) => console.log(formData);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Client</DialogTitle>
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
              <Button type="submit" variant="contained" color="primary">
                Add Client
              </Button>
            </Grid>
          </Grid>
        </FormContainer>
      </DialogContent>
    </Dialog>
  );
};

export default AddClientFormModal;
