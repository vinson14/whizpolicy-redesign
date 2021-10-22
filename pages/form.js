import { Dialog, DialogTitle } from "@mui/material";
import { useState } from "react";

const Form = () => {
  const [openDialog, setOpenDialog] = useState(true);
  const handleCloseDialog = () => setOpenDialog(false);

  return (
    <div>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Title</DialogTitle>
      </Dialog>
    </div>
  );
};

export default Form;
