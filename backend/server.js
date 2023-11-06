import express from "express";
import cors from "cors";
import session from "express-session";
import voteRouter from "./routes/voteRoutes.js";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(
  session({
    secret: "serah-tahunan-ukm-2023",
    resave: false,
    saveUninitialized: true,
  })
);

const router = express.Router();
app.use(express.json());
app.use(voteRouter);

app.listen(8888, () => {
  console.log("Running on port 8888");
});
