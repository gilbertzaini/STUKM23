const express = require("express");
const cors = require("cors");
const session = require("express-session"); // Fix the syntax here
const db = require("./config/database.js"); // Change the import syntax
const SequelizeStore = require("connect-session-sequelize");
const User = require("./models/User.js");
const Vote = require("./models/Vote.js");
const uuid = require("uuid").v4; // Adjust the import syntax for uuid

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db: db,
});

app.use(
  cors({
    credentials: true,
    origin: 'https://stukmumn.com/',
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
      secure: "auto",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    },
  })
);

// Middleware to check if a session should be created
app.use((req, res, next) => {
  // Check if the user is already authenticated (e.g., has a userId in the session)
  if (!req.session.userId) {
    return next();
  }

  // If the user is authenticated, skip session creation
  return res.status(200).json({ msg: "User is already authenticated" });
});

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "loaded",
  });
});

app.get("/vote", async (req, res) => {
  try {
    const response = await Vote.findAll();
    res.status(200).json(response);
    console.log(`Response: ${response}`);
  } catch (e) {
    console.log(e.message);
  }
});

app.post("/vote", async (req, res) => {
  const {
    nama,
    nim,
    // email,
    jurusan,
    angkatan,
    ukm,
    olahraga,
    sainsos,
    senbud,
  } = req.body;
  const userId = uuid();
  const voteId = uuid();

  const existingUser = await User.findOne({
    where: {
      nim: nim,
    },
  });

  if (existingUser === null) {
    const newUser = await User.create({
      userId: userId,
      nama,
      nim,
      // email,
      jurusan,
      angkatan,
      ukm,
    });
    const newVote = await Vote.create({
      voteId: voteId,
      userId: userId,
      olahraga,
      sainsos,
      senbud,
    });
    // Generate a unique token for "Remember Me" functionality
    const rememberMeToken = uuid();

    // Set the token as a cookie with a long expiration time (e.g., 7 days)
    res.cookie("rememberMe", rememberMeToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: true,
    });

    req.session.userId = userId;

    console.log(`User Created: ${newUser}\n
                Vote Created: ${newVote}\n
                Session created for: ${nama}`);

    return res.status(201).json(`User Created: ${newUser}\n
                                Vote Created: ${newVote}`);
  } else {
    console.log(`\n\nUser has voted: ${existingUser}\n\n`);
    const rememberMeToken = uuid();

    res.cookie("rememberMe", rememberMeToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: true,
    });

    req.session.userId = existingUser.userId;

    console.log(`Session created for: ${existingUser}`);
    return res.status(202).json(`Logged In: ${existingUser}`);
  }
});

app.get("/logged-in-user", async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: "Mohon login ke akun Anda!" });
  }
  const user = await User.findOne({
    attributes: ["userId", "nama", "nim", "jurusan", "angkatan", "ukm"],
    where: {
      userId: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  res.status(200).json(user);
});

app.listen(8888, () => {
  console.log("Running on port 8888");
});
