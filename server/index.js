import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";

import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send("Hello server!");
});

app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);



const startServer = async () => {
  // const port = process.env.PORT || 5000;

  try {
    connectDB(process.env.MONGO_URL);
    app.listen(8080, () => {
      console.log(`Server is running on port http://localhost:8080`);
    });
  } catch (e) {
    console.log(e);
  }
};

startServer();
