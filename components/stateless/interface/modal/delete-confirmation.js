import { Box, Button, DialogContent, Typography } from "@mui/material";
import { useState } from "react";
import CancelButton from "../buttons/cancel-button";
import DeleteButton from "../buttons/delete-button";
import ModalContainer from "./modal-container";

const DeleteConfirmation = ({ deleteFunction, open, handleClose }) => {
  const [loading, setLoading] = useState(false);
  const deleteOnClick = () => {
    setLoading(true);
    deleteFunction();
  };
  return (
    <ModalContainer open={open} onClose={handleClose} title="Confirm deletion">
      <Box display="flex" flexDirection="column" justifyContent="center" height="100%">
        <Typography align="center">
          Are you sure you want to proceed with deletion? This action cannot be reversed.
        </Typography>
        <Box display="flex" justifyContent="center" p={3}>
          <DeleteButton loading={loading} onClick={deleteOnClick}>
            Delete
          </DeleteButton>

          <CancelButton onClick={handleClose}>Cancel</CancelButton>
        </Box>
      </Box>
    </ModalContainer>
  );
};

export default DeleteConfirmation;
