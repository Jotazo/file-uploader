import { useState } from "react";

import { uploadFile } from "../services/upload";

const useFileUrl = () => {
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<{ message: string } | null>(null);

  const handleFileUrl = async (file: File) => {
    setIsUploading(true);
    const { error, res } = await uploadFile(file);

    if (error) {
      setIsUploading(false);
      setError({ message: error });
      return;
    }

    if (res && res.data) setFileUrl(res.data.fileUrl);

    setIsUploading(false);
  };

  const handleDroppedFile = async (
    e: React.DragEvent<HTMLElement>
  ): Promise<void> => {
    e.preventDefault();
    const { files } = e.dataTransfer;

    if (files.length > 1) {
      // Solo se puede añadir un archivo
      setError({ message: "Solo se permite un archivo" });
      return;
    }

    await handleFileUrl(files[0]);
  };

  const handleChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const files = e.target.files;

    if (files) await handleFileUrl(files[0]);
  };

  const onNavBack = () => setFileUrl(null);

  const resetErrorMsg = () => setError(null);

  return {
    fileUrl,
    isUploading,
    error,
    handleDroppedFile,
    handleChangeFile,
    onNavBack,
    resetErrorMsg,
  };
};

export default useFileUrl;
