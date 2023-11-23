import express from "express";
import cors from "cors";
import session from "express-session";
import voteRouter from "./routes/voteRoutes.js";
import db from "./config/database.js";
import SequelizeStore from "connect-session-sequelize";

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db: db
});

app.use(
  cors({
    credentials: true,
    origin: 'https://stukmumn.com',
  })
);

// store.sync();

app.use(
  session({
    secret: "serah-tahunan-ukm-2023",
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: 'auto',
      maxAge: 30 * 24 * 60 * 60 * 1000,
    }
  })
);

const router = express.Router();
app.use(express.json());
app.use(voteRouter);

app.listen(8888, () => {
  console.log("Running on port 8888");
});
