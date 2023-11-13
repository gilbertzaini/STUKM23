import Vote from "../models/Vote.js";
import User from "../models/User.js";
import { v4 as uuid } from "uuid";

export const getVote = async (req, res) => {
  try {
    const response = await Vote.findAll();
    res.status(200).json(response);
    console.log(`Response: ${response}`);
  } catch (e) {
    console.log(e.message);
  }
};

export const postVote = async (req, res) => {
  // try {
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
        nim: nim
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
  // } catch (e) {
  //   console.log(e.message);
  // }
};
