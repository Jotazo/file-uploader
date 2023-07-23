import { Request, Response, NextFunction } from "express";

import upload from "../services/multer";

const uploadMiddleware = upload.single("file");

export const multerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  uploadMiddleware(req, res, (err) => {
    if (err) {
      return res.status(err.code).send({ message: err.message });
    }
    next();
  });
};
