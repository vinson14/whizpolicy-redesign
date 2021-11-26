import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkull } from "@fortawesome/free-solid-svg-icons";
import FaIconWrapper from "./fa-icon-wrapper";
const SkullIcon = ({ color, ...props }) => {
  return (
    <FaIconWrapper color={color} {...props}>
      <FontAwesomeIcon icon={faSkull} />
    </FaIconWrapper>
  );
};

export default SkullIcon;
