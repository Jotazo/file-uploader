import { useRef } from "react";
import inputImage from "../assets/image.svg";

import "./Upload.css";

interface Props {
  handleDroppedFile: (e: React.DragEvent<HTMLElement>) => Promise<void>;
  handleChangeFile: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}

const Upload: React.FC<Props> = ({ handleDroppedFile, handleChangeFile }) => {
  const fileInp = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <header className="flex flex-col gap-4">
        <h2 className="title">Upload your image</h2>
        <p className="subTitle">File should be Jpeg, Png...</p>
      </header>
      <section
        draggable={true}
        onDrop={(e) => {
          void handleDroppedFile(e);
        }}
        onDragOver={handleDragOver}
        className="section"
      >
        <img className="w-[35%]" src={inputImage} />
        <p className="section__subtitle">Drag & Drop your image here</p>
      </section>
      <footer className="flex flex-col items-center gap-6">
        <p className="footer__text">Or</p>
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
