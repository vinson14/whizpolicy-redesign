import { Breadcrumbs, Link, Typography } from "@mui/material";
import NextLink from "next/link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const CustomBreadcrumbs = ({ breadcrumbs }) => {
  const disabled = (index) => {
    return index === breadcrumbs.length - 1;
  };

  return (
    <Breadcrumbs aria-label="breadcrumb" separator={<ChevronRightIcon />}>
      {breadcrumbs &&
        breadcrumbs.map((crumb, index) => {
          if (!disabled(index)) {
            return (
              <Link
                key={crumb.label}
                underline="hover"
                color="text.secondary"
                sx={{ cursor: "pointer" }}
                onClick={crumb.onClick}
              >
                {crumb.label}
              </Link>
            );
          } else {
            return (
              <Typography color="text.secondary" key={crumb.label}>
                {crumb.label}
              </Typography>
            );
          }
        })}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
