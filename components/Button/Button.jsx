import PropTypes from "prop-types";
import clsx from "clsx";

export default function Button({
  children,
  isPrimary = false,
  isDisabled = false,
}) {
  return (
    <button
      className={clsx(
        "p-3 leading-none min-w-[5.75rem] rounded-full",
        isPrimary
          ? `bg-purple-button text-white font-medium hover:bg-purple-button-dark active:bg-purple-button-darker md:hover:bg-purple-light`
          : "bg-grey-100 text-grey-600 hover:bg-grey-200 active:bg-grey-300",
        isDisabled &&
          !isPrimary &&
          "text-grey-300 cursor-not-allowed hover:bg-grey-100"
      )}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  isPrimary: PropTypes.bool,
  isDisabled: PropTypes.bool,
  children: PropTypes.node,
};
