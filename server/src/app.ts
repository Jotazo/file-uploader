import express from "express";
import cors from "cors";
import path from "path";

import uploadRouter from "./routes/upload";
import createUploadsFolder from "./utils/createUploadsFolder";

const app = express();

createUploadsFolder();

app.use(cors());
app.use(express.static(path.join(__dirname, "uploads")));

app.get("/", (_, res) => {
  res.send("File Upload API");
});

app.use("/api", uploadRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server ready on: ${PORT}`));
