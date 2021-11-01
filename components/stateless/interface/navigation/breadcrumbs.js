import { Breadcrumbs, Link, Typography } from "@mui/material";
import NextLink from "next/link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const CustomBreadcrumbs = ({ links }) => {
  const isLast = (index) => {
    return index === links.length - 1;
  };

  return (
    <Breadcrumbs aria-label="breadcrumb" separator={<ChevronRightIcon />}>
      {links.map((link, index) => {
        if (!isLast(index)) {
          return (
            <NextLink href={link.route} key={link.label} shallow passHref>
              <Link color="text.secondary" underline="hover">
                {link.label}
              </Link>
            </NextLink>
          );
        } else {
          return (
            <Typography color="text.primary" key={link.label}>
              {link.label}
            </Typography>
          );
        }
      })}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
