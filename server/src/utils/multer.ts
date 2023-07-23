import { Request } from "express";
import multer from "multer";

import { createCustomError } from "./createCustomError";

export const PERMITED_EXT = ["jpg", "jpeg", "png", "gif", "webp", "bmp"];

const isValidExt = (ext: string) => {
  return PERMITED_EXT.includes(ext);
};

const getExt = (mimetype: string) => {
  return mimetype.split("/").pop();
};

export const filterExtensions = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  const ext = getExt(file.mimetype) || "";

  if (!isValidExt(ext)) {
    const error = createCustomError(
      `${ext} was not valid file extension!`,
      422
    );
    return cb(error); // To Reject
  }

  cb(null, true);
};
