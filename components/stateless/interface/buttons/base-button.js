import { LoadingButton } from "@mui/lab";

const BaseButton = ({ children, ...props }) => {
  return (
    <LoadingButton aria-label={children} variant="contained" sx={{ mx: 1, my: 1 }} {...props}>
      {children}
    </LoadingButton>
  );
};

export default BaseButton;
