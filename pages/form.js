import { Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import FormContainer from "../components/stateless/interface/form/form-container";
import TextInput from "../components/stateless/interface/form/text-input";

const Form = () => {
  const [openDialog, setOpenDialog] = useState(true);
  const handleCloseDialog = () => setOpenDialog(false);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      occupation: "test occupation",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Title</DialogTitle>
        <DialogContent>
          <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
            <TextInput name="occupation" control={control} label="Occupation" />
          </FormContainer>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Form;
