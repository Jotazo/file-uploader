import "./Layout.css";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface Props {
  children: React.ReactNode;
  fileUrl: string | null;
  onNavBack: () => void;
}

const Layout: React.FC<Props> = ({ children, fileUrl, onNavBack }) => {
  return (
    <div className="card">
      {fileUrl && (
        <div className="absolute">
          <ArrowBackIcon onClick={onNavBack} />
        </div>
      )}
      {children}
    </div>
  );
};

export default Layout;
