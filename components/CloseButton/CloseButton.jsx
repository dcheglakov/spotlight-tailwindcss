import PropTypes from "prop-types";
import { Close } from "../Icons";

export default function CloseButton() {
  return (
    <button className="hover:bg-grey-50 active:bg-grey-100 rounded-sm">
      <Close />
    </button>
  );
}

CloseButton.propTypes = {};
