import multer from "multer";
import path from "path";

import { filterExtensions } from "../utils/multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/").pop();
    cb(null, `${Date.now()}.${ext}`);
  },
});

const upload = multer({ storage, fileFilter: filterExtensions });

export default upload;
