import { Box, Grid, Typography } from "@mui/material";
import AddButton from "../../stateless/interface/buttons/add-button";
import ClientCardHeader from "../../stateless/interface/cards/client-card-header";
import ClientCardInfoText from "../../stateless/interface/cards/client-card-info-text";
import ClientDetailCard from "../../stateless/interface/cards/client-detail-card";
import useModal from "../../../utils/useModal";
import DependantForm from "../add-dependant-form/dependant-form";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteDependantToClient } from "../../../utils/api";
import DeleteConfirmation from "../../stateless/interface/modal/delete-confirmation";
import { formatString, getAge } from "../../../utils/utils";
import React, { useState } from "react";

const DependantsCard = ({ client, setLoading }) => {
  const [dependantFormState, openDependantForm, closeDependantForm] = useModal();
  const [deletingDep, setDeletingDep] = useState(null);
  const [deleteModalState, openDeleteModal, closeDeleteModal] = useModal();
  const deleteDependant = () => {
    closeDeleteModal();
    deleteDependantToClient(client, deletingDep).then(() => setLoading(true));
  };
  const deleteOnClick = (dep) => {
    setDeletingDep(dep);
    openDeleteModal();
  };

  return (
    <ClientDetailCard>
      <DeleteConfirmation deleteFunction={deleteDependant} open={deleteModalState} handleClose={closeDeleteModal} />
      <ClientCardHeader>Dependants</ClientCardHeader>
      <Grid container py={1}>
        {client.dependants &&
          client.dependants.map((dependant) => (
            <React.Fragment key={dependant.name}>
              <ClientCardInfoText label={formatString(dependant.relationship)} value={dependant.name} />
              <ClientCardInfoText
                label="Age"
                value={getAge(dependant.birthday)}
                mb={1}
                endIcon={<DeleteIcon />}
                endIconOnClick={() => deleteOnClick(dependant)}
              />
            </React.Fragment>
          ))}
        {(!client.dependants || client.dependants.length === 0) && (
          <Grid item xs={12}>
            <Typography>No dependants have been added</Typography>
          </Grid>
        )}
        <Grid xs={12} display="flex" justifyContent="end" alignItems="center" item>
          <AddButton onClick={openDependantForm} variant="text" mb={0}>
            Add Dependant
          </AddButton>
          {dependantFormState && (
            <DependantForm
              open={dependantFormState}
              handleClose={closeDependantForm}
              client={client}
              setLoading={setLoading}
            />
          )}
        </Grid>
      </Grid>
    </ClientDetailCard>
  );
};

export default DependantsCard;
