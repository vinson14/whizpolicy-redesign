import {
  Autocomplete,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import { useMemo, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  addClientFormFields,
  INPUT_TYPE_TEXT,
  INPUT_TYPE_RADIO,
  INPUT_TYPE_AUTOCOMPLETE,
} from "../../../data/ui";
import FormContainer from "../../stateless/interface/form/form-container";
import RadioInput from "../../stateless/interface/form/radio-input";
import TextInput from "../../stateless/interface/form/text-input";
import countryList from "react-select-country-list";
import AutocompleteInput from "../../stateless/interface/form/autocomplete-input";

const AddClientFormModal = ({ open, handleClose }) => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (formData) => console.log(formData);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Form</DialogTitle>
      <DialogContent>
        <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
          <Grid p={3} spacing={1} justifyContent="space-between" container>
            {addClientFormFields.map((field) => {
              console.log(field);
              const InputComponent = inputTypeMapping[field.type];
              return (
                <Grid key={field.name} item {...field.col} p={1}>
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

const inputTypeMapping = {
  [INPUT_TYPE_TEXT]: TextInput,
  [INPUT_TYPE_RADIO]: RadioInput,
  [INPUT_TYPE_AUTOCOMPLETE]: AutocompleteInput,
};

export default AddClientFormModal;
