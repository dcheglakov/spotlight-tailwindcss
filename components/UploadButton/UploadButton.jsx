import { Upload } from "../Icons";

export default function UploadButton() {
  return (
    <button className="flex gap-2 py-2.5 bg-white text-purple rounded-full leading-none justify-center items-center min-w-[17rem] hover:bg-grey-0 active:bg-grey-50">
      <Upload />
      <span>Upload image</span>
    </button>
  );
}
