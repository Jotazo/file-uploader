import { useState } from "react";

const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyTextToClipboard = async (text: string) => {
    setIsCopied(true);
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };

  const resetCopyToClipboard = () => setIsCopied(false);

  return { isCopied, copyTextToClipboard, resetCopyToClipboard };
};

export default useCopyToClipboard;
