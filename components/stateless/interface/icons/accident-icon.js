import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarCrash } from "@fortawesome/free-solid-svg-icons";
import FaIconWrapper from "./fa-icon-wrapper";
const AccidentIcon = ({ color, ...props }) => {
  return (
    <FaIconWrapper {...props} color={color}>
      <FontAwesomeIcon icon={faCarCrash} />
    </FaIconWrapper>
  );
};

export default AccidentIcon;
