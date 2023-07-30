import { useState } from "react";
import { useSnackbar } from "notistack";

import { uploadFile } from "./services/upload";

import { getSnackbarOptionsVariant } from "./utils/getSnackbarOptions";

import { Layout, Loader, Upload, Uploaded } from "./components";

const App = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const onNavBack = () => setFileUrl(null);

  const handleFileUrl = async (file: File) => {
    setIsUploading(true);
    const { error: responseError, fileUrl } = await uploadFile(file);

    if (responseError) {
      setIsUploading(false);
      enqueueSnackbar(responseError, getSnackbarOptionsVariant("error"));
      return;
    }

    setFileUrl(fileUrl);
    setIsUploading(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Layout onNavBack={onNavBack} fileUrl={fileUrl}>
        {isUploading ? (
          <Loader />
        ) : fileUrl ? (
          <Uploaded fileUrl={fileUrl} />
        ) : (
          <Upload handleFileUrl={handleFileUrl} />
        )}
      </Layout>
    </div>
  );
};

export default App;
