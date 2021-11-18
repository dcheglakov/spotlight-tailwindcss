import PropTypes from "prop-types";
import clsx from "clsx";

export default function Color({ name = null, className = null }) {
  return (
    <div
      className={clsx(
        "w-28 h-12 rounded-md flex justify-center items-center shadow",
        className
      )}
    >
      <span className="text-sm">{name}</span>
    </div>
  );
}

Color.propTypes = {
  className: PropTypes.string,
  number: PropTypes.string,
};
