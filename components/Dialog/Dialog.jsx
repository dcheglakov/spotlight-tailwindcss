import PropTypes from "prop-types";
import Button from "@/components/Button";
import CloseButton from "@/components/CloseButton";

export default function Dialog({ children }) {
  return (
    <div className="bg-white w-[28rem] text-center rounded-xl p-3">
      <div className="text-right text-grey-400">
        <CloseButton />
      </div>
      <div className="px-6 text-grey-600">{children}</div>
      <div className="p-4 flex gap-2 justify-center">
        <Button>Cancel</Button>
        <Button isPrimary>OK</Button>
      </div>
    </div>
  );
}

Dialog.propTypes = {};
