import { Box, Icon, InputAdornment, SvgIcon, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import AddButton from "../components/stateless/interface/buttons/add-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const Testing = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Box sx={{ p: 5 }}>
      <SvgIcon>
        <FontAwesomeIcon icon={faCoffee} />
      </SvgIcon>
    </Box>
  );
};

export default Testing;
