import { Request, Response } from "express";

const uploadFile = (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).send({ message: "No file founded" });
  }

  res.status(200).send({
    fileUrl: req.file.filename,
  });
};

export { uploadFile };
