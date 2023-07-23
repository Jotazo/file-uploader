import { Router } from "express";
import { uploadFile } from "../controller/upload";

import { multerMiddleware } from "../middleware/multer";

const uploadRouter = Router();

uploadRouter.post("/upload", multerMiddleware, uploadFile);

export default uploadRouter;
