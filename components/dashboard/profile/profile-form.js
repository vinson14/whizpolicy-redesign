import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { updateAgentDetails } from "../../../utils/api";
import DeleteButton from "../../stateless/interface/buttons/delete-button";
import EditButton from "../../stateless/interface/buttons/edit-button";
import FormContainer from "../../stateless/interface/form/form-container";
import TextInput from "../../stateless/interface/form/text-input";
import ModalContainer from "../../stateless/interface/modal/modal-container";

const AgentProfileForm = ({ open, onClose, values, setLoading }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onBlur", defaultValues: { ...values } });

  const onSubmit = (val) => {
    updateAgentDetails(val).then((res) => console.log(res));
  };

  return (
    <ModalContainer open={open} onClose={onClose} title="Edit Profile">
      <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
        <Grid container>
          <Grid item sm={6} xs={12} p={1}>
            <TextInput name="given_name" control={control} label="Given Name" error={errors.given_name} />
          </Grid>
          <Grid item sm={6} xs={12} p={1}>
            <TextInput name="family_name" control={control} label="Family Name" error={errors.family_name} />
          </Grid>
          <Grid item sm={6} xs={12} p={1}>
            <TextInput name="email" control={control} label="Email" error={errors.email} />
          </Grid>
          <Grid item sm={6} xs={12} p={1}>
            <TextInput name="email" control={control} label="Email" error={errors.email} />
          </Grid>
          <Grid item sm={6} xs={12} p={1}>
            <TextInput name="custom:rnf_code" control={control} label="RNF Code" error={errors["custom:rnf_code"]} />
          </Grid>
          <Grid item xs={12} p={1} my={3}>
            <>
              <EditButton type="submit">Update</EditButton>
              <DeleteButton onClick={onClose}>Cancel</DeleteButton>
            </>
          </Grid>
        </Grid>
      </FormContainer>
    </ModalContainer>
  );
};

export default AgentProfileForm;
