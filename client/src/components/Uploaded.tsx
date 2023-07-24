import checkIcon from "../assets/check.svg";

import "./Uploaded.css";

interface Props {
  fileUrl: string;
  copyTextToClipboard: (text: string) => void;
}

const Uploaded: React.FC<Props> = ({ fileUrl, copyTextToClipboard }) => {
  return (
    <>
      <header className="flex flex-col items-center gap-4">
        <img src={checkIcon} className="w-11" alt="check icon" />
        <h2 className="title">Uploaded Successfully</h2>
      </header>
      <section className="section">
        <img className="w-full h-full object-cover" src={fileUrl} />
      </section>
      <footer className="flex">
        <input
          type="text"
          value={fileUrl}
          disabled
          className="flex-1 input-link"
        />
        <button
          onClick={() => void copyTextToClipboard(fileUrl)}
          className="btn"
        >
          Copy link
        </button>
      </footer>
    </>
  );
};

export default Uploaded;
