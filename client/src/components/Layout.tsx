import "./Layout.css";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface Props {
  children: React.ReactNode;
  onNavBack: () => void;
  fileUrl: string | null;
}

const Layout: React.FC<Props> = ({ children, onNavBack, fileUrl }) => {
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
