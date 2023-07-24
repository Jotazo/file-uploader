import { Alert, Snackbar } from "@mui/material";

import { useFileUrl, useCopyToClipboard } from "./hooks";

import { Layout, Loader, Upload, Uploaded } from "./components";

function App() {
  const {
    fileUrl,
    isUploading,
    error,
    handleChangeFile,
    handleDroppedFile,
    onNavBack,
    resetErrorMsg,
  } = useFileUrl();

  const { isCopied, copyTextToClipboard, resetCopyToClipboard } =
    useCopyToClipboard();

  const isSnackBarOpened = Boolean(error) || isCopied;
  const handleSnackbarClose = error
    ? resetErrorMsg
    : isCopied
    ? resetCopyToClipboard
    : () => {
        return;
      };
  const snackbarMsg = error
    ? error.message
    : isCopied
    ? "Copied to Clipboard"
    : "";

  return (
    <div className="flex items-center justify-center h-screen">
      <Layout onNavBack={onNavBack} fileUrl={fileUrl}>
        {isUploading ? (
          <Loader />
        ) : fileUrl ? (
          <Uploaded
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            copyTextToClipboard={copyTextToClipboard}
            fileUrl={fileUrl}
          />
        ) : (
          <Upload
            handleChangeFile={handleChangeFile}
            handleDroppedFile={handleDroppedFile}
          />
        )}
      </Layout>
      <Snackbar
        open={isSnackBarOpened}
        onClose={handleSnackbarClose}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        autoHideDuration={3000}
      >
        <Alert severity={error ? "error" : "success"}>{snackbarMsg}</Alert>
      </Snackbar>
    </div>
  );
}

export default App;
