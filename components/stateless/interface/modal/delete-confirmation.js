import { Box, Button, DialogContent, Typography } from "@mui/material";
import ModalContainer from "./modal-container";

const DeleteConfirmation = ({ deleteFunction, open, handleClose }) => {
  return (
    <ModalContainer open={open} onClose={handleClose} title="Confirm deletion">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        height="100%"
      >
        <Typography align="center">
          Are you sure you want to proceed with deletion? This action cannot be
          reversed.
        </Typography>
        <Box display="flex" justifyContent="center" p={3}>
          <Button
            variant="contained"
            color="secondary"
            onClick={deleteFunction}
            sx={{ mr: 1 }}
          >
            Yes
          </Button>
          <Button
            variant="contained"
            onClick={handleClose}
            color="error"
            sx={{ ml: 1 }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </ModalContainer>
  );
};

export default DeleteConfirmation;
