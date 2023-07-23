import { Request, Response } from "express";

const uploadFile = (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).send({ message: "No file founded" });
  }

  const host =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001/"
      : req.headers.referer;

  res.status(200).send({
    fileUrl: `${host}${req.file.filename}`,
  });
};

export { uploadFile };
