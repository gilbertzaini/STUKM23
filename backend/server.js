import express from "express";
import cors from "cors";
import router from "./routes/routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(8888, () => {console.log("Running on port 8888")})