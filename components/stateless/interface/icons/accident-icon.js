import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarCrash } from "@fortawesome/free-solid-svg-icons";
import FaIconWrapper from "./fa-icon-wrapper";
const AccidentIcon = ({ color }) => {
  return (
    <FaIconWrapper color={color}>
      <FontAwesomeIcon icon={faCarCrash} />
    </FaIconWrapper>
  );
};

export default AccidentIcon;
