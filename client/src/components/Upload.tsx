import { useRef } from "react";
import { useSnackbar } from "notistack";
import inputImage from "../assets/image.svg";

import { getSnackbarOptionsVariant } from "../utils/getSnackbarOptions";

import "./Upload.css";

interface Props {
  handleFileUrl: (file: File) => Promise<void>;
}

const Upload: React.FC<Props> = ({ handleFileUrl }) => {
  const { enqueueSnackbar } = useSnackbar();

  const fileInp = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
  };

  const handleChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const files = e.target.files;

    if (files) await handleFileUrl(files[0]);
  };

  const handleDroppedFile = async (
    e: React.DragEvent<HTMLElement>
  ): Promise<void> => {
    e.preventDefault();
    const { files } = e.dataTransfer;

    if (files.length > 1) {
      enqueueSnackbar(
        "Only one file allowed",
        getSnackbarOptionsVariant("error")
      );

      return;
    }

    await handleFileUrl(files[0]);
  };

  return (
    <>
      <header className="flex flex-col gap-4">
        <h2 className="title">Upload your image</h2>
        <p className="sub-title">File should be Jpeg, Png...</p>
      </header>
      <section
        draggable={false}
        onDrop={(e) => {
          void handleDroppedFile(e);
        }}
        onDragOver={handleDragOver}
        className="section opacity-80"
      >
        <img className="w-[35%]" src={inputImage} draggable={false} />
        <p className="section-subtitle">
          Drag & Drop your image here
        </p>
      </section>
      <footer className="flex flex-col items-center gap-6">
        <p className="footer-text">Or</p>
        <input
          type="file"
          className="hidden"
          ref={fileInp}
          onChange={(e) => void handleChangeFile(e)}
        />
        <button
          onClick={() => fileInp.current && fileInp.current.click()}
          className="btn"
        >
          Choose a file
        </button>
      </footer>
    </>
  );
};

export default Upload;
