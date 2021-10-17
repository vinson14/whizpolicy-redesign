import { Breadcrumbs, Link } from "@mui/material";

const CustomBreadcrumbs = ({ links }) => {
  const getColor = (index) => {
    return index === links.length - 1 ? "text.primary" : "text.secondary";
  };

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {links.map((link, index) => (
        <Link
          href={link.route}
          color={() => getColor(index)}
          underline="hover"
          s
          key={link.label}
        >
          {link.label}
        </Link>
      ))}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
