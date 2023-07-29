import { useSnackbar } from "notistack";
import checkIcon from "../assets/check.svg";

import { getSnackbarOptionsVariant } from "../utils/getSnackbarOptions";

import "./Uploaded.css";

interface Props {
  fileUrl: string;
}

const Uploaded: React.FC<Props> = ({ fileUrl }) => {
  const { enqueueSnackbar } = useSnackbar();

  const copyTextToClipboard = async (text: string) => {
    enqueueSnackbar(
      "Copied to Clipboard",
      getSnackbarOptionsVariant("success")
    );
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };

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
