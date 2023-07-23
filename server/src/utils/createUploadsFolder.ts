import fs from "fs";
import path from "path";

const createUploadsFolder = () => {
  if (!fs.existsSync(path.join(__dirname, "../uploads"))) {
    fs.mkdirSync(path.join(__dirname, "../uploads"));
  }
};

export default createUploadsFolder;
